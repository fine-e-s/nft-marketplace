import styles from "@/styles/Home.module.css";

export default function Trending() {
  return (
    <div className={styles["trending-collection"]}>
      <div className={styles["trending-collection__headline"]}>
        <div className={`${styles["headline"]} ${styles["headline_small"]}`}>
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
  );
}
