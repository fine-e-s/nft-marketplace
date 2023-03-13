export default function Button({
  cta,
  large,
  hoverScale,
  hoverUnderline,
  children,
}) {
  return (
    <div
      className={`cursor-pointer px-5 py-3 ${
        cta
          ? "flex items-center gap-3 rounded-[20px] bg-purple-500 px-7 py-5"
          : ""
      } ${
        large
          ? "flex w-[224px] justify-center gap-3 rounded-[20px] bg-purple-500 px-5 py-12 font-semibold"
          : ""
      } ${hoverScale ? "hoverScale" : ""}  ${
        hoverUnderline ? "hoverUnderline group overflow-hidden" : ""
      }`}
    >
      {children}
      {hoverUnderline ? (
        <div className="block h-[4px] w-full -translate-x-1/2 scale-x-0 bg-purple-500 transition duration-150 ease-in-out group-hover:translate-x-0 group-hover:scale-x-100"></div>
      ) : (
        ""
      )}
    </div>
  );
}
