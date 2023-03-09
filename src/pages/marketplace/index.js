import styles from "@/styles/Home.module.css";

export default function Marketplace() {
  return (
    <div className={styles["nft-cards__bg-container"]}>
      <div className={styles["nft-cards__main-container"]}>
        {data.map((dataElement) => (
          <div className={styles["nft-cards__card"]}>
            <div
              className={styles["nft-cards__image"]}
              style={{ backgroundImage: `url(${dataElement.img})` }}
            ></div>
            <div className={styles["nft-cards__info-container"]}>
              <div className={styles["nft-cards__image-info"]}>
                <div className={styles["img-name"]}>{dataElement.imgName}</div>
                <div className={styles["nft-cards__user"]}>
                  <div
                    className={styles["avatar"]}
                    style={{ backgroundImage: `url(${dataElement.avatar})` }}
                  ></div>
                  <div
                    className={`${styles["username"]} ${styles["username_space-mono"]}`}
                  >
                    {dataElement.username}
                  </div>
                </div>
              </div>
              <div className={styles["nft-cards__price-info"]}>
                <div className={styles["nft-cards__price-container"]}>
                  <div className={styles["label"]}>Price</div>
                  <div className={styles["amount"]}>
                    {dataElement.price} ETH
                  </div>
                </div>
                <div className={styles["nft-cards__bid-container"]}>
                  <div className={styles["label"]}>Highest Bid</div>
                  <div className={styles["amount"]}>
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
    img: "images/magic-shroom.png",
    imgName: "Magic Mushroom 0325",
    username: "Shroomie",
    avatar: "images/avatar-1.png",
    price: 1.63,
    highestBid: 0.33,
  },
  {
    img: "images/magic-shroom.png",
    imgName: "Magic Mushroom 0325",
    username: "Shroomie",
    avatar: "images/avatar-1.png",
    price: 1.63,
    highestBid: 0.33,
  },
  {
    img: "images/magic-shroom.png",
    imgName: "Magic Mushroom 0325",
    username: "Shroomie",
    avatar: "images/avatar-1.png",
    price: 1.63,
    highestBid: 0.33,
  },
  {
    img: "images/magic-shroom.png",
    imgName: "Magic Mushroom 0325",
    username: "Shroomie",
    avatar: "images/avatar-1.png",
    price: 1.63,
    highestBid: 0.33,
  },
  {
    img: "images/magic-shroom.png",
    imgName: "Magic Mushroom 0325",
    username: "Shroomie",
    avatar: "images/avatar-1.png",
    price: 1.63,
    highestBid: 0.33,
  },
  {
    img: "images/magic-shroom.png",
    imgName: "Magic Mushroom 0325",
    username: "Shroomie",
    avatar: "images/avatar-1.png",
    price: 1.63,
    highestBid: 0.33,
  },
  {
    img: "images/magic-shroom.png",
    imgName: "Magic Mushroom 0325",
    username: "Shroomie",
    avatar: "images/avatar-1.png",
    price: 1.63,
    highestBid: 0.33,
  },
  {
    img: "images/magic-shroom.png",
    imgName: "Magic Mushroom 0325",
    username: "Shroomie",
    avatar: "images/avatar-1.png",
    price: 1.63,
    highestBid: 0.33,
  },
  {
    img: "images/magic-shroom.png",
    imgName: "Magic Mushroom 0325",
    username: "Shroomie",
    avatar: "images/avatar-1.png",
    price: 1.63,
    highestBid: 0.33,
  },
  {
    img: "images/magic-shroom.png",
    imgName: "Magic Mushroom 0325",
    username: "Shroomie",
    avatar: "images/avatar-1.png",
    price: 1.63,
    highestBid: 0.33,
  },
  {
    img: "images/magic-shroom.png",
    imgName: "Magic Mushroom 0325",
    username: "Shroomie",
    avatar: "images/avatar-1.png",
    price: 1.63,
    highestBid: 0.33,
  },
  {
    img: "images/magic-shroom.png",
    imgName: "Magic Mushroom 0325",
    username: "Shroomie",
    avatar: "images/avatar-1.png",
    price: 1.63,
    highestBid: 0.33,
  },
];
