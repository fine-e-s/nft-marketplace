import React from "react";
import { gsap } from "gsap";

export default function Loading() {
  let tl = gsap.timeline({ repeat: -1 });
  tl.to("#square", {
    rotation: 90,
    duration: 0.5,
    scale: 1.1,
    ease: "none",
    stagger: 0.2,
  });

  return (
    <div className="flex h-96 w-4/5 items-center justify-between bg-inherit">
      <Squares />
    </div>
  );
}

function Squares() {
  let out = [];

  for (let i = 0; i < 3; i++) {
    out.push(
      <React.Fragment key={i}>
        <div
          className="flex h-14 w-14 items-center justify-center rounded-md bg-purple-500"
          id="square"
        >
          <div className="h-5 w-5 rounded-md bg-lighter" />
        </div>
      </React.Fragment>
    );
  }
  return out;
}
