function onFormSubmit(e) {

  const crmSheet = SpreadsheetApp
    .getActiveSpreadsheet()
    .getSheetByName("CRM");

  const values = e.values;

  const name = values[1];
  const email = values[2];
  const phone = values[3];
  const businessType = values[4];
  const inquiry = values[5];

  const leadId = "LD-" + Date.now();

  const today = new Date();

  const nextFollowUp = new Date();
  nextFollowUp.setDate(today.getDate() + 3);

  crmSheet.appendRow([
    leadId,
    name,
    email,
    phone,
    businessType,
    inquiry,
    "Google Form",
    "New Lead",
    today,
    today,
    nextFollowUp
  ]);

  sendWelcomeEmail(
    name,
    email,
    leadId
  );

}
