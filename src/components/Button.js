export default function Button({
  cta,
  large,
  hoverScale,
  hoverUnderline,
  children,
}) {
  return (
    <div
      className={`mx-5 cursor-pointer py-3 ${
        cta
          ? "!mx-0 flex items-center gap-3 rounded-[20px] bg-purple-500 px-7 py-5"
          : ""
      } ${
        large
          ? "flex w-[224px] justify-center gap-3 rounded-[20px] bg-purple-500 px-5 py-12 font-semibold"
          : ""
      }      
      ${hoverScale ? "hoverScale" : ""}
      ${hoverUnderline ? "group relative" : ""}`}
    >
      {children}
      {hoverUnderline ? <div className="underline"></div> : ""}
    </div>
  );
}
