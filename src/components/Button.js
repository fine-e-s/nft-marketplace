import styles from "@/styles/Home.module.css";

export default function Button({ cta, large, children }) {
  return (
    <div
      className={`px-5 py-3 ${
        cta ? "flex items-center gap-3 rounded-3xl bg-purple-500 px-7 py-5" : ""
      } ${
        large
          ? "flex w-32 items-center gap-3 rounded-3xl bg-purple-500 px-5 py-12"
          : ""
      }`}
    >
      {children}
    </div>
  );
}
