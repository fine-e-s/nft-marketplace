import { useReg } from "@/hooks/useReg";
import Button from "./Button";

export default function Registration() {
  const { isRegOpened, regToggle } = useReg();

  return (
    <>
      <div
        onClick={regToggle}
        className={`fixed inset-0 z-20 flex h-full w-full items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm transition duration-1000
        ${isRegOpened ? "" : "pointer-events-none opacity-0"}`}
      ></div>
      <div
        className={`fixed top-1/2 left-1/2 z-30 h-64 w-96 -translate-x-1/2 -translate-y-1/2 rounded-[20px] bg-darker transition-all duration-300 ${
          isRegOpened
            ? "scale-100 opacity-100"
            : "pointer-events-none scale-150 opacity-0"
        }`}
      >
        <FormInput />
      </div>
    </>
  );
}

function FormInput() {
  const { isRegOpened, regToggle } = useReg();

  return (
    <>
      <div className="flex h-full flex-col justify-between bg-transparent pt-3">
        <form className="flex flex-col bg-inherit">
          <div className="mx-3 grid grid-flow-col items-center bg-inherit">
            <label htmlFor="username" className="m-3 bg-inherit">
              Username:
            </label>
            <div className="m-3 flex h-10 w-5/6 justify-self-end rounded-2xl border-2 border-lighter">
              <input
                type="text"
                name="username"
                id="1"
                className="mx-3 h-full w-full bg-transparent"
              />
            </div>
          </div>
          <div className="mx-3 grid grid-flow-col items-center bg-inherit">
            <label htmlFor="password" className="m-3 bg-inherit">
              Password:
            </label>
            <div className="m-3 flex h-10 w-5/6 justify-self-end rounded-2xl border-2 border-lighter">
              <input
                type="password"
                name="password"
                id="2"
                className="mx-3 h-full w-full bg-transparent"
              />
            </div>
          </div>
        </form>
        <div className="mx-auto mb-6 flex">
          <Button cta large hoverScale onClick={regToggle}>
            Submit!
          </Button>
        </div>
      </div>
    </>
  );
}
