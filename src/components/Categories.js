import { useCategory } from "@/hooks/useCategory";
import Link from "next/link";
import Image from "next/image";

export default function Categories() {
  const { category, newCategory } = useCategory();

  return (
    <div className="my-[40px] flex flex-col gap-[60px]">
      <div className="text-[28px] font-semibold leading-[1.2] lg:text-[38px]">
        Browse Categories
      </div>
      <div className="grid grid-cols-4 gap-[30px] max-md:grid-cols-2">
        {categories.map((item, i) => (
          <div
            className={`flex h-[210px] w-[150px] cursor-pointer flex-col overflow-hidden rounded-[20px] border-2 bg-lighter bg-clip-content transition duration-300 ease-in-out will-change-transform hover:scale-105 hover:bg-darker lg:h-[320px] lg:w-[240px]
          ${
            item.name === category
              ? "border-gray-200 hover:border-gray-200"
              : "border-transparent hover:border-lighter"
          }`}
            key={item.name + i}
          >
            <Link
              href="/marketplace"
              shallow
              className="bg-inherit"
              onClick={() => {
                if (item.name === category) {
                  newCategory("");
                } else {
                  newCategory(item.name);
                }
              }}
            >
              <div className="flex items-center justify-center overflow-hidden">
                <div
                  className="h-[142px] w-[150px] scale-[1.1] bg-inherit bg-cover bg-center blur-[8px] contrast-[.90] lg:h-[240px] lg:w-[240px]"
                  style={{ backgroundImage: `url(images/${item.img})` }}
                />
                <div className="fixed bg-transparent">
                  <img
                    src={`icons/${item.icon}`}
                    className="bg-transparent max-lg:scale-75 lg:scale-100"
                  />
                </div>
              </div>
              <div className="bg-inherit pl-[16px] pt-[22px] text-[14px] font-semibold leading-[1.4] lg:pl-[30px] lg:text-[22px]">
                {item.name}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export function CategoriesMarketplace() {
  const { category, newCategory } = useCategory();

  return (
    <div className="my-[40px] flex flex-col gap-[30px]">
      <div className="text-[28px] font-semibold leading-[1.2] lg:text-[38px]">
        Browse Categories
      </div>
      <div className="grid grid-cols-4 gap-[20px] max-md:grid-cols-2">
        {categories.map((item, i) => (
          <div
            className={`flex w-[160px] cursor-pointer flex-col overflow-hidden rounded-[20px] border-2 bg-lighter bg-clip-content transition duration-300 ease-in-out will-change-transform hover:scale-105 hover:bg-darker lg:w-[240px]
          ${
            item.name === category
              ? "border-gray-200 hover:border-gray-200"
              : "border-transparent hover:border-lighter"
          }`}
            key={item.name + i}
          >
            <Link
              href="/marketplace"
              shallow
              className="justify-center bg-inherit"
              onClick={() => {
                if (item.name === category) {
                  newCategory("");
                } else {
                  newCategory(item.name);
                }
              }}
            >
              <div className="flex items-center justify-center overflow-hidden"></div>
              <div className="flex h-14 items-center bg-inherit text-[14px] font-semibold lg:pl-2 lg:text-[18px]">
                <Image
                  src={`icons/${item.icon}`}
                  width={24 * 2}
                  height={24 * 2}
                  className="scale-50 bg-transparent"
                />
                {item.name}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

const categories = [
  {
    name: "Art",
    img: "art.png",
    icon: "art.svg",
  },
  {
    name: "Collectibles",
    img: "collectibles.png",
    icon: "collectibles.svg",
  },
  {
    name: "Music",
    img: "music.png",
    icon: "music.svg",
  },
  {
    name: "Photography",
    img: "photography.png",
    icon: "photography.svg",
  },
  {
    name: "Video",
    img: "video.png",
    icon: "video.svg",
  },
  {
    name: "Utility",
    img: "utility.png",
    icon: "utility.svg",
  },
  {
    name: "Sport",
    img: "sport.png",
    icon: "sport.svg",
  },
  {
    name: "Virtual Worlds",
    img: "virtual-worlds.png",
    icon: "virtual-worlds.svg",
  },
];
