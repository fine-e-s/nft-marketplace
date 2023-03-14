import Link from "next/link";
import Button from "./Button";
import { useState } from "react";
import useWindowSize from "@/hooks/useWindowSize";

export default function Header() {
  const [isMenuOpened, menuToggle] = useState(false);

  if (useWindowSize().width >= 1050 && isMenuOpened) {
    menuToggle(false);
  }

  function handleClick() {
    menuToggle(isMenuOpened ? false : true);
  }

  return (
    <>
      <div className="flex h-auto w-full flex-col items-start gap-[16px] bg-origin-padding py-4 px-[50px] max-lg:gap-0 max-lg:py-0 lg:my-0 lg:h-24 lg:w-full lg:flex-row lg:items-center">
        <div className="z-10 flex w-full flex-row items-center justify-between max-lg:h-[50px]  max-lg:pt-[40px] max-lg:pb-[40px] lg:w-max">
          <Link href="/">
            <img
              src="icons/logo.svg"
              className="hoverScale translate-y-[-2px] max-lg:translate-x-[4px]"
            />
          </Link>
          <img
            src="icons/menu.svg"
            className={`lg:hidden ${isMenuOpened ? "bg-[#3b3b3b]" : ""}`}
            onClick={handleClick}
          />
        </div>
        <Menu isMenuOpened={isMenuOpened}>
          <Link href="/marketplace">
            <Button hoverUnderline>Marketplace</Button>
          </Link>
          <Button hoverUnderline>Ranking</Button>
          <Button hoverUnderline>Connect a wallet</Button>
          <Button cta hoverScale>
            <img src="icons/user.svg" style={{ background: "transparent" }} />
            Sign Up
          </Button>
        </Menu>
      </div>
    </>
  );
}

function Menu({ children, isMenuOpened }) {
  return (
    <>
      <div
        className={`ml-0 flex h-0 flex-col items-start gap-2.5 font-semibold lg:ml-auto lg:flex-row lg:items-center lg:transition-none
      ${
        isMenuOpened
          ? "max-lg:mb-[230px] max-lg:opacity-100"
          : "max-lg:translate-y-[-300px] max-lg:opacity-0"
      }
      ${
        useWindowSize().width >= 1050
          ? ""
          : "transition-all duration-1000 ease-in-out"
      }`}
      >
        {children}
      </div>
    </>
  );
}
