import { transporter, mailOptions } from "../../config/nodemailer";

const handler = async (req, res) => {
  try {
    await transporter.sendMail({
      ...mailOptions,
      subject: "Sending Email using Node.js",
      text: "send demo",
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: err.message });
  }
};
export default handler;