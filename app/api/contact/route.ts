import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2).max(80),

  email: z.string().trim().email().max(150),

  phone: z
    .string()
    .trim()
    .refine(
      (value) => value === "" || /^[+]?[0-9\s()-]{8,18}$/.test(value),
      "Invalid phone number",
    ),

  subject: z.string().trim().min(3).max(120),

  message: z.string().trim().min(20).max(3000),

  consent: z.literal(true),

  faxNumber: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Spam honeypot
    if (body.faxNumber) {
      return NextResponse.json(
        {
          success: false,
          message: "Please check the information you entered.",
        },
        { status: 400 },
      );
    }

    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Please check the information you entered.",
          errors: result.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    const { name, email, phone, subject, message } = result.data;

    if (
      !process.env.SMTP_HOST ||
      !process.env.SMTP_PORT ||
      !process.env.SMTP_USER ||
      !process.env.SMTP_PASS ||
      !process.env.CONTACT_RECEIVER_EMAIL
    ) {
      console.error("Missing SMTP environment variables.");

      return NextResponse.json(
        {
          success: false,
          message:
            "Email service is not configured. Please contact us directly.",
        },
        { status: 500 },
      );
    }

    const smtpPort = Number(process.env.SMTP_PORT);
    const smtpPassword = process.env.SMTP_PASS.replace(/\s+/g, "");

    if (!Number.isInteger(smtpPort) || smtpPort < 1 || smtpPort > 65535) {
      console.error("Invalid SMTP_PORT environment variable.");

      return NextResponse.json(
        {
          success: false,
          message:
            "Email service is not configured correctly. Please contact us directly.",
        },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: smtpPort,
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: smtpPassword,
      },
    });

    await transporter.sendMail({
      from: `"Yoga Cure Institute Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECEIVER_EMAIL,
      replyTo: email,
      subject: `Website Enquiry: ${subject}`,

      text: `
New enquiry from the Yoga Cure Institute website.

Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}
Subject: ${subject}

Message:
${message}
      `.trim(),

      html: `
        <div style="font-family: Arial, sans-serif; max-width: 650px; color: #292725;">
          <h2 style="color: #6B3020;">
            New Website Enquiry
          </h2>

          <p>
            A new message was submitted through the Yoga Cure Institute
            contact form.
          </p>

          <table
            style="
              width: 100%;
              border-collapse: collapse;
              margin-top: 20px;
            "
          >
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
                ${escapeHtml(subject)}
              </td>
            </tr>
          </table>

          <h3 style="margin-top: 30px;">
            Message
          </h3>

          <div
            style="
              background: #F3EBDD;
              padding: 18px;
              line-height: 1.7;
              white-space: pre-wrap;
            "
          >
            ${escapeHtml(message)}
          </div>

          <p style="margin-top: 30px; color: #777;">
            Reply directly to this email to respond to ${escapeHtml(name)}.
          </p>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Thank you. Your message has been sent successfully.",
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          "We could not send your message right now. Please try again later.",
      },
      { status: 500 },
    );
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
