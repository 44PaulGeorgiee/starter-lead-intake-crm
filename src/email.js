function onFormSubmit(e) {

  const crmSheet = SpreadsheetApp
    .getActiveSpreadsheet()
    .getSheetByName("CRM");

  const values = e.values;

  const name = values[1];
  const email = values[2];
  const phone = values[3];

  const leadId = "LD-" + Date.now();

  crmSheet.appendRow([
    leadId,
    name,
    email,
    phone,
    "Google Form",
    "New Lead"
  ]);

  GmailApp.sendEmail(
    email,
    "Thank you for contacting Starter Code Automations",

    `Hi ${name},

Thank you for reaching out!

We've successfully received your inquiry.

Lead ID: ${leadId}

We'll review your submission and get back to you shortly.

Best regards,
Paul John Rosellosa
Starter Code Automations`
  );
}
