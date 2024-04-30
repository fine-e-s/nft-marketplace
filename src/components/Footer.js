import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

export default function Footer() {
  return (
    <>
      <footer className="flex h-auto w-full flex-col items-center gap-8 bg-lighter py-10">
        <div className="flex">
          <Col1 />
          <Col2 />
          <Col3 />
        </div>
        <Note />
      </footer>
    </>
  );
}

function Col1() {
  return (
    <div className="flex w-[328px] flex-col items-start gap-7 bg-lighter">
      <div className="bg-lighter">
        <img src="icons/logo.svg" alt="logo" className="bg-lighter" />
      </div>
      <div className="flex flex-col gap-5 bg-lighter">
        <p className="w-[238px] bg-lighter leading-6 text-[#CCCCCC]">
          NFT marketplace UI created with Anima for Figma.
        </p>
        <div className="flex flex-col gap-4 bg-lighter">
          <p className="w-[238px] bg-lighter leading-6 text-[#CCCCCC]">
            Join our community
          </p>
          <div className="flex gap-2 bg-lighter">
            <Image
              src="icons/discord.svg"
              height={32}
              width={32}
              className="bg-lighter"
            />
            <Image
              src="icons/youtube.svg"
              height={32}
              width={32}
              className="bg-lighter"
            />
            <Image
              src="icons/twitter.svg"
              height={32}
              width={32}
              className="bg-lighter"
            />
            <Image
              src="icons/instagram.svg"
              height={32}
              width={32}
              className="bg-lighter"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Col2() {
  return (
    <div className="flex w-[240px] flex-col gap-6 bg-lighter">
      <p className="bg-lighter font-mono text-[22px] font-bold leading-6 text-white">
        Explore
      </p>
      <div className="flex flex-col gap-5 bg-lighter">
        <Link
          href="/marketplace"
          className="w-[238px] bg-lighter leading-6 text-[#CCCCCC]"
          scroll={false}
        >
          Marketplace
        </Link>
        <Link
          href="/rankings"
          className="w-[238px] bg-lighter leading-6 text-[#CCCCCC]"
        >
          Rankings
        </Link>
        <Link
          href="/wallet"
          className="w-[238px] bg-lighter leading-6 text-[#CCCCCC]"
        >
          Connect a wallet
        </Link>
      </div>
    </div>
  );
}

function Col3() {
  return (
    <div className="flex w-[420px] flex-col gap-6 bg-lighter">
      <p className="bg-lighter font-mono text-[22px] font-bold leading-6 text-white">
        Join our weekly digest
      </p>
      <div className="flex flex-col gap-5 bg-lighter">
        <p className="w-[330px] bg-lighter leading-6 text-[#CCCCCC]">
          Get exclusive promotions & updates straight to your inbox.
        </p>
        <div className="flex h-[60px] rounded-3xl bg-white">
          <input
            className="w-full px-5 text-darker placeholder-darker "
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email here"
          ></input>
          <Button cta className={"h-full !px-12"}>
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
}

function Note() {
  return (
    <div className="flex w-[1050px] flex-col gap-5 bg-lighter">
      <Image src={"/other/divider.svg"} width={1050} height={1} />
      <p className="bg-lighter text-xs font-normal text-[#CCCCCC]">
        Ⓒ NFT Market. Use this template freely.
      </p>
    </div>
  );
}
