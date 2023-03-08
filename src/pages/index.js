import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

import userIcon from "/public/icons/user.svg";

export default function Home() {
  return (
    <>
      <div className={styles["header-wrapper"]}>
        <div className={styles["header"]}>
          <div>
            <img src="icons/logo.svg" />
          </div>
          <div className={styles["header__buttons"]}>
            <div className={styles["button"]}>Marketplace</div>
            <div className={styles["button"]}>Ranking</div>
            <div className={styles["button"]}>Connect a wallet</div>
            <div className={`${styles["button"]} ${styles["button_cta"]}`}>
              <Image src={userIcon} style={{ background: "transparent" }} />
              Sign Up
            </div>
          </div>
        </div>
      </div>
      <div className={styles["page-wrapper"]}>
        <div className={styles["hero-section-wrapper"]}>
          <div className={styles["hero-section"]}>
            <div className={styles["hero-section__info"]}>
              <div className={styles["hero-section__headline"]}>
                <div className={styles["headline"]}>
                  Discover Digital Art &amp; Collect NFTs
                </div>
                <div className={styles["subhead"]}>
                  NFT marketplace UI created with Anima for Figma. Collect, buy
                  and sell art from more than 20k NFT artists.
                </div>
              </div>
              <div
                className={`${styles["button"]} ${styles["button_cta"]} ${styles["button_large"]}`}
              >
                <img
                  src="icons/rocket.svg"
                  style={{ background: "transparent" }}
                />
                Get Started
              </div>
              <div className={styles["hero-section__numbers"]}>
                <div className={styles["hero-section__block"]}>
                  <div className={styles["number"]}>240k+</div>
                  <div className={styles["name"]}>Total Sale</div>
                </div>
                <div className={styles["hero-section__block"]}>
                  <div className={styles["number"]}>100k+</div>
                  <div className={styles["name"]}>Auctions</div>
                </div>
                <div className={styles["hero-section__block"]}>
                  <div className={styles["number"]}>240k+</div>
                  <div className={styles["name"]}>Artists</div>
                </div>
              </div>
            </div>
            <div className={styles["hero-section__nft-highlight"]}>
              <div className={styles["image"]} />
              <div className={styles["hero-section__image-info"]}>
                <div className={styles["img-name"]}>Space Walking</div>
                <div className={styles["hero-section__user"]}>
                  <div
                    className={styles["avatar"]}
                    style={{ backgroundImage: "url(images/avatar-1.png)" }}
                  />
                  <div className={styles["username"]}>Animakid</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["trending-collection"]}>
          <div className={styles["trending-collection__headline"]}>
            <div
              className={`${styles["headline"]} ${styles["headline_small"]}`}
            >
              Trending Collection
            </div>
            <div className={styles["subhead"]}>
              Checkout our weekly updated trending collection.
            </div>
          </div>
          <div className={styles["trending-collection__collections"]}>
            <div className={styles["trending-collection__item"]}>
              <div className={styles["trending-collection__images"]}>
                <div
                  className={styles["main-image"]}
                  style={{ backgroundImage: "url(images/DSGN-animals-1.png)" }}
                />
                <div className={styles["trending-collection__thumbnails"]}>
                  <div className={styles["thumbnail"]} />
                  <div className={styles["thumbnail"]} />
                  <div
                    className={`${styles["thumbnail"]} ${styles["thumbnail_more"]}`}
                  >
                    1025+
                  </div>
                </div>
              </div>
              <div className={styles["img-name"]}>Space Walking</div>
              <div className={styles["trending-collection__user"]}>
                <div
                  className={styles["avatar"]}
                  style={{ backgroundImage: "url(images/avatar-1.png)" }}
                />
                <div className={styles["username"]}>Animakid</div>
              </div>
            </div>
            <div className={styles["trending-collection__item"]}>
              <div className={styles["trending-collection__images"]}>
                <div
                  className={styles["main-image"]}
                  style={{ backgroundImage: "url(images/DSGN-animals-1.png)" }}
                />
                <div className={styles["trending-collection__thumbnails"]}>
                  <div className={styles["thumbnail"]} />
                  <div className={styles["thumbnail"]} />
                  <div
                    className={`${styles["thumbnail"]} ${styles["thumbnail_more"]}`}
                  >
                    1025+
                  </div>
                </div>
              </div>
              <div className={styles["img-name"]}>Space Walking</div>
              <div className={styles["trending-collection__user"]}>
                <div
                  className={styles["avatar"]}
                  style={{ backgroundImage: "url(images/avatar-1.png)" }}
                />
                <div className={styles["username"]}>Animakid</div>
              </div>
            </div>
            <div className={styles["trending-collection__item"]}>
              <div className={styles["trending-collection__images"]}>
                <div
                  className={styles["main-image"]}
                  style={{ backgroundImage: "url(images/DSGN-animals-1.png)" }}
                />
                <div className={styles["trending-collection__thumbnails"]}>
                  <div className={styles["thumbnail"]} />
                  <div className={styles["thumbnail"]} />
                  <div
                    className={`${styles["thumbnail"]} ${styles["thumbnail_more"]}`}
                  >
                    1025+
                  </div>
                </div>
              </div>
              <div className={styles["img-name"]}>Space Walking</div>
              <div className={styles["trending-collection__user"]}>
                <div
                  className={styles["avatar"]}
                  style={{ backgroundImage: "url(images/avatar-1.png)" }}
                />
                <div className={styles["username"]}>Animakid</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["categories-block"]}>
          <div className={`${styles["headline"]} ${styles["headline_small"]}`}>
            Browse Categories
          </div>
          <div className={styles["categories-block__category-container"]}>
            <div className={styles["categories-block__category"]}>
              <div className={styles["categories-block__image-container"]}>
                <div
                  className={styles["categories-block__image"]}
                  style={{ backgroundImage: "url(images/hero.png)" }}
                />
                <div className={styles["categories-block__icon"]}>
                  <img src="icons/icon.svg" />
                </div>
              </div>
            </div>
            <div className={styles["categories-block__category"]}>
              <div className={styles["categories-block__image-container"]}>
                <div
                  className={styles["categories-block__image"]}
                  style={{ backgroundImage: "url(images/hero.png)" }}
                />
                <div className={styles["categories-block__icon"]}>
                  <img src="icons/icon.svg" />
                </div>
              </div>
            </div>
            <div className={styles["categories-block__category"]}>
              <div className={styles["categories-block__image-container"]}>
                <div
                  className={styles["categories-block__image"]}
                  style={{ backgroundImage: "url(images/hero.png)" }}
                />
                <div className={styles["categories-block__icon"]}>
                  <img src="icons/icon.svg" />
                </div>
              </div>
            </div>
            <div className={styles["categories-block__category"]}>
              <div className={styles["categories-block__image-container"]}>
                <div
                  className={styles["categories-block__image"]}
                  style={{ backgroundImage: "url(images/hero.png)" }}
                />
                <div className={styles["categories-block__icon"]}>
                  <img src="icons/icon.svg" />
                </div>
              </div>
            </div>
            <div className={styles["categories-block__category"]}>
              <div className={styles["categories-block__image-container"]}>
                <div
                  className={styles["categories-block__image"]}
                  style={{ backgroundImage: "url(images/hero.png)" }}
                />
                <div className={styles["categories-block__icon"]}>
                  <img src="icons/icon.svg" />
                </div>
              </div>
            </div>
            <div className={styles["categories-block__category"]}>
              <div className={styles["categories-block__image-container"]}>
                <div
                  className={styles["categories-block__image"]}
                  style={{ backgroundImage: "url(images/hero.png)" }}
                />
                <div className={styles["categories-block__icon"]}>
                  <img src="icons/icon.svg" />
                </div>
              </div>
            </div>
            <div className={styles["categories-block__category"]}>
              <div className={styles["categories-block__image-container"]}>
                <div
                  className={styles["categories-block__image"]}
                  style={{ backgroundImage: "url(images/hero.png)" }}
                />
                <div className={styles["categories-block__icon"]}>
                  <img src="icons/icon.svg" />
                </div>
              </div>
            </div>
            <div className={styles["categories-block__category"]}>
              <div className={styles["categories-block__image-container"]}>
                <div
                  className={styles["categories-block__image"]}
                  style={{ backgroundImage: "url(images/hero.png)" }}
                />
                <div className={styles["categories-block__icon"]}>
                  <img src="icons/icon.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
