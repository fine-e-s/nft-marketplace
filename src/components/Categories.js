import styles from "@/styles/Home.module.css";

export default function Categories() {
  return (
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
  );
}
