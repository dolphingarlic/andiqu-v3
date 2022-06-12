import React, { ReactNode } from "react";

import "./Heading.css";

import COLORS from "./colors";

const MARGINS = {
  xs: "",
  sm: "my-3",
  md: "my-3",
  lg: "my-4",
  xl: "my-5",
};

const Heading = (props: { size: string; children: ReactNode }) => {
  let color = COLORS[Math.floor(Math.random() * COLORS.length)];

  return (
    <>
      <div
        className={`heading ${
          MARGINS[props.size as keyof typeof MARGINS]
        } heading-${props.size}`}
      >
        <div
          className="heading-before"
          style={{
            background: color[0],
            transform: `rotate(${Math.random() * 5 + 2}deg)`,
          }}
        />
        <div
          className="heading-after"
          style={{
            background: color[1],
            transform: `rotate(-${Math.random() * 5 + 2}deg)`,
          }}
        />
        <h2 className="heading-hidden">{props.children}</h2>
        <h2 className="heading-mask" style={{ color: color[1] }}>
          {props.children}
        </h2>
      </div>
      <br />
    </>
  );
};

export default Heading;
