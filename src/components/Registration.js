import { useState } from "react";

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

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function signIn() {
    fetch("api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          console.log(data.message);
          regToggle();
        }
      });
  }

  return (
    <>
      <div className="flex h-full flex-col justify-between bg-transparent pt-3">
        <form className="flex flex-col bg-inherit">
          <div className="mx-3 grid grid-flow-col items-center bg-inherit">
            <label htmlFor="email" className="m-3 bg-inherit">
              Email:
            </label>
            <div className="m-3 flex h-10 w-5/6 justify-self-end rounded-2xl border-2 border-lighter">
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
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
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
                id="2"
                className="mx-3 h-full w-full bg-transparent"
              />
            </div>
          </div>
        </form>
        <div className="mx-auto mb-6 flex">
          <Button
            cta
            large
            hoverScale
            onClick={() => {
              signIn();
              document.getElementById("2").value = "";
            }}
          >
            Submit!
          </Button>
        </div>
      </div>
    </>
  );
}
