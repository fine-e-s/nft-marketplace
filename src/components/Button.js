import styles from "@/styles/Home.module.css";

export default function Button({ cta, large, children }) {
  return (
    <div
      className={`${styles["button"]} ${cta ? styles["button_cta"] : ""} ${
        large ? styles["button_large"] : ""
      }`}
    >
      {children}
    </div>
  );
}
