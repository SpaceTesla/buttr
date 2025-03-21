// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { name, email, subject, message } = data;

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: 'All fields are required.' },
        { status: 400 },
      );
    }

    // Set up Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Use your email provider
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email details for company notification
    const companyMailOptions = {
      from: process.env.EMAIL_USER, // Your email as sender
      to: process.env.EMAIL_RECIPIENT || process.env.EMAIL_USER, // Recipient email
      replyTo: email, // Set reply-to as the sender's email
      subject: `Contact Form: ${subject || 'New message from website'}`,
      text: `
Name: ${name}
Email: ${email}
Subject: ${subject || 'N/A'}

Message:
${message}
            `,
      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Subject:</strong> ${subject || 'N/A'}</p>
    <hr style="border: 1px solid #eee;">
    <h3>Message:</h3>
    <p>${message.replace(/\n/g, '<br>')}</p>
</div>
            `,
    };

    // Confirmation email to sender
    const confirmationMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting BUTTR Sustainable Papers',
      text: `
Dear ${name},

Thank you for reaching out to BUTTR Sustainable Papers. We have received your message and appreciate your interest in our sustainable paper solutions.

Our team will review your inquiry and get back to you as soon as possible, typically within 1-2 business days.

For urgent matters, please contact us directly at +91-95996 34566.

Best regards,
The BUTTR Sustainable Papers Team
      `,
      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
    <div style="background-color: #f8f9fa; padding: 20px; text-align: center;">
        <h1 style="color: #2e7d32;">Thank You for Contacting Us</h1>
    </div>
    <div style="padding: 20px;">
        <p>Dear ${name},</p>
        <p>Thank you for reaching out to BUTTR Sustainable Papers. We have received your message and appreciate your interest in our sustainable paper solutions.</p>
        <p>Our team will review your inquiry and get back to you as soon as possible, typically within 1-2 business days.</p>
        <p>For urgent matters, please contact us directly at <a href="tel:+919599634566">+91-95996 34566</a>.</p>
        <p>Best regards,<br>The BUTTR Sustainable Papers Team</p>
    </div>
    <div style="background-color: #f8f9fa; padding: 15px; text-align: center; font-size: 12px; color: #666;">
        <p>BUTTR Sustainable Papers | Ground Floor, Galli No. 3, Nagli Nagla Village, Sector – 134, Noida</p>
        <p><a href="https://buttrpaper.com" style="color: #2e7d32;">www.buttrpaper.com</a></p>
    </div>
</div>
      `,
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(companyMailOptions),
      transporter.sendMail(confirmationMailOptions),
    ]);

    return NextResponse.json(
      { message: 'Your message has been sent successfully.' },
      { status: 200 },
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { message: 'Failed to send message. Please try again later.' },
      { status: 500 },
    );
  }
}
