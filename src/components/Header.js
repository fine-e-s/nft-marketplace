import Link from "next/link";
import Button from "./Button";

export default function Header() {
  return (
    <>
      <div className="flex justify-center px-[50px]">
        <div className="flex h-24 w-full items-center">
          <div className="translate-y-[-2px]">
            <Link href="/">
              <img src="icons/logo.svg" className="hoverScale" />
            </Link>
          </div>
          <div className="ml-auto flex items-center gap-2.5 font-semibold">
            <Link href="/marketplace">
              <Button hoverUnderline>Marketplace</Button>
            </Link>
            <Button hoverUnderline>Ranking</Button>
            <Button hoverUnderline>Connect a wallet</Button>
            <Button cta hoverScale>
              <img src="icons/user.svg" style={{ background: "transparent" }} />
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
