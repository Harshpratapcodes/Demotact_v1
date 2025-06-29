export interface EmailTemplate {
  subject: string
  html: string
  text: string
}

export interface FollowUpSequence {
  name: string
  emails: {
    delay: number // hours
    template: EmailTemplate
  }[]
}

// Email Templates
export const emailTemplates = {
  // Consultation Booking Confirmation
  consultationConfirmation: {
    subject: "✅ Your Political Strategy Consultation is Confirmed - VictoryConsult",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff;">
        <div style="background: linear-gradient(135deg, #ff9933 0%, #e74c3c 100%); padding: 30px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 28px;">🎯 Consultation Confirmed!</h1>
          <p style="color: #fff3e0; margin: 10px 0 0 0; font-size: 16px;">Your political strategy session is booked</p>
        </div>
        
        <div style="padding: 30px;">
          <h2 style="color: #2c3e50; margin-bottom: 20px;">Hello {{name}},</h2>
          
          <p style="color: #555; line-height: 1.6; margin-bottom: 20px;">
            Thank you for booking a consultation with VictoryConsult! We're excited to help you develop a winning campaign strategy.
          </p>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #ff9933; margin-top: 0;">📅 Consultation Details:</h3>
            <ul style="color: #555; line-height: 1.8;">
              <li><strong>Duration:</strong> 30 minutes</li>
              <li><strong>Type:</strong> {{consultationType}} consultation</li>
              <li><strong>Preferred Time:</strong> {{preferredTime}}</li>
              <li><strong>Focus Area:</strong> {{electionType}} campaign strategy</li>
            </ul>
          </div>
          
          <div style="background-color: #e8f5e8; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #27ae60; margin-top: 0;">🚀 What to Expect:</h3>
            <ul style="color: #555; line-height: 1.8;">
              <li>Comprehensive campaign assessment</li>
              <li>Customized strategy recommendations</li>
              <li>Resource allocation guidance</li>
              <li>Timeline and milestone planning</li>
              <li>Q&A session for your specific challenges</li>
            </ul>
          </div>
          
          <div style="background-color: #fff3cd; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #856404; margin-top: 0;">📋 Please Prepare:</h3>
            <ul style="color: #555; line-height: 1.8;">
              <li>Constituency demographics and voter data (if available)</li>
              <li>Current campaign budget estimates</li>
              <li>Key campaign challenges you're facing</li>
              <li>Timeline for upcoming elections</li>
              <li>Any specific questions about our services</li>
            </ul>
          </div>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="tel:+919876543210" style="background-color: #ff9933; color: white; padding: 15px 30px; text-decoration: none; border-radius: 25px; font-weight: bold; display: inline-block;">
              📞 Call Us: +91 98765 43210
            </a>
          </div>
          
          <p style="color: #555; line-height: 1.6;">
            Our strategy team will contact you within 2 hours to confirm the exact time and send you a calendar invite.
          </p>
          
          <div style="border-top: 2px solid #ff9933; padding-top: 20px; margin-top: 30px;">
            <p style="color: #777; font-size: 14px; margin: 0;">
              Best regards,<br>
              <strong>The VictoryConsult Strategy Team</strong><br>
              📧 strategy@victoryconsult.in | 📱 +91 98765 43210
            </p>
          </div>
        </div>
      </div>
    `,
    text: `
Consultation Confirmed - VictoryConsult

Hello {{name}},

Thank you for booking a consultation with VictoryConsult! We're excited to help you develop a winning campaign strategy.

Consultation Details:
- Duration: 30 minutes
- Type: {{consultationType}} consultation
- Preferred Time: {{preferredTime}}
- Focus Area: {{electionType}} campaign strategy

What to Expect:
- Comprehensive campaign assessment
- Customized strategy recommendations
- Resource allocation guidance
- Timeline and milestone planning
- Q&A session for your specific challenges

Please Prepare:
- Constituency demographics and voter data (if available)
- Current campaign budget estimates
- Key campaign challenges you're facing
- Timeline for upcoming elections
- Any specific questions about our services

Our strategy team will contact you within 2 hours to confirm the exact time and send you a calendar invite.

Call us: +91 98765 43210
Email: strategy@victoryconsult.in

Best regards,
The VictoryConsult Strategy Team
    `,
  },

  // Contact Callback Confirmation
  callbackConfirmation: {
    subject: "📞 Callback Requested - We'll Call You Soon | VictoryConsult",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff;">
        <div style="background: linear-gradient(135deg, #3498db 0%, #2980b9 100%); padding: 30px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 28px;">📞 Callback Requested</h1>
          <p style="color: #ebf3fd; margin: 10px 0 0 0; font-size: 16px;">We'll call you back shortly</p>
        </div>
        
        <div style="padding: 30px;">
          <h2 style="color: #2c3e50; margin-bottom: 20px;">Hello {{name}},</h2>
          
          <p style="color: #555; line-height: 1.6; margin-bottom: 20px;">
            Thank you for requesting a callback! Our political consulting experts will contact you soon to discuss your campaign needs.
          </p>
          
          <div style="background-color: #e3f2fd; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1976d2; margin-top: 0;">📋 Your Request Details:</h3>
            <ul style="color: #555; line-height: 1.8;">
              <li><strong>Phone:</strong> {{phone}}</li>
              <li><strong>Best Time to Call:</strong> {{callTime}}</li>
              <li><strong>Request Time:</strong> {{requestTime}}</li>
            </ul>
          </div>
          
          <div style="background-color: #f3e5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #7b1fa2; margin-top: 0;">⏰ When to Expect Our Call:</h3>
            <ul style="color: #555; line-height: 1.8;">
              <li><strong>Business Hours:</strong> Within 30 minutes</li>
              <li><strong>After Hours:</strong> Next business day morning</li>
              <li><strong>Weekends:</strong> Monday morning priority</li>
            </ul>
          </div>
          
          <div style="background-color: #fff8e1; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #f57f17; margin-top: 0;">🎯 What We'll Discuss:</h3>
            <ul style="color: #555; line-height: 1.8;">
              <li>Your specific campaign requirements</li>
              <li>Available consulting services</li>
              <li>Timeline and budget considerations</li>
              <li>Next steps for your campaign</li>
            </ul>
          </div>
          
          <div style="text-align: center; margin: 30px 0;">
            <p style="color: #555; margin-bottom: 15px;">Need immediate assistance?</p>
            <a href="https://wa.me/919876543210" style="background-color: #25d366; color: white; padding: 12px 25px; text-decoration: none; border-radius: 25px; font-weight: bold; display: inline-block; margin-right: 10px;">
              💬 WhatsApp Us
            </a>
            <a href="mailto:hello@victoryconsult.in" style="background-color: #3498db; color: white; padding: 12px 25px; text-decoration: none; border-radius: 25px; font-weight: bold; display: inline-block;">
              📧 Email Us
            </a>
          </div>
          
          <div style="border-top: 2px solid #3498db; padding-top: 20px; margin-top: 30px;">
            <p style="color: #777; font-size: 14px; margin: 0;">
              Best regards,<br>
              <strong>VictoryConsult Support Team</strong><br>
              📧 hello@victoryconsult.in | 📱 +91 98765 43210
            </p>
          </div>
        </div>
      </div>
    `,
    text: `
Callback Requested - VictoryConsult

Hello {{name}},

Thank you for requesting a callback! Our political consulting experts will contact you soon to discuss your campaign needs.

Your Request Details:
- Phone: {{phone}}
- Best Time to Call: {{callTime}}
- Request Time: {{requestTime}}

When to Expect Our Call:
- Business Hours: Within 30 minutes
- After Hours: Next business day morning
- Weekends: Monday morning priority

What We'll Discuss:
- Your specific campaign requirements
- Available consulting services
- Timeline and budget considerations
- Next steps for your campaign

Need immediate assistance?
WhatsApp: +91 98765 43210
Email: hello@victoryconsult.in

Best regards,
VictoryConsult Support Team
    `,
  },

  // WhatsApp Follow-up
  whatsappFollowUp: {
    subject: "💬 Thanks for Your WhatsApp Message | VictoryConsult",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff;">
        <div style="background: linear-gradient(135deg, #25d366 0%, #128c7e 100%); padding: 30px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 28px;">💬 WhatsApp Connected!</h1>
          <p style="color: #e8f5e8; margin: 10px 0 0 0; font-size: 16px;">We've received your message</p>
        </div>
        
        <div style="padding: 30px;">
          <h2 style="color: #2c3e50; margin-bottom: 20px;">Hello there! 👋</h2>
          
          <p style="color: #555; line-height: 1.6; margin-bottom: 20px;">
            Thank you for reaching out to us on WhatsApp! We're excited to help you with your political campaign needs.
          </p>
          
          <div style="background-color: #e8f5e8; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #25d366; margin-top: 0;">⚡ Quick Response Promise:</h3>
            <ul style="color: #555; line-height: 1.8;">
              <li><strong>Business Hours:</strong> Under 5 minutes</li>
              <li><strong>After Hours:</strong> Within 2 hours</li>
              <li><strong>Weekends:</strong> Within 4 hours</li>
            </ul>
          </div>
          
          <div style="background-color: #fff3e0; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #ff9933; margin-top: 0;">🎯 Our WhatsApp Services:</h3>
            <ul style="color: #555; line-height: 1.8;">
              <li>Instant campaign strategy consultation</li>
              <li>Quick service information and pricing</li>
              <li>Document sharing and case studies</li>
              <li>Real-time support during campaigns</li>
              <li>Emergency campaign assistance</li>
            </ul>
          </div>
          
          <div style="background-color: #f3e5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #9c27b0; margin-top: 0;">📱 Save Our Numbers:</h3>
            <ul style="color: #555; line-height: 1.8;">
              <li><strong>Campaign Strategy:</strong> +91 98765 43210</li>
              <li><strong>Digital Marketing:</strong> +91 98765 43211</li>
              <li><strong>Emergency Support:</strong> +91 98765 43212</li>
            </ul>
          </div>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="https://wa.me/919876543210" style="background-color: #25d366; color: white; padding: 15px 30px; text-decoration: none; border-radius: 25px; font-weight: bold; display: inline-block;">
              💬 Continue on WhatsApp
            </a>
          </div>
          
          <p style="color: #555; line-height: 1.6; font-style: italic;">
            Pro Tip: For faster service, please mention your constituency, election type, and specific requirements in your WhatsApp message.
          </p>
          
          <div style="border-top: 2px solid #25d366; padding-top: 20px; margin-top: 30px;">
            <p style="color: #777; font-size: 14px; margin: 0;">
              Best regards,<br>
              <strong>VictoryConsult WhatsApp Team</strong><br>
              💬 WhatsApp: +91 98765 43210
            </p>
          </div>
        </div>
      </div>
    `,
    text: `
WhatsApp Connected - VictoryConsult

Hello there!

Thank you for reaching out to us on WhatsApp! We're excited to help you with your political campaign needs.

Quick Response Promise:
- Business Hours: Under 5 minutes
- After Hours: Within 2 hours
- Weekends: Within 4 hours

Our WhatsApp Services:
- Instant campaign strategy consultation
- Quick service information and pricing
- Document sharing and case studies
- Real-time support during campaigns
- Emergency campaign assistance

Save Our Numbers:
- Campaign Strategy: +91 98765 43210
- Digital Marketing: +91 98765 43211
- Emergency Support: +91 98765 43212

Pro Tip: For faster service, please mention your constituency, election type, and specific requirements in your WhatsApp message.

Best regards,
VictoryConsult WhatsApp Team
    `,
  },

  // Follow-up Email Templates
  consultationFollowUp1: {
    subject: "🎯 Your Campaign Strategy Awaits - Let's Schedule Your Session",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff;">
        <div style="background: linear-gradient(135deg, #ff9933 0%, #e74c3c 100%); padding: 30px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 28px;">⏰ Don't Miss Your Free Consultation</h1>
        </div>
        
        <div style="padding: 30px;">
          <h2 style="color: #2c3e50; margin-bottom: 20px;">Hello {{name}},</h2>
          
          <p style="color: #555; line-height: 1.6; margin-bottom: 20px;">
            We noticed you requested a political strategy consultation but haven't scheduled it yet. Your winning campaign strategy is just one conversation away!
          </p>
          
          <div style="background-color: #fff3e0; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #ff9933; margin-top: 0;">🚀 What You'll Get (FREE):</h3>
            <ul style="color: #555; line-height: 1.8;">
              <li>30-minute strategy session with our experts</li>
              <li>Customized campaign roadmap for {{electionType}}</li>
              <li>Budget optimization recommendations</li>
              <li>Voter outreach strategy insights</li>
              <li>Competitive analysis framework</li>
            </ul>
          </div>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="tel:+919876543210" style="background-color: #ff9933; color: white; padding: 15px 30px; text-decoration: none; border-radius: 25px; font-weight: bold; display: inline-block;">
              📞 Call Now to Schedule
            </a>
          </div>
          
          <p style="color: #555; line-height: 1.6; text-align: center; font-style: italic;">
            "The best time to plant a tree was 20 years ago. The second best time is now." - Start your winning campaign today!
          </p>
        </div>
      </div>
    `,
    text: `
Don't Miss Your Free Consultation - VictoryConsult

Hello {{name}},

We noticed you requested a political strategy consultation but haven't scheduled it yet. Your winning campaign strategy is just one conversation away!

What You'll Get (FREE):
- 30-minute strategy session with our experts
- Customized campaign roadmap for {{electionType}}
- Budget optimization recommendations
- Voter outreach strategy insights
- Competitive analysis framework

Call now to schedule: +91 98765 43210

"The best time to plant a tree was 20 years ago. The second best time is now." - Start your winning campaign today!
    `,
  },

  consultationFollowUp2: {
    subject: "📊 Case Study: How We Helped Win 89% of Campaigns",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff;">
        <div style="background: linear-gradient(135deg, #27ae60 0%, #2ecc71 100%); padding: 30px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 28px;">📊 89% Win Rate</h1>
          <p style="color: #e8f5e8; margin: 10px 0 0 0; font-size: 16px;">Real results from real campaigns</p>
        </div>
        
        <div style="padding: 30px;">
          <h2 style="color: #2c3e50; margin-bottom: 20px;">Hello {{name}},</h2>
          
          <p style="color: #555; line-height: 1.6; margin-bottom: 20px;">
            Since you're interested in political consulting, I thought you'd like to see how we've helped candidates like you achieve remarkable success.
          </p>
          
          <div style="background-color: #e8f5e8; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #27ae60; margin-top: 0;">🏆 Recent Success Story:</h3>
            <p style="color: #555; line-height: 1.6; margin-bottom: 15px;">
              <strong>Maharashtra Assembly 2023:</strong> First-time candidate trailing by 15% in early polls
            </p>
            <ul style="color: #555; line-height: 1.8;">
              <li><strong>Challenge:</strong> Unknown candidate vs 3-term incumbent</li>
              <li><strong>Strategy:</strong> Youth-focused digital campaign + grassroots mobilization</li>
              <li><strong>Result:</strong> Won by 32% margin (47% vote share increase)</li>
              <li><strong>Timeline:</strong> 4-month campaign transformation</li>
            </ul>
          </div>
          
          <div style="background-color: #fff3e0; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #ff9933; margin-top: 0;">🎯 Key Success Factors:</h3>
            <ul style="color: #555; line-height: 1.8;">
              <li>Data-driven voter segmentation</li>
              <li>Targeted social media campaigns</li>
              <li>Strategic booth management</li>
              <li>Real-time sentiment tracking</li>
              <li>Professional campaign branding</li>
            </ul>
          </div>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="https://wa.me/919876543210?text=Hi! I'd like to know more about your campaign success stories and how you can help my campaign." style="background-color: #25d366; color: white; padding: 15px 30px; text-decoration: none; border-radius: 25px; font-weight: bold; display: inline-block;">
              💬 Get Your Success Story
            </a>
          </div>
          
          <p style="color: #555; line-height: 1.6; text-align: center;">
            Ready to be our next success story? Let's discuss your campaign strategy.
          </p>
        </div>
      </div>
    `,
    text: `
Case Study: How We Helped Win 89% of Campaigns - VictoryConsult

Hello {{name}},

Since you're interested in political consulting, I thought you'd like to see how we've helped candidates like you achieve remarkable success.

Recent Success Story:
Maharashtra Assembly 2023: First-time candidate trailing by 15% in early polls

- Challenge: Unknown candidate vs 3-term incumbent
- Strategy: Youth-focused digital campaign + grassroots mobilization
- Result: Won by 32% margin (47% vote share increase)
- Timeline: 4-month campaign transformation

Key Success Factors:
- Data-driven voter segmentation
- Targeted social media campaigns
- Strategic booth management
- Real-time sentiment tracking
- Professional campaign branding

Ready to be our next success story? Let's discuss your campaign strategy.
WhatsApp: +91 98765 43210
    `,
  },

  finalFollowUp: {
    subject: "🎯 Last Chance: Free Campaign Strategy Session Expires Soon",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff;">
        <div style="background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%); padding: 30px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 28px;">⏰ Final Notice</h1>
          <p style="color: #fadbd8; margin: 10px 0 0 0; font-size: 16px;">Your free consultation expires in 48 hours</p>
        </div>
        
        <div style="padding: 30px;">
          <h2 style="color: #2c3e50; margin-bottom: 20px;">Hello {{name}},</h2>
          
          <p style="color: #555; line-height: 1.6; margin-bottom: 20px;">
            This is my final email about your free political strategy consultation. After this, we'll focus on helping other candidates who are ready to take action.
          </p>
          
          <div style="background-color: #ffebee; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #e74c3c;">
            <h3 style="color: #c62828; margin-top: 0;">⚠️ What You're Missing:</h3>
            <ul style="color: #555; line-height: 1.8;">
              <li>Free 30-minute strategy session (Worth ₹5,000)</li>
              <li>Customized campaign roadmap</li>
              <li>Competitive analysis insights</li>
              <li>Budget optimization tips</li>
              <li>Direct access to our expert team</li>
            </ul>
          </div>
          
          <div style="background-color: #e8f5e8; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #27ae60; margin-top: 0;">✅ Simple Next Steps:</h3>
            <ol style="color: #555; line-height: 1.8;">
              <li>Click the button below or call us</li>
              <li>Schedule your 30-minute session</li>
              <li>Get your winning strategy</li>
              <li>Start your successful campaign</li>
            </ol>
          </div>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="tel:+919876543210" style="background-color: #e74c3c; color: white; padding: 15px 30px; text-decoration: none; border-radius: 25px; font-weight: bold; display: inline-block; font-size: 18px;">
              📞 Claim Your Free Session Now
            </a>
          </div>
          
          <p style="color: #555; line-height: 1.6; text-align: center; font-style: italic;">
            "Success is where preparation and opportunity meet." - Don't let this opportunity pass by.
          </p>
          
          <div style="border-top: 2px solid #e74c3c; padding-top: 20px; margin-top: 30px;">
            <p style="color: #777; font-size: 14px; margin: 0;">
              This is the last email in this series. If you're not ready now, we understand. You can always reach us at hello@victoryconsult.in when you're ready to win.
            </p>
          </div>
        </div>
      </div>
    `,
    text: `
Last Chance: Free Campaign Strategy Session Expires Soon - VictoryConsult

Hello {{name}},

This is my final email about your free political strategy consultation. After this, we'll focus on helping other candidates who are ready to take action.

What You're Missing:
- Free 30-minute strategy session (Worth ₹5,000)
- Customized campaign roadmap
- Competitive analysis insights
- Budget optimization tips
- Direct access to our expert team

Simple Next Steps:
1. Call us at +91 98765 43210
2. Schedule your 30-minute session
3. Get your winning strategy
4. Start your successful campaign

"Success is where preparation and opportunity meet." - Don't let this opportunity pass by.

This is the last email in this series. If you're not ready now, we understand. You can always reach us at hello@victoryconsult.in when you're ready to win.
    `,
  },
}

