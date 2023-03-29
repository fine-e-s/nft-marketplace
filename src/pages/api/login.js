import { auth } from "@/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default async function handler(req, res) {
  const { method, body } = req;

  switch (method) {
    case "POST":
      try {
        await createUserWithEmailAndPassword(auth, body.email, body.password);
        res.status(200).json({ message: "New user created." });
      } catch (err) {
        res.status(406).json({ message: "Invalid form." });
        console.error(err);
      }
      break;
    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} is forbidden.`);
  }
}
