import { useWindowSize } from "@/hooks/useWindowSize";
import Image from "next/image";

export default function Trending() {
  const width = useWindowSize().width;
  let elementNum = width > 1100 ? 3 : width > 768 ? 2 : 1;

  return (
    <div
      className="my-[40px] flex flex-col gap-[60px] opacity-0 max-md:mx-[30px]"
      id="section"
    >
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
              <div className="hoverScale h-[330px] w-[330px] overflow-hidden rounded-[20px] bg-cover bg-center">
                <Image
                  width={330}
                  height={330}
                  src={`/images/${dataElement.img1}`}
                />
              </div>
              <div className="flex h-[100px] w-[330px] items-start gap-[15px]">
                <div className="hoverScale h-[100px] w-[100px] overflow-hidden rounded-[20px] bg-[#3b3b3b] bg-cover bg-center">
                  <Image
                    width={330}
                    height={330}
                    src={`/images/${dataElement.img2}`}
                  />
                </div>
                <div
                  className="hoverScale h-[100px] w-[100px] overflow-hidden rounded-[20px] bg-[#3b3b3b] bg-cover bg-center"
                  style={{}}
                >
                  <Image
                    width={330}
                    height={330}
                    src={`/images/${dataElement.img3}`}
                  />
                </div>
                <div className="hoverScale flex h-[100px] w-[100px] items-center justify-center overflow-hidden rounded-[20px] bg-purple-500 bg-cover bg-center font-mono text-[22px] font-bold">
                  {dataElement.q}+
                </div>
              </div>
            </div>
            <div className="leading-1.4 bg-inherit text-[22px] font-semibold">
              {dataElement.collectionName}
            </div>
            <div className="flex gap-[10px]">
              <Image
                width={24}
                height={24}
                src={`/images/${dataElement.avatar}`}
                className="rounded-full"
                loading="eager"
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
    img1: "Primary Photo Placeholder.png",
    img2: "Secondary Photo Placeholder.png",
    img3: "Secondary Photo Placeholder_1.png",
    collectionName: "DSGN Animals",
    username: "MrFox",
    avatar: "Avatar Placeholder_2.png",
    q: 1025,
  },
  {
    img1: "Primary Photo Placeholder_1.png",
    img2: "Secondary Photo Placeholder_2.png",
    img3: "Secondary Photo Placeholder_3.png",
    collectionName: "Magic Mushrooms",
    username: "Shroomie",
    avatar: "Avatar Placeholder_3.png",
    q: 1025,
  },
  {
    img1: "Primary Photo Placeholder_2.png",
    img2: "Secondary Photo Placeholder_4.png",
    img3: "Secondary Photo Placeholder_5.png",
    collectionName: "Disco Machines",
    username: "BeKind2Robots",
    avatar: "Avatar Placeholder_4.png",
    q: 1025,
  },
];
