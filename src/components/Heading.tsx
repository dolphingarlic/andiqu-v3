import React, { ReactNode, useEffect, useState } from "react";

import "./Heading.css";

import COLORS from "./colors";

const MARGINS = {
  xs: "",
  sm: "my-3",
  md: "my-3",
  lg: "my-4",
  xl: "my-5",
};

const Heading = (props: {
  size: string;
  children: ReactNode;
  history?: any;
}) => {
  const [rot1, setRot1] = useState(0);
  const [rot2, setRot2] = useState(0);
  const [dir, setDir] = useState(Math.round(Math.random()) * 2 - 1);
  const [color, setColor] = useState(["#cccccc", "#999999"]);

  function activate() {
    setRot1(dir * (Math.random() * 2.5 + 1));
    setRot2(-dir * (Math.random() * 2.5 + 1));
    setDir(dir * -1);
    let newColor = COLORS[Math.floor(Math.random() * COLORS.length)];
    while (newColor === color) {
      newColor = COLORS[Math.floor(Math.random() * COLORS.length)];
    }
    setColor(newColor);
  }

  useEffect(activate, []);
  if (props.history) props.history.listen(activate);

  return (
    <>
      <div
        className={`heading ${
          MARGINS[props.size as keyof typeof MARGINS]
        } heading-${props.size}`}
        onClick={activate}
      >
        <div
          className="heading-rect"
          style={{
            background: color[0],
            transform: `rotate(${rot1}deg)`,
          }}
        />
        <div
          className="heading-rect"
          style={{
            background: color[1],
            transform: `rotate(${rot2}deg)`,
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
