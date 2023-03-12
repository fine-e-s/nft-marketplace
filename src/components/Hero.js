import Button from "./Button";

export default function Hero() {
  return (
    <div className="flex h-[700px] items-center justify-center">
      <div className="flex justify-center gap-[30px]">
        <div className="flex h-[544px] w-[510px] flex-col gap-[30px]">
          <div className="flex flex-col gap-[20px]">
            <div className="text-[67px] font-semibold leading-[1.1]">
              Discover Digital Art &amp; Collect NFTs
            </div>
            <div className="text-[22px] leading-[1.6]">
              NFT marketplace UI created with Anima for Figma. Collect, buy and
              sell art from more than 20k NFT artists.
            </div>
          </div>

          <Button cta large hoverScale>
            <img src="icons/rocket.svg" style={{ background: "transparent" }} />
            Get Started
          </Button>

          <div className="flex flex-row gap-[30px]">
            <div className="flex w-[150px] flex-col justify-start">
              <div className="font-mono text-[28px] font-bold leading-[1.4]">
                240k+
              </div>
              <div className="text-[24px] font-normal leading-[1.6]">
                Total Sale
              </div>
            </div>
            <div className="flex w-[150px] flex-col justify-start">
              <div className="font-mono text-[28px] font-bold leading-[1.4]">
                100k+
              </div>
              <div className="text-[24px] font-normal leading-[1.6]">
                Auctions
              </div>
            </div>
            <div className="flex w-[150px] flex-col justify-start">
              <div className="font-mono text-[28px] font-bold leading-[1.4]">
                240k+
              </div>
              <div className="text-[24px] font-normal leading-[1.6]">
                Artists
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-[510px] w-[510px] flex-col overflow-hidden rounded-[20px] bg-[#3b3b3b]">
          <div className="h-[400px] w-[510px] bg-[url(/images/hero.png)] bg-cover bg-center" />
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
      </div>
    </div>
  );
}
