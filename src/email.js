function sendWelcomeEmail(
  name,
  email,
  leadId
) {

  GmailApp.sendEmail(
    email,
    "Thank you for contacting Starter Code Automations",

    `Hi ${name},

Thank you for reaching out to Starter Code Automations.

We have successfully received your inquiry.

Lead Reference Number:
${leadId}

Our team will review your request and contact you shortly.

Best regards,

Paul John Rosellosa
Founder
Starter Code Automations`
  );

}
