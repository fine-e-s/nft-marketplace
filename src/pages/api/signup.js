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
        res.status(406).json({ message: err });
        console.error(err);
      }
      break;
    default:
      res.setHeader("Allow", ["POST", "GET"]);
      res.status(405).json({ message: `Method ${method} is forbidden.` });
  }
}
