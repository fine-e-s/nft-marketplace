const card = document.querySelector(".nft-cards__main-container");

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

function createCard(dataElement) {
  return `<div class="nft-cards__card">
    <div class="nft-cards__image" style="background-image: url(${dataElement.img});"></div>
    <div class="nft-cards__info-container">
        <div class="nft-cards__image-info">
            <div class="img-name">${dataElement.imgName}</div>
            <div class="nft-cards__user">
                <div class="avatar" style="background-image: url(${dataElement.avatar});"></div>
                <div class="username username_space-mono">${dataElement.username}</div>
            </div>

        </div>
        <div class="nft-cards__price-info">
            <div class="nft-cards__price-container">
                <div class="label">Price</div>
                <div class="amount">${dataElement.price} ETH</div>
            </div>
            <div class="nft-cards__bid-container">
                <div class="label">Highest Bid</div>
                <div class="amount">${dataElement.highestBid} wETH</div>
            </div>
        </div>
    </div>
</div>`;
}

card.innerHTML = data.reduce(
  (output, element) => output + createCard(element),
  ""
);
