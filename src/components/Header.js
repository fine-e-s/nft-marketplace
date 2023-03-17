import Link from "next/link";
import Button from "./Button";
import { useReg } from "@/hooks/useReg";
import { useWindowSize } from "@/hooks/useWindowSize";
import { useMenu } from "@/hooks/useMenu";

export default function Header() {
  const { isMenuOpened, menuToggle } = useMenu();
  const { isRegOpened, regToggle } = useReg();

  if (useWindowSize().width >= 1100 && isMenuOpened) {
    menuToggle(false);
  }

  function handleClick() {
    menuToggle(isMenuOpened ? false : true);
  }

  return (
    <>
      <div className="flex h-auto w-full flex-col items-start gap-[16px] bg-darker py-4 max-lg:gap-0 max-lg:py-0 lg:my-0 lg:h-24 lg:w-full lg:flex-row lg:items-center">
        <div className="z-10 flex w-full flex-row items-center justify-between px-[50px] max-lg:h-[50px] max-lg:pt-[40px] max-lg:pb-[40px] lg:w-max">
          <Link href="/">
            <img
              src="icons/logo.svg"
              className="hoverScale translate-y-[-2px] max-lg:translate-x-[4px]"
              onClick={() => (isMenuOpened ? menuToggle() : "")}
            />
          </Link>
          <img
            src="icons/menu.svg"
            className={`cursor-pointer lg:hidden ${
              isMenuOpened ? "bg-[#3b3b3b]" : ""
            }`}
            onClick={handleClick}
          />
        </div>
        <Menu isMenuOpened={isMenuOpened}>
          <Link
            href="/marketplace"
            onClick={() => (isMenuOpened ? menuToggle() : "")}
          >
            <Button hoverUnderline>Marketplace</Button>
          </Link>
          <Button hoverUnderline>Ranking</Button>
          <Button hoverUnderline>Connect a wallet</Button>
          <Button
            cta
            hoverScale
            onClick={() => {
              regToggle();
              isMenuOpened ? menuToggle() : "";
            }}
          >
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
      <MenuWrapper isMenuOpened={isMenuOpened}>
        <div
          className={`ml-0 flex h-0 flex-col items-start gap-2.5 font-semibold max-lg:absolute max-lg:transition-all max-lg:duration-1000 max-lg:ease-out lg:ml-auto lg:flex-row lg:items-center lg:transition-none
      ${
        isMenuOpened
          ? "delay-300 max-lg:translate-x-96 max-lg:opacity-100"
          : "max-lg:opacity-0"
      }`}
        >
          {children}
        </div>
      </MenuWrapper>
    </>
  );
}

function MenuWrapper({ children, isMenuOpened }) {
  return useWindowSize().width < 1100 ? (
    <div
      className={`w-full -translate-x-96 px-[50px] duration-500 ${
        isMenuOpened ? "mb-[230px]" : "delay-300"
      }`}
    >
      {children}
    </div>
  ) : (
    <>{children}</>
  );
}
