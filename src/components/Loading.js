import React from "react";

export default function Loading() {
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
        <div className="flex h-14 w-14 items-center justify-center bg-purple-500">
          <div
            className="h-4 w-4 bg-lighter"
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 180, 225, 360],
              borderRadius: ["30%", "30%", "50%", "50%", "30%"],
            }}
            transition={{
              delay: `${0.7 + 0.5 * i}`,
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: Infinity,
              repeatDelay: 1,
            }}
          />
        </div>
      </React.Fragment>
    );
  }
  return out;
}
