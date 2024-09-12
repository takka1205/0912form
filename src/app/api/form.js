// pages/api/form.js
import prisma from "../../lib/prisma";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    try {
      const result = await prisma.contactForm.create({
        data: {
          name,
          email,
          message,
        },
      });
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: "Error creating message" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
