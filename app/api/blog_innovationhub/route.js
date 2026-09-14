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
            subject: "Blog Innovation Hub Subscription",
            html: `
        <h2>New Subscriber on Innovation Hub Blog!</h2>
        <p>A new user has subscribed to the Innovation Hub Blog and joined the community to receive the latest updates, insights, and technology articles.</p>
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