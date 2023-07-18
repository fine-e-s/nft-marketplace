import { useRouter } from "next/router";

export default function Transition({ children }) {
  const router = useRouter();

  return (
    <>
      <div className="bg-inherit">{children}</div>
    </>
  );
}
