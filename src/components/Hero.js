import styles from "@/styles/Home.module.css";

export default function Hero() {
  return (
    <div className={styles["hero-section-wrapper"]}>
      <div className={styles["hero-section"]}>
        <div className={styles["hero-section__info"]}>
          <div className={styles["hero-section__headline"]}>
            <div className={styles["headline"]}>
              Discover Digital Art &amp; Collect NFTs
            </div>
            <div className={styles["subhead"]}>
              NFT marketplace UI created with Anima for Figma. Collect, buy and
              sell art from more than 20k NFT artists.
            </div>
          </div>
          <div
            className={`${styles["button"]} ${styles["button_cta"]} ${styles["button_large"]}`}
          >
            <img src="icons/rocket.svg" style={{ background: "transparent" }} />
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
  );
}
