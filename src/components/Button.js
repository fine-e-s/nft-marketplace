export default function Button({
  cta,
  large,
  larger,
  hoverScale,
  hoverUnderline,
  children,
}) {
  return (
    <div
      className={`mx-[10px] cursor-pointer py-3 lg:mx-5 ${
        cta
          ? "!mx-0 flex items-center gap-3 rounded-[20px] bg-purple-500 px-7 py-5"
          : ""
      } ${
        large
          ? "flex w-[224px] justify-center gap-3 rounded-[20px] bg-purple-500 px-5 py-12 font-semibold"
          : ""
      }      
      ${hoverScale ? "hoverScale" : ""}
      ${hoverUnderline ? "group relative" : ""} 
      ${larger ? "w-auto" : ""}`}
    >
      {children}
      {hoverUnderline ? <div className="underline"></div> : ""}
    </div>
  );
}
