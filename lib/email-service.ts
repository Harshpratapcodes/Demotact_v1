import { emailTemplates, personalizeEmail, scheduleFollowUpEmails } from "./email-templates"

export interface ContactFormData {
  name: string
  email: string
  phone: string
  contactType: "consultation" | "callback" | "whatsapp" | "general"
  additionalData?: Record<string, string>
}

export class EmailService {
  private static instance: EmailService
  private scheduledEmails: Array<{
    id: string
    sendTime: Date
    template: any
    recipient: string
    sequenceType: string
    status: "pending" | "sent" | "failed"
  }> = []

  static getInstance(): EmailService {
    if (!EmailService.instance) {
      EmailService.instance = new EmailService()
    }
    return EmailService.instance
  }

  // Send immediate confirmation email
  async sendConfirmationEmail(formData: ContactFormData): Promise<boolean> {
    try {
      const template = this.getConfirmationTemplate(formData.contactType)
      const personalizedTemplate = personalizeEmail(template, {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        ...formData.additionalData,
      })

      // In a real application, you would integrate with an email service like:
      // - SendGrid
      // - Mailgun
      // - AWS SES
      // - Resend

      console.log("Sending confirmation email:", {
        to: formData.email,
        subject: personalizedTemplate.subject,
        html: personalizedTemplate.html,
      })

      // Simulate email sending
      await this.simulateEmailSend(personalizedTemplate, formData.email)

      return true
    } catch (error) {
      console.error("Failed to send confirmation email:", error)
      return false
    }
  }

  // Schedule follow-up email sequence
  scheduleFollowUpSequence(formData: ContactFormData): void {
    const recipientData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      consultationType: formData.additionalData?.consultationType || "General",
      electionType: formData.additionalData?.electionType || "Assembly",
      preferredTime: formData.additionalData?.preferredTime || "Flexible",
      callTime: formData.additionalData?.callTime || "Anytime",
      requestTime: new Date().toLocaleString(),
    }

    const scheduledEmails = scheduleFollowUpEmails(formData.contactType, recipientData)

    scheduledEmails.forEach((email, index) => {
      const emailId = `${formData.contactType}_${formData.email}_${Date.now()}_${index}`

      this.scheduledEmails.push({
        id: emailId,
        sendTime: email.sendTime,
        template: email.template,
        recipient: email.recipient,
        sequenceType: email.sequenceType,
        status: "pending",
      })

      // Schedule the email to be sent
      this.scheduleEmail(emailId, email.sendTime, email.template, email.recipient)
    })

    console.log(`Scheduled ${scheduledEmails.length} follow-up emails for ${formData.email}`)
  }

  // Get appropriate confirmation template
  private getConfirmationTemplate(contactType: string) {
    switch (contactType) {
      case "consultation":
        return emailTemplates.consultationConfirmation
      case "callback":
        return emailTemplates.callbackConfirmation
      case "whatsapp":
        return emailTemplates.whatsappFollowUp
      default:
        return emailTemplates.callbackConfirmation
    }
  }

  // Schedule individual email
  private scheduleEmail(id: string, sendTime: Date, template: any, recipient: string): void {
    const delay = sendTime.getTime() - Date.now()

    if (delay > 0) {
      setTimeout(async () => {
        try {
          await this.simulateEmailSend(template, recipient)
          this.updateEmailStatus(id, "sent")
          console.log(`Follow-up email sent to ${recipient}`)
        } catch (error) {
          this.updateEmailStatus(id, "failed")
          console.error(`Failed to send follow-up email to ${recipient}:`, error)
        }
      }, delay)
    }
  }

  // Simulate email sending (replace with real email service)
  private async simulateEmailSend(template: any, recipient: string): Promise<void> {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // In production, replace this with actual email service integration:
    /*
    const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        personalizations: [{
          to: [{ email: recipient }]
        }],
        from: { email: 'hello@victoryconsult.in', name: 'VictoryConsult' },
        subject: template.subject,
        content: [
          { type: 'text/html', value: template.html },
          { type: 'text/plain', value: template.text }
        ]
      })
    })
    */

    console.log(`📧 Email sent to ${recipient}: ${template.subject}`)
  }

  // Update email status
  private updateEmailStatus(id: string, status: "pending" | "sent" | "failed"): void {
    const email = this.scheduledEmails.find((e) => e.id === id)
    if (email) {
      email.status = status
    }
  }

  // Get scheduled emails (for admin dashboard)
  getScheduledEmails(): Array<{
    id: string
    sendTime: Date
    recipient: string
    sequenceType: string
    status: string
  }> {
    return this.scheduledEmails.map((email) => ({
      id: email.id,
      sendTime: email.sendTime,
      recipient: email.recipient,
      sequenceType: email.sequenceType,
      status: email.status,
    }))
  }

  // Cancel scheduled emails for a recipient
  cancelScheduledEmails(email: string): void {
    this.scheduledEmails = this.scheduledEmails.filter((scheduledEmail) => scheduledEmail.recipient !== email)
    console.log(`Cancelled scheduled emails for ${email}`)
  }

  // Get email analytics
  getEmailAnalytics() {
    const total = this.scheduledEmails.length
    const sent = this.scheduledEmails.filter((e) => e.status === "sent").length
    const pending = this.scheduledEmails.filter((e) => e.status === "pending").length
    const failed = this.scheduledEmails.filter((e) => e.status === "failed").length

    return {
      total,
      sent,
      pending,
      failed,
      deliveryRate: total > 0 ? (sent / total) * 100 : 0,
    }
  }
}

// Export singleton instance
export const emailService = EmailService.getInstance()
