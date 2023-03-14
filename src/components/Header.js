import Link from "next/link";
import Button from "./Button";

export default function Header() {
  return (
    <>
      <div className="my-4 flex h-auto w-full flex-col items-start gap-[16px] px-[50px] lg:my-0 lg:h-24 lg:flex-row lg:items-center">
        <div className="translate-y-[-2px]">
          <Link href="/">
            <img src="icons/logo.svg" className="hoverScale" />
          </Link>
        </div>
        <div className="ml-0 flex flex-col items-start gap-2.5 font-semibold lg:ml-auto lg:flex-row lg:items-center">
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
    </>
  );
}
