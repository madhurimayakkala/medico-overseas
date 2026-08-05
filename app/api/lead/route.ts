import { NextRequest, NextResponse } from "next/server";
import { leadFormSchema } from "@/lib/validations";
import { SITE_CONTACT } from "@/lib/metadata";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const result = leadFormSchema.safeParse(body);

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

    // honeypot check - if filled, silently pretend success to not tip off bots
    if (data.website && data.website.length > 0) {
      return NextResponse.json({
        success: true,
        message: "Thank you! Our counsellor will contact you shortly.",
      });
    }

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
            subject: `New Lead: ${data.fullName} - ${data.interestedCountry}`,
            html: `
              <h2>New MBBS Abroad Inquiry</h2>
              <p><strong>Name:</strong> ${data.fullName}</p>
              <p><strong>Phone:</strong> ${data.phone}</p>
              <p><strong>Email:</strong> ${data.email}</p>
              <p><strong>Interested Country:</strong> ${data.interestedCountry}</p>
              <p><strong>Preferred Intake:</strong> ${data.preferredIntake}</p>
              <p><strong>Qualification:</strong> ${data.qualification}</p>
              <p><strong>Message:</strong> ${data.message ?? "N/A"}</p>
            `,
          }),
        });
      } catch (emailError) {
        console.error("Failed to send lead email:", emailError);
      }
    } else {
      console.log("New lead (RESEND_API_KEY not set):", data);
    }

    return NextResponse.json({
      success: true,
      message: "Thank you! Our counsellor will contact you shortly.",
    });
  } catch (error) {
    console.error("Lead form error:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}