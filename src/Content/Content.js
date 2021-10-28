import React from "react";

import "./ContentStyle.css";
import "../App.css";

import c from "../Resources/pexels-oleg-magni-1040473.jpg";
function Content() {
  return (
    <div>
      {/* <AppHeader /> */}

      <div
        style={{
          backgroundImage: `url(${c})`,
          backgroundSize: "100% 120%",
          backgroundPosition: "left",

          // backgroundColor: "grey",
          marginTop: 120,
          marginBottom: -20,
          textAlign: "center",
          color: "white",
          // borderTop: "solid",
          // borderTopColor: "black",
          // borderWidth: 20,
          // borderTopLeftRadius: 500,
          height: 230,
        }}
      >
        <p style={{ marginBottom: -45, fontSize: 70 }}>Code Challenge Pro</p>
        <p style={{ fontSize: 25 }} className="contentfont">
          Software Challenge For You !
        </p>
      </div>

      <div className="Content">
        <p
          style={{
            fontSize: 70,
            marginTop: -100,

            textAlign: "center",
            marginBottom: -10,
          }}
        >
          Hey There I Steve Harmission
        </p>

        <p
          className="contentfont"
          style={{ fontWeight: "bold", textAlign: "center" }}
        >
          Motivated. Driven. Hard workingw.
        </p>
        <p
          className="contentfont"
          style={{ fontWeight: "bold", textAlign: "center" }}
        >
          {" "}
          Fast learner. I'm a SoftwareEngineer.
        </p>
        <p
          className="contentfont"
          style={{ fontWeight: "bold", textAlign: "center", margin: "0 20%" }}
        >
          I'm confident I'll make a difference in your team. Take a look at my
          projects. I am currently available for freelance work. I create
          responsive and user friendly designs. Let me help you make sure your
          website is getting you as much value as possible.
        </p>
      </div>
    </div>
  );
}
export default Content;
