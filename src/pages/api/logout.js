import { auth } from "@/firebase";

export default async function handler(req, res) {
  try {
    await auth.signOut();
    res.status(200).json({ message: "Logged out." });
  } catch (err) {
    res.status(406).json({ message: err });
    console.error(err);
  }
}
