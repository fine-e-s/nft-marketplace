export default function Trending() {
  return (
    <div className="flex flex-col gap-[60px] py-[80px]">
      <div className="flex w-[1046px] flex-col items-start gap-[10px]">
        <div className="text-[38px] font-semibold leading-[1.2]">
          Trending Collection
        </div>
        <div className="text-[22px] font-normal capitalize leading-[1.6]">
          Checkout our weekly updated trending collection.
        </div>
      </div>
      <div className="flex gap-[30px]">
        {data.slice(0, 3).map((dataElement) => (
          <div className="flex w-[330px] flex-col gap-[15px]">
            <div className="flex flex-col gap-[15px]">
              <div
                className="h-[330px] w-[330px] rounded-[20px] bg-cover bg-center"
                style={{ backgroundImage: `url(images/${dataElement.img1})` }}
              />
              <div className="flex h-[100px] w-[330px] items-start gap-[15px]">
                <div
                  className="h-[100px] w-[100px] rounded-[20px] bg-[#3b3b3b] bg-cover bg-center"
                  style={{ backgroundImage: `url(images/${dataElement.img2})` }}
                />
                <div
                  className="h-[100px] w-[100px] rounded-[20px] bg-[#3b3b3b] bg-cover bg-center"
                  style={{ backgroundImage: `url(images/${dataElement.img3})` }}
                />
                <div className="flex h-[100px] w-[100px] items-center justify-center rounded-[20px] bg-purple-500 bg-cover bg-center font-mono text-[22px] font-bold">
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
                style={{ backgroundImage: `url(images/${dataElement.avatar})` }}
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
