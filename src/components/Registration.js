import { useState, useEffect } from "react";

import { useReg } from "@/hooks/useReg";
import Button from "./Button";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "@/firebase/firebaseApp";

export default function Registration() {
  const { isRegOpened, regToggle } = useReg();

  useEffect(() => {
    setTimeout(() => {
      setSignUp(false);
    }, 300);
  }, [isRegOpened]);

  const [isSignUp, setSignUp] = useState(false);

  return (
    <>
      <div
        onClick={() => {
          regToggle();
        }}
        className={`fixed z-20 flex h-full w-full items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm transition duration-1000
        ${isRegOpened ? "" : "pointer-events-none opacity-0"}`}
      ></div>
      <div
        className={`fixed top-1/2 left-1/2 z-30 flex w-max -translate-x-1/2 -translate-y-1/2 rounded-[20px] bg-darker transition-all duration-300 max-md:flex-col ${
          isRegOpened
            ? "scale-100 opacity-100"
            : "pointer-events-none scale-150 opacity-0"
        }`}
      >
        {isSignUp ? <SignUpForm /> : <LogInForm setSignUp={setSignUp} />}
      </div>
    </>
  );
}

function LogInForm({ setSignUp }) {
  const { regToggle } = useReg();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function logIn() {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);

      //Log user to console, delete when finished
      console.log("Logged in: ", result.user);

      regToggle();
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <div className="m-3 flex h-full flex-col justify-between bg-transparent pt-3">
        <form className="flex flex-col gap-5 bg-inherit">
          <div className="grid grid-flow-col items-center bg-inherit">
            <label htmlFor="1" className="m-3 w-36 bg-inherit">
              Email:
            </label>
            <div className="flex h-10 w-40 justify-self-end rounded-2xl border-2 border-lighter">
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                id="email"
                className="mx-3 h-full w-full bg-transparent"
              />
            </div>
          </div>

          <div className="grid grid-flow-col items-center bg-inherit">
            <label htmlFor="2" className="m-3 w-36 bg-inherit">
              Password:
            </label>
            <div className="flex h-10 w-40 justify-self-end rounded-2xl border-2 border-lighter">
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
                id="password"
                className="mx-3 h-full w-full bg-transparent"
              />
            </div>
          </div>
        </form>
        <div className="mx-2 mt-5 flex justify-center">
          <Button
            cta
            hoverScale
            className={"w-full border-2 border-purple-500 !bg-lighter"}
            onClick={() => {
              logIn();
              document.getElementById("password").value = "";
            }}
          >
            Log In
          </Button>
        </div>
        <div
          className="mt-2 translate-y-1 cursor-pointer text-center text-sm text-light underline"
          onClick={() => {
            setSignUp(true);
          }}
        >
          Don't have an account?
        </div>
      </div>
    </>
  );
}

function SignUpForm() {
  const { regToggle } = useReg();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  async function signUp() {
    if (password === repeatPassword) {
      try {
        const result = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        //Log user to console, delete when finished
        console.log("Signed up: ", result.user);

        regToggle();
      } catch (err) {
        console.error(err);
      }
    } else {
      alert(`Passwords don't match.`);
    }
  }

  return (
    <>
      <div className="m-3 flex h-full flex-col justify-between bg-transparent pt-3">
        <form className="flex flex-col gap-5 bg-inherit">
          <div className="grid grid-flow-col items-center bg-inherit">
            <label htmlFor="1" className="m-3 w-36 bg-inherit">
              Email:
            </label>
            <div className="flex h-10 w-40 justify-self-end rounded-2xl border-2 border-lighter">
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="emailSignUp"
                id="emailSignUp"
                className="mx-3 h-full w-full bg-transparent"
              />
            </div>
          </div>

          <div className="grid grid-flow-col items-center bg-inherit">
            <label htmlFor="2" className="m-3 w-36 bg-inherit">
              Password:
            </label>
            <div className="flex h-10 w-40 justify-self-end rounded-2xl border-2 border-lighter">
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="passwordSignUp"
                id="passwordSignUp"
                className="mx-3 h-full w-full bg-transparent"
              />
            </div>
          </div>

          <div className="grid grid-flow-col items-center bg-inherit">
            <label htmlFor="3" className="m-3 w-36 bg-inherit">
              Repeat password:
            </label>
            <div className="flex h-10 w-40 justify-self-end rounded-2xl border-2 border-lighter">
              <input
                onChange={(e) => setRepeatPassword(e.target.value)}
                type="password"
                name="repeatPasswordSignUp"
                id="repeatPasswordSignUp"
                className="mx-3 h-full w-full bg-transparent"
              />
            </div>
          </div>
        </form>
        <div className="mx-2 mt-5 mb-1 flex justify-center gap-4">
          <Button
            cta
            hoverScale
            className={"w-full"}
            onClick={() => {
              signUp();
              document.getElementById("passwordSignUp").value = "";
              document.getElementById("repeatPasswordSignUp").value = "";
            }}
          >
            Sign Up
          </Button>
        </div>
      </div>
    </>
  );
}
