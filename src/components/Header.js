import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

import styles from "@/styles/Home.module.css";

import userIcon from "/public/icons/user.svg";

export default function Header() {
  return (
    <>
      <div className={styles["header-wrapper"]}>
        <div className={styles["header"]}>
          <div>
            <Link href="/">
              <img src="icons/logo.svg" />
            </Link>
          </div>
          <div className={styles["header__buttons"]}>
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