// Follow-up Sequences
export const followUpSequences: Record<string, FollowUpSequence> = {
  consultation: {
    name: "Consultation Follow-up Sequence",
    emails: [
      {
        delay: 1, // 1 hour after booking
        template: emailTemplates.consultationConfirmation,
      },
      {
        delay: 48, // 2 days if no response
        template: emailTemplates.consultationFollowUp1,
      },
      {
        delay: 120, // 5 days - case study
        template: emailTemplates.consultationFollowUp2,
      },
      {
        delay: 168, // 7 days - final follow-up
        template: emailTemplates.finalFollowUp,
      },
    ],
  },

  callback: {
    name: "Callback Follow-up Sequence",
    emails: [
      {
        delay: 0.5, // 30 minutes after request
        template: emailTemplates.callbackConfirmation,
      },
      {
        delay: 24, // 1 day if no contact made
        template: emailTemplates.consultationFollowUp1,
      },
      {
        delay: 72, // 3 days - case study
        template: emailTemplates.consultationFollowUp2,
      },
    ],
  },

  whatsapp: {
    name: "WhatsApp Follow-up Sequence",
    emails: [
      {
        delay: 2, // 2 hours after WhatsApp interaction
        template: emailTemplates.whatsappFollowUp,
      },
      {
        delay: 48, // 2 days if no further engagement
        template: emailTemplates.consultationFollowUp1,
      },
    ],
  },

  general: {
    name: "General Inquiry Follow-up",
    emails: [
      {
        delay: 24, // 1 day after inquiry
        template: emailTemplates.consultationFollowUp1,
      },
      {
        delay: 96, // 4 days - case study
        template: emailTemplates.consultationFollowUp2,
      },
      {
        delay: 168, // 7 days - final follow-up
        template: emailTemplates.finalFollowUp,
      },
    ],
  },
}

