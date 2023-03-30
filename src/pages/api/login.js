import { auth } from "@/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export default async function handler(req, res) {
  const { method, body } = req;
  switch (method) {
    case "GET":
      try {
        res
          .status(200)
          .json({ user: auth.currentUser, logged: !!auth.currentUser });
      } catch (err) {
        res.status(406).json({ message: err });
        console.error(err);
      }
      break;
    case "POST":
      try {
        await signInWithEmailAndPassword(auth, body.email, body.password);
        res.status(200).json({ message: "Logged in." });
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
