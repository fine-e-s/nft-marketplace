import { auth } from "@/firebase";

export default async function handler(req, res) {
  console.log("logout");
  try {
    await auth.signOut();
    res.status(200).json({});
  } catch (err) {
    console.error(err);
  }
}
