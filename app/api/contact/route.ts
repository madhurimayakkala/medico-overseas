import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations";
import { SITE_CONTACT } from "@/lib/metadata";
import { appendContactToSheet } from "@/lib/sheets";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const result = contactFormSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          message: result.error.issues[0]?.message ?? "Invalid form data",
        },
        { status: 400 }
      );
    }

    const data = result.data;

    // honeypot check
    if (data.website && data.website.length > 0) {
      return NextResponse.json({
        success: true,
        message: "Thank you for reaching out! We'll get back to you soon.",
      });
    }

    // Save to Google Sheet (non-fatal if it fails)
    await appendContactToSheet(data);

    // Send email notification via Resend
    const resendApiKey = process.env.RESEND_API_KEY;

    if (resendApiKey) {
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "Medico Overseas Website <onboarding@resend.dev>",
            to: SITE_CONTACT.email,
            subject: `New Contact Message from ${data.fullName}`,
            html: `
              <h2>New Contact Form Message</h2>
              <p><strong>Name:</strong> ${data.fullName}</p>
              <p><strong>Phone:</strong> ${data.phone}</p>
              <p><strong>Email:</strong> ${data.email}</p>
              <p><strong>Message:</strong> ${data.message}</p>
            `,
          }),
        });
      } catch (emailError) {
        console.error("Failed to send contact email:", emailError);
      }
    } else {
      console.log("New contact message (RESEND_API_KEY not set):", data);
    }

    return NextResponse.json({
      success: true,
      message: "Thank you for reaching out! We'll get back to you soon.",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}