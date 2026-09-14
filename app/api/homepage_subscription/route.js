import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
    try {
        const { email, phone } = await request.json();

        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.verify();
        // console.log("SMTP Connected");   // Verify connection.

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: "Newsletter Subscribed",
            html: `
        <h2>New Subscriber on subscriber home page! </h2>
        <p>A visitor has subscribed for Business & Innovation.CodeNexiss builds ultra-refined neural architectures for high-density enterprise logic.</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile no:</strong> ${phone}</p>
        <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
      `,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { success: false },
            { status: 500 }
        );
    }
}