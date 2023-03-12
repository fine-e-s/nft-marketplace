export default function Marketplace() {
  return (
    <div className="flex w-full justify-center bg-[#3b3b3b]">
      <div className="grid w-[1050px] grid-cols-3 gap-[30px] bg-inherit pt-[60px] pb-[80px]">
        {data.map((dataElement, i) => (
          <div
            className="flex h-[470px] w-[330px] flex-col overflow-hidden rounded-[20px] border-[#2b2b2b] bg-[#2b2b2b] transition duration-300 ease-in-out hover:scale-105 hover:border-2 hover:bg-[#3b3b3b]"
            key={dataElement.imgName + i}
          >
            <div
              className="h-[295px] w-[330px] bg-cover bg-center"
              style={{ backgroundImage: `url(images/${dataElement.img})` }}
            ></div>
            <div className="mx-0 my-auto flex flex-col gap-[25px] bg-inherit">
              <div className="flex flex-col gap-[6px] bg-inherit px-[30px]">
                <div className="bg-inherit text-[22px] font-semibold leading-[1.4]">
                  {dataElement.imgName}
                </div>
                <div className="flex gap-[12px] bg-inherit">
                  <div
                    className="h-[24px] w-[24px] rounded-full bg-inherit bg-cover bg-center"
                    style={{
                      backgroundImage: `url(images/${dataElement.avatar})`,
                    }}
                  ></div>
                  <div className="bg-inherit font-mono text-[16px] font-extralight leading-[1.4]">
                    {dataElement.username}
                  </div>
                </div>
              </div>
              <div className="flex justify-center bg-inherit">
                <div className="flex w-[135px] flex-col items-start gap-[8px] bg-inherit">
                  <div className="bg-inherit font-mono text-[12px] leading-[1.1] text-[#858584]">
                    Price
                  </div>
                  <div className="bg-inherit font-mono text-[16px] leading-[1.4]">
                    {dataElement.price} ETH
                  </div>
                </div>
                <div className="flex w-[135px] flex-col items-end gap-[8px] bg-inherit">
                  <div className="flex w-[135px] flex-col items-end gap-[8px] bg-inherit font-mono text-[12px] leading-[1.1] text-[#858584]">
                    Highest Bid
                  </div>
                  <div className="bg-inherit font-mono text-[16px] leading-[1.4]">
                    {dataElement.highestBid} wETH
                  </div>
                </div>
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
    img: "magic-shroom.png",
    imgName: "Magic Mushroom 0325",
    username: "Shroomie",
    avatar: "avatar-1.png",
    price: 1.63,
    highestBid: 0.33,
  },
  {
    img: "magic-shroom.png",
    imgName: "Magic Mushroom 0325",
    username: "Shroomie",
    avatar: "avatar-1.png",
    price: 1.63,
    highestBid: 0.33,
  },
  {
    img: "magic-shroom.png",
    imgName: "Magic Mushroom 0325",
    username: "Shroomie",
    avatar: "avatar-1.png",
    price: 1.63,
    highestBid: 0.33,
  },
  {
    img: "magic-shroom.png",
    imgName: "Magic Mushroom 0325",
    username: "Shroomie",
    avatar: "avatar-1.png",
    price: 1.63,
    highestBid: 0.33,
  },
  {
    img: "magic-shroom.png",
    imgName: "Magic Mushroom 0325",
    username: "Shroomie",
    avatar: "avatar-1.png",
    price: 1.63,
    highestBid: 0.33,
  },
  {
    img: "magic-shroom.png",
    imgName: "Magic Mushroom 0325",
    username: "Shroomie",
    avatar: "avatar-1.png",
    price: 1.63,
    highestBid: 0.33,
  },
  {
    img: "magic-shroom.png",
    imgName: "Magic Mushroom 0325",
    username: "Shroomie",
    avatar: "avatar-1.png",
    price: 1.63,
    highestBid: 0.33,
  },
  {
    img: "magic-shroom.png",
    imgName: "Magic Mushroom 0325",
    username: "Shroomie",
    avatar: "avatar-1.png",
    price: 1.63,
    highestBid: 0.33,
  },
  {
    img: "magic-shroom.png",
    imgName: "Magic Mushroom 0325",
    username: "Shroomie",
    avatar: "avatar-1.png",
    price: 1.63,
    highestBid: 0.33,
  },
  {
    img: "magic-shroom.png",
    imgName: "Magic Mushroom 0325",
    username: "Shroomie",
    avatar: "avatar-1.png",
    price: 1.63,
    highestBid: 0.33,
  },
  {
    img: "magic-shroom.png",
    imgName: "Magic Mushroom 0325",
    username: "Shroomie",
    avatar: "avatar-1.png",
    price: 1.63,
    highestBid: 0.33,
  },
  {
    img: "magic-shroom.png",
    imgName: "Magic Mushroom 0325",
    username: "Shroomie",
    avatar: "avatar-1.png",
    price: 1.63,
    highestBid: 0.33,
  },
];
