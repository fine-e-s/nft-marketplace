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
          <div className="h-4 w-4 bg-lighter" />
        </div>
      </React.Fragment>
    );
  }
  return out;
}
