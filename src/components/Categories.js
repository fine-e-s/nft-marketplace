export default function Categories() {
  return (
    <div className="my-0 flex flex-col gap-[60px] py-[80px]">
      <div className="text-[38px] font-semibold leading-[1.2]">
        Browse Categories
      </div>
      <div className="grid grid-cols-4 gap-[30px]">
        {categories.map((category, i) => (
          <div
            className="flex h-[316px] w-[240px] flex-col overflow-hidden rounded-[20px] border-2 border-transparent bg-[#3b3b3b] bg-clip-content transition duration-300 ease-in-out hover:scale-105 hover:border-[#3b3b3b] hover:bg-[#2b2b2b]"
            key={category.name + i}
          >
            <div className="flex items-center justify-center overflow-hidden">
              <div
                className="h-[240px] w-[240px] scale-[1.1] bg-inherit bg-cover bg-center blur-[8px] contrast-[.90]"
                style={{ backgroundImage: `url(images/${category.img})` }}
              />
              <div className="absolute bg-transparent">
                <img
                  src={`icons/${category.icon}`}
                  style={{ background: "transparent" }}
                />
              </div>
            </div>
            <div className="bg-inherit pl-[30px] pt-[20px] text-[22px] font-semibold leading-[1.4]">
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
