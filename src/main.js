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

  // Lead Scoring Logic
  let leadScore = 50;
  let priority = "Low";

  switch (businessType) {

    case "Healthcare":
      leadScore = 90;
      priority = "High";
      break;

    case "BPO":
      leadScore = 80;
      priority = "High";
      break;

    case "Logistics":
      leadScore = 70;
      priority = "Medium";
      break;

    case "Entertainment":
      leadScore = 60;
      priority = "Medium";
      break;

    default:
      leadScore = 50;
      priority = "Low";
  }

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
    nextFollowUp,
    leadScore,
    priority
  ]);

  sendWelcomeEmail(
    name,
    email,
    leadId
  );

}
