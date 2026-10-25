function sendWelcomeEmail(name, email, leadId) {

  GmailApp.sendEmail(
    email,
    "Thank you for contacting Starter Code Automations",

    `Hi ${name},

Thank you for reaching out to Starter Code Automations.

We've successfully received your submission.

Lead Reference Number:
${leadId}

Our team will review your inquiry and get back to you as soon as possible.

Best regards,

Paul John Rosellosa
Founder
Starter Code Automations`
  );

}