// Email personalization helper
export function personalizeEmail(template: EmailTemplate, data: Record<string, string>): EmailTemplate {
  let personalizedHtml = template.html
  let personalizedText = template.text
  let personalizedSubject = template.subject

  // Replace placeholders with actual data
  Object.entries(data).forEach(([key, value]) => {
    const placeholder = `{{${key}}}`
    personalizedHtml = personalizedHtml.replace(new RegExp(placeholder, "g"), value)
    personalizedText = personalizedText.replace(new RegExp(placeholder, "g"), value)
    personalizedSubject = personalizedSubject.replace(new RegExp(placeholder, "g"), value)
  })

  return {
    subject: personalizedSubject,
    html: personalizedHtml,
    text: personalizedText,
  }
}

// Email scheduling helper
export function scheduleFollowUpEmails(
  sequenceType: keyof typeof followUpSequences,
  recipientData: Record<string, string>,
  startTime: Date = new Date(),
) {
  const sequence = followUpSequences[sequenceType]
  const scheduledEmails = []

  for (const emailConfig of sequence.emails) {
    const sendTime = new Date(startTime.getTime() + emailConfig.delay * 60 * 60 * 1000) // Convert hours to milliseconds
    const personalizedTemplate = personalizeEmail(emailConfig.template, recipientData)

    scheduledEmails.push({
      sendTime,
      template: personalizedTemplate,
      recipient: recipientData.email,
      sequenceType,
      delay: emailConfig.delay,
    })
  }

  return scheduledEmails
}
