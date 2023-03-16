import { useReg } from "@/hooks/RegContext";

export default function Registration() {
  const { isRegOpened, regToggle } = useReg();

  return isRegOpened ? (
    <div
      onClick={regToggle}
      className="fixed inset-0 z-20 flex h-full w-full items-center justify-center bg-black bg-opacity-50"
    >
      <div className="fles h-96 w-96 rounded-[20px] bg-lighter">Hello</div>
    </div>
  ) : (
    ""
  );
}
