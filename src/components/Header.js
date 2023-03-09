import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

import styles from "@/styles/Home.module.css";

import userIcon from "/public/icons/user.svg";

export default function Header() {
  return (
    <>
      <div className="flex justify-center">
        <div className="flex h-24 w-4/6 items-center">
          <div>
            <Link href="/">
              <img src="icons/logo.svg" />
            </Link>
          </div>
          <div className="ml-auto flex items-center gap-2.5 font-semibold">
            <Link href="/marketplace">
              <Button>Marketplace</Button>
            </Link>
            <Button>Ranking</Button>
            <Button>Connect a wallet</Button>
            <Button cta>
              <Image src={userIcon} style={{ background: "transparent" }} />
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
