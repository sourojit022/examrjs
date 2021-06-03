import React, { useState } from "react";
import { Button } from "react-bootstrap";

export default function Colorchange() {
  const color = "#eb9d9d";
  const [change, setChange] = useState(color);
  const [info, setInfo] = useState("");

  const changeColor = () => {
    const color1 = "#1ce863";
    setChange(color1);
    setInfo("Button Clicked");
  };
  return (
    <>
      <div className=" full">
        <div className="col-lg-6 col-md-6 col-sm-6 ">
          <div className="side card" style={{ backgroundColor: change }}></div>
        </div>
      </div>
      <div id="button">
        <Button onClick={changeColor} id="button1">
          Press
        </Button>
      </div>
      <div className="text1">
        <p>
          <h2>
            <b>{info}</b>
          </h2>
        </p>
      </div>
    </>
  );
}
