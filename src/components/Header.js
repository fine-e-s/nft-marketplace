import Image from "next/image";
import Link from "next/link";
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
              <div className={styles["button"]}>Marketplace</div>
            </Link>
            <div className={styles["button"]}>Ranking</div>
            <div className={styles["button"]}>Connect a wallet</div>
            <div className={`${styles["button"]} ${styles["button_cta"]}`}>
              <Image src={userIcon} style={{ background: "transparent" }} />
              Sign Up
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
