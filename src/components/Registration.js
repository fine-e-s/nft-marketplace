import { useReg } from "@/hooks/RegContext";

export default function Registration() {
  const { isRegOpened, regToggle } = useReg();

  return (
    <>
      <div
        onClick={regToggle}
        className={`fixed inset-0 z-20 flex h-full w-full items-center justify-center bg-black bg-opacity-70 transition duration-1000
        ${isRegOpened ? "" : "pointer-events-none opacity-0"}`}
      ></div>
      <div
        className={`fixed top-1/2 left-1/2 z-30 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-[20px] bg-lighter transition-all duration-300 ${
          isRegOpened ? "scale-100 opacity-100" : "scale-150 opacity-0"
        }`}
      >
        Hello
      </div>
    </>
  );
}
