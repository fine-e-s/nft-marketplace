import { useWindowSize } from "@/hooks/useWindowSize";

export default function Trending() {
  const width = useWindowSize().width;
  let elementNum = width > 1100 ? 3 : width > 768 ? 2 : 1;

  return (
    <div className="my-[40px] flex flex-col gap-[60px] max-md:mx-[30px]">
      <div className="flex flex-col items-start gap-[10px] max-md:w-[330px] md:w-[690px] lg:w-[1046px]">
        <div className="text-[28px] font-semibold leading-[1.2] lg:text-[38px]">
          Trending Collection
        </div>
        <div className="text-[16px] font-normal capitalize leading-[1.6] lg:text-[22px]">
          Checkout our weekly updated trending collection.
        </div>
      </div>
      <div className="grid gap-[30px] max-md:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {data.slice(0, elementNum).map((dataElement, i) => (
          <div
            className="flex w-[330px] flex-col gap-[15px]"
            key={dataElement.collectionName + i}
          >
            <div className="flex flex-col gap-[15px]">
              <div
                className="hoverScale h-[330px] w-[330px] overflow-hidden rounded-[20px] bg-cover bg-center"
                style={{ backgroundImage: `url(images/${dataElement.img1})` }}
              />
              <div className="flex h-[100px] w-[330px] items-start gap-[15px]">
                <div
                  className="hoverScale h-[100px] w-[100px] overflow-hidden rounded-[20px] bg-[#3b3b3b] bg-cover bg-center"
                  style={{
                    backgroundImage: `url(images/${dataElement.img2})`,
                  }}
                />
                <div
                  className="hoverScale h-[100px] w-[100px] overflow-hidden rounded-[20px] bg-[#3b3b3b] bg-cover bg-center"
                  style={{
                    backgroundImage: `url(images/${dataElement.img3})`,
                  }}
                />
                <div className="hoverScale flex h-[100px] w-[100px] items-center justify-center overflow-hidden rounded-[20px] bg-purple-500 bg-cover bg-center font-mono text-[22px] font-bold">
                  {dataElement.q}+
                </div>
              </div>
            </div>
            <div className="leading-1.4 bg-inherit text-[22px] font-semibold">
              {dataElement.collectionName}
            </div>
            <div className="flex gap-[10px]">
              <div
                className="h-[24px] w-[24px] rounded-full bg-inherit bg-cover bg-center"
                style={{
                  backgroundImage: `url(images/${dataElement.avatar})`,
                }}
              />
              <div className="bg-inherit text-[16px] font-normal leading-[1.4]">
                {dataElement.username}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const data = [
  {
    img1: "DSGN-animals-1.png",
    img2: "DSGN-animals-2.png",
    img3: "DSGN-animals-3.png",
    collectionName: "DSGN Animals",
    username: "MrFox",
    avatar: "avatar-2.png",
    q: 1025,
  },
  {
    img1: "DSGN-animals-1.png",
    img2: "DSGN-animals-2.png",
    img3: "DSGN-animals-3.png",
    collectionName: "DSGN Animals",
    username: "MrFox",
    avatar: "avatar-2.png",
    q: 1025,
  },
  {
    img1: "DSGN-animals-1.png",
    img2: "DSGN-animals-2.png",
    img3: "DSGN-animals-3.png",
    collectionName: "DSGN Animals",
    username: "MrFox",
    avatar: "avatar-2.png",
    q: 1025,
  },
  {
    img1: "DSGN-animals-1.png",
    img2: "DSGN-animals-2.png",
    img3: "DSGN-animals-3.png",
    collectionName: "DSGN Animals",
    username: "MrFox",
    avatar: "avatar-2.png",
    q: 1025,
  },
  {
    img1: "DSGN-animals-1.png",
    img2: "DSGN-animals-2.png",
    img3: "DSGN-animals-3.png",
    collectionName: "DSGN Animals",
    username: "MrFox",
    avatar: "avatar-2.png",
    q: 1025,
  },
];
