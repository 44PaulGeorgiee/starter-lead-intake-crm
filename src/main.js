function syncLeadsToCRM() {

  const ss = SpreadsheetApp.getActiveSpreadsheet();

  const leadsSheet = ss.getSheetByName("Leads");
  const crmSheet = ss.getSheetByName("CRM");

  const leads = leadsSheet.getDataRange().getValues();

  for (let i = 1; i < leads.length; i++) {

    const row = leads[i];

    const name = row[1];
    const email = row[2];
    const phone = row[3];

    crmSheet.appendRow([
      "LD-" + Date.now() + i,
      name,
      email,
      phone,
      "Google Form",
      "New Lead"
    ]);
  }

}

