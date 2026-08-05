import { google } from "googleapis";

const SHEET_ID = process.env.GOOGLE_SHEET_ID!;

function getAuth() {
  return new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
}

export async function appendLeadToSheet(data: {
  fullName: string;
  phone: string;
  email: string;
  interestedCountry: string;
  preferredIntake: string;
  qualification: string;
  message?: string;
}) {
  try {
    const auth = getAuth();
    const sheets = google.sheets({ version: "v4", auth });

    // Ensure header row exists
    const header = await sheets.spreadsheets.values.get({
      spreadsheetId: SHEET_ID,
      range: "Leads!A1:H1",
    });

    if (!header.data.values || header.data.values.length === 0) {
      await sheets.spreadsheets.values.update({
        spreadsheetId: SHEET_ID,
        range: "Leads!A1",
        valueInputOption: "RAW",
        requestBody: {
          values: [[
            "Timestamp",
            "Full Name",
            "Phone",
            "Email",
            "Interested Country",
            "Preferred Intake",
            "Qualification",
            "Message",
          ]],
        },
      });
    }

    await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: "Leads!A:H",
      valueInputOption: "RAW",
      insertDataOption: "INSERT_ROWS",
      requestBody: {
        values: [[
          new Date().toISOString(),
          data.fullName,
          data.phone,
          data.email,
          data.interestedCountry,
          data.preferredIntake,
          data.qualification,
          data.message ?? "",
        ]],
      },
    });
  } catch (err) {
    // Non-fatal — email still goes through even if sheet fails
    console.error("Failed to append lead to sheet:", err);
  }
}

export async function appendContactToSheet(data: {
  fullName: string;
  phone: string;
  email: string;
  message: string;
}) {
  try {
    const auth = getAuth();
    const sheets = google.sheets({ version: "v4", auth });

    // Ensure header row exists
    const header = await sheets.spreadsheets.values.get({
      spreadsheetId: SHEET_ID,
      range: "Contact!A1:E1",
    });

    if (!header.data.values || header.data.values.length === 0) {
      await sheets.spreadsheets.values.update({
        spreadsheetId: SHEET_ID,
        range: "Contact!A1",
        valueInputOption: "RAW",
        requestBody: {
          values: [[
            "Timestamp",
            "Full Name",
            "Phone",
            "Email",
            "Message",
          ]],
        },
      });
    }

    await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: "Contact!A:E",
      valueInputOption: "RAW",
      insertDataOption: "INSERT_ROWS",
      requestBody: {
        values: [[
          new Date().toISOString(),
          data.fullName,
          data.phone,
          data.email,
          data.message,
        ]],
      },
    });
  } catch (err) {
    console.error("Failed to append contact to sheet:", err);
  }
}