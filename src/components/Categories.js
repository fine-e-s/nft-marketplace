export default function Categories() {
  return (
    <div className="my-[40px] flex flex-col gap-[60px]">
      <div className="text-[28px] font-semibold leading-[1.2] lg:text-[38px]">
        Browse Categories
      </div>
      <div className="grid grid-cols-4 gap-[30px] max-md:grid-cols-2">
        {categories.map((category, i) => (
          <div
            className="flex h-[210px] w-[150px] cursor-pointer flex-col overflow-hidden rounded-[20px] border-2 border-transparent bg-[#3b3b3b] bg-clip-content transition duration-300 ease-in-out will-change-transform hover:scale-105 hover:border-[#3b3b3b] hover:bg-[#2b2b2b] lg:h-[320px] lg:w-[240px]"
            key={category.name + i}
          >
            <div className="flex items-center justify-center overflow-hidden">
              <div
                className="h-[142px] w-[150px] scale-[1.1] bg-inherit bg-cover bg-center blur-[8px] contrast-[.90] lg:h-[240px] lg:w-[240px]"
                style={{ backgroundImage: `url(images/${category.img})` }}
              />
              <div className="fixed bg-transparent">
                <img
                  src={`icons/${category.icon}`}
                  className="bg-transparent max-lg:scale-75 lg:scale-100"
                />
              </div>
            </div>
            <div className="bg-inherit pl-[16px] pt-[22px] text-[14px] font-semibold leading-[1.4] lg:pl-[30px] lg:text-[22px]">
              {category.name}
            </div>
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
