import React, { useEffect } from "react";
import { gsap } from "gsap";

export default function Loading() {
  useEffect(() => {
    let tl1 = gsap.timeline({ repeat: -1 });
    let tl2 = gsap.timeline({ repeat: -1 });
    tl1.to(
      "#square",
      {
        rotation: 90,
        duration: 0.2,
        ease: "power1.inOut",
        stagger: 0.05,
      },
      0
    );
    tl2
      .to(
        "#square",
        {
          scale: 1.5,
          duration: 0.2,
          ease: "power1.inOut",
          stagger: 0.05,
        },
        0
      )
      .to("#square", {
        scale: 1,
        duration: 0.2,
        ease: "power1.inOut",
        stagger: 0.05,
      });
  }, []);

  return (
    <div className="flex h-96 w-4/5 items-center justify-between bg-inherit">
      <Squares />
    </div>
  );
}

function Squares() {
  let out = [];

  for (let i = 0; i < 6; i++) {
    out.push(
      <div
        className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500"
        id="square"
        key={i}
      >
        <div className="h-7 w-7 rounded-md bg-lighter" />
      </div>
    );
  }
  return out;
}
