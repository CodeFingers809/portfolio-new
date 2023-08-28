import nodemailer from "nodemailer";

export default async function handler(req, res) {
  const { name, email, message } = req.body;
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "kaci42@ethereal.email",
      pass: "pREvgQuznXWWgcGV6Y",
    },
  });

  const info = await transporter.sendMail({
    from: '"NodeMailer" <kaci42@ethereal.email>', // sender address
    to: "aldbha123@gmail.com", // list of receivers
    subject: "Response to Contact Form", // Subject line
    html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
  });

  res.status(200).json({ status: "Success", info });
}
