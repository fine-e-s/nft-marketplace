import Button from "./Button";
import { useWindowSize } from "@/hooks/useWindowSize";
import { useReg } from "@/hooks/useReg";
import { useMenu } from "@/hooks/useMenu";
import { gsap } from "gsap";
import { useEffect } from "react";

export default function Hero() {
  useEffect(() => {
    gsap.fromTo(
      "[data-slidein]",
      { x: -200, opacity: 0 },
      { x: 0, delay: 0.2, stagger: 0.1, opacity: 1 }
    );

    gsap.fromTo("[data-fadein]", { opacity: 0 }, { delay: 1, opacity: 1 });
  }, []);

  return (
    <div className="my-[40px] flex h-auto items-center justify-center max-md:mx-[30px]">
      <div className="flex justify-center gap-[30px] max-md:flex-col">
        <HeroBlock />
      </div>
    </div>
  );
}

function HeroBlock() {
  if (useWindowSize().width >= 768) {
    return (
      <>
        <HeroContainer>
          <Headlines />
          <ButtonStart />
          <Numbers />
        </HeroContainer>
        <Selected />
      </>
    );
  } else {
    return (
      <>
        <HeroContainer>
          <Headlines />
          <Selected />
          <ButtonStart />
          <Numbers />
        </HeroContainer>
      </>
    );
  }
}

function Headlines() {
  return (
    <div className="flex flex-col gap-[20px]">
      <div
        data-slidein
        className="font-semibold leading-[1.1] max-md:text-[28px] md:text-[38px] lg:text-[67px]"
      >
        Discover Digital Art &amp; Collect NFTs
      </div>
      <div data-slidein className="leading-[1.6] md:text-[16px] lg:text-[22px]">
        NFT marketplace UI created with Anima for Figma. Collect, buy and sell
        art from more than 20k NFT artists.
      </div>
    </div>
  );
}

function ButtonStart() {
  const { isRegOpened, regToggle } = useReg();
  const { isMenuOpened, menuToggle } = useMenu();

  return (
    <div data-slidein className="bg-transparent">
      <Button
        cta
        large
        larger={useWindowSize().width < 768}
        hoverScale
        onClick={() => {
          regToggle();
          isMenuOpened ? menuToggle(false) : "";
        }}
      >
        <img
          src="icons/rocket.svg"
          alt="rocket"
          style={{ background: "transparent" }}
        />
        Get Started
      </Button>
    </div>
  );
}

function Numbers() {
  return (
    <div
      data-slidein
      className="flex flex-row max-md:justify-between lg:md:gap-[30px]"
    >
      <div className="flex flex-col justify-start md:w-[90px] lg:w-[150px]">
        <div className="font-mono font-bold leading-[1.4] max-md:text-[22px] lg:text-[28px]">
          240k+
        </div>
        <div className="font-normal leading-[1.6] max-md:text-[16px] lg:text-[24px]">
          Total Sale
        </div>
      </div>
      <div className="flex flex-col justify-start md:w-[90px] lg:w-[150px]">
        <div className="font-mono font-bold leading-[1.4] max-md:text-[22px] lg:text-[28px]">
          100k+
        </div>
        <div className="font-normal leading-[1.6] max-md:text-[16px] lg:text-[24px]">
          Auctions
        </div>
      </div>
      <div className="flex flex-col justify-start md:w-[90px] lg:w-[150px]">
        <div className="font-mono font-bold leading-[1.4] max-md:text-[22px] lg:text-[28px]">
          240k+
        </div>
        <div className="font-normal leading-[1.6] max-md:text-[16px] lg:text-[24px]">
          Artists
        </div>
      </div>
    </div>
  );
}

function Selected() {
  useEffect(() => {
    let tl = gsap.timeline({ repeat: -1, yoyo: true });
    tl.to(
      "#selected",
      {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
      },
      0
    ).to(
      "#selected-shade",
      {
        scale: 1.08,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: true,
      },
      0
    );
  }, []);

  return (
    <>
      <div data-fadein className="flex flex-col">
        <div
          className="flex flex-col overflow-hidden rounded-[20px] bg-[#3b3b3b] shadow-lg shadow-zinc-900 transition-shadow duration-500 will-change-transform hover:shadow-md hover:shadow-zinc-400 md:h-[330px] md:w-[330px] lg:h-[510px] lg:w-[510px]"
          id="selected"
          onMouseEnter={(e) => gsap.to(e.currentTarget, { scale: 1.05 })}
          onMouseLeave={(e) => gsap.to(e.currentTarget, { scale: 1 })}
        >
          <div className="bg-[url(/images/hero.png)] bg-cover bg-center max-md:h-[205px] md:h-[221px] md:w-[330px] lg:h-[400px] lg:w-[510px]" />
          <div className="my-auto flex flex-col justify-center gap-[10px] bg-inherit px-[20px] py-[22px]">
            <div className="bg-inherit text-[22px] font-semibold leading-[1.4]">
              Space Walking
            </div>
            <div className="flex gap-[12px] bg-inherit">
              <div className="h-[24px] w-[24px] rounded-[120px] bg-inherit bg-[url(/images/avatar-1.png)] bg-cover bg-center" />
              <div className="bg-inherit text-[16px] font-normal leading-[1.4]">
                Animakid
              </div>
            </div>
          </div>
        </div>
        <div
          className="h-10 translate-y-5 bg-zinc-900 opacity-50 blur-sm will-change-transform"
          id="selected-shade"
          style={{ borderRadius: "50%" }}
        ></div>
      </div>
    </>
  );
}

function HeroContainer({ children }) {
  return (
    <div className="flex h-auto flex-col gap-[30px] max-lg:w-[330px] lg:w-[510px]">
      {children}
    </div>
  );
}
