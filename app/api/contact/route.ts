// import { NextResponse } from "next/server";
// import nodemailer from "nodemailer";

// export async function POST(req: Request) {
//   const { fullName, company, workEmail, message } = await req.json();

//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASS,
//     },
//   });

//   await transporter.sendMail({
//     from: `"Website Contact" <${process.env.EMAIL_USER}>`,
//     to: process.env.EMAIL_USER,
//     replyTo: workEmail,
//     subject: "New Contact Form Submission",
//     html: `
//       <h2>New Contact Request</h2>
//       <p><strong>Name:</strong> ${fullName}</p>
//       <p><strong>Company:</strong> ${company || "N/A"}</p>
//       <p><strong>Email:</strong> ${workEmail}</p>
//       <p><strong>Message:</strong></p>
//       <p>${message}</p>
//     `,
//   });

//   return NextResponse.json({ success: true });
// }



import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const {
    fullName,
    workEmail,
    company,
    message,
    source = "Contact Form",
  } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: `"Website Lead" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    replyTo: workEmail,
    subject: `New Lead (${source})`,
    html: `
      <h2>New Website Lead</h2>
      <p><strong>Source:</strong> ${source}</p>
      <p><strong>Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${workEmail}</p>
      <p><strong>Company:</strong> ${company || "N/A"}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  });

  return NextResponse.json({ success: true });
}
