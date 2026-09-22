import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      phone,
      subject,
      message,
      consent,
      website,
    } = body;

    // Honeypot spam protection
    if (website) {
      return NextResponse.json(
        { success: true, message: "Message sent successfully." },
        { status: 200 }
      );
    }

    // Validation
    if (!name || !email || !message || !consent) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill in all required fields.",
        },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter a valid email address.",
        },
        { status: 400 }
      );
    }

    if (name.length > 100 || email.length > 150 || message.length > 5000) {
      return NextResponse.json(
        {
          success: false,
          message: "One or more fields are too long.",
        },
        { status: 400 }
      );
    }

    // SMTP transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Verify SMTP connection
    await transporter.verify();

    const recipient = process.env.CONTACT_RECEIVER_EMAIL;

    if (!recipient) {
      throw new Error("CONTACT_RECEIVER_EMAIL is not configured.");
    }

    // Email sent to Yoga Cure Institute
    await transporter.sendMail({
      from: `"Yoga Cure Institute Website" <${process.env.SMTP_USER}>`,
      to: recipient,
      replyTo: email,
      subject: subject
        ? `Website Enquiry: ${subject}`
        : `New Website Enquiry from ${name}`,

      text: `
New enquiry received from the Yoga Cure Institute website.

Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}
Subject: ${subject || "Not provided"}

Message:
${message}
      `.trim(),

      html: `
        <div style="font-family: Arial, sans-serif; color: #292725; max-width: 650px;">
          <h2 style="color: #6B3020;">
            New Website Enquiry
          </h2>

          <p>
            A new message has been submitted through the Yoga Cure Institute
            contact form.
          </p>

          <table style="border-collapse: collapse; width: 100%; margin-top: 20px;">
            <tr>
              <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #ddd;">
                Name
              </td>
              <td style="padding: 10px; border-bottom: 1px solid #ddd;">
                ${escapeHtml(name)}
              </td>
            </tr>

            <tr>
              <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #ddd;">
                Email
              </td>
              <td style="padding: 10px; border-bottom: 1px solid #ddd;">
                ${escapeHtml(email)}
              </td>
            </tr>

            <tr>
              <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #ddd;">
                Phone
              </td>
              <td style="padding: 10px; border-bottom: 1px solid #ddd;">
                ${escapeHtml(phone || "Not provided")}
              </td>
            </tr>

            <tr>
              <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #ddd;">
                Subject
              </td>
              <td style="padding: 10px; border-bottom: 1px solid #ddd;">
                ${escapeHtml(subject || "Not provided")}
              </td>
            </tr>
          </table>

          <div style="margin-top: 25px;">
            <h3>Message</h3>

            <div
              style="
                background: #f3ebdd;
                padding: 18px;
                line-height: 1.6;
                white-space: pre-wrap;
              "
            >
              ${escapeHtml(message)}
            </div>
          </div>

          <p style="margin-top: 30px; color: #777;">
            This message was submitted through
            yogacureinstitute.com
          </p>
        </div>
      `,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Thank you. Your message has been sent successfully.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          "We could not send your message right now. Please try again or contact us directly.",
      },
      { status: 500 }
    );
  }
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}