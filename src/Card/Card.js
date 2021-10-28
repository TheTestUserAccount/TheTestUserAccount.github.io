import React from "react";

import "./CardStyles.css";
import "../App.css";
import laptopcodesolid from "../Resources/laptop-code-solid.svg";
import mobilealtsolid from "../Resources/mobile-alt-solid.svg";
import objectgroupregular from "../Resources/object-group-regular.svg";

function Card() {
  return (
    <div className="mainDiv">
      <p style={{ fontSize: 80, marginBottom: -30 }}>WHAT CAN I DO ?</p>
      <p>
        Best viewed on a tablet or desktop screens. Total responsiveness is
        still to be desired.
      </p>
      <div class="quotes">
        <div class="card">
          <div class="box box1">
            <p>
              The first step toward success is taken when you refuse to be a
              captive of the environment in which you first find yourself.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                src={laptopcodesolid}
                style={{
                  width: 70,
                  marginBottom: -170,
                }}
              ></img>
            </div>
            <h2>Web development</h2>
          </div>
          <div class="bg"></div>
        </div>
        <div class="card">
          <div class="box box2">
            <p>
              Your smile will give you a positive countenance that will make
              people feel comfortable around you.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                src={mobilealtsolid}
                style={{
                  width: 40,
                  marginBottom: -170,
                }}
              ></img>
            </div>
            <h2>Les Brown</h2>
          </div>
          <div class="bg"></div>
        </div>
        <div class="card">
          <div class="box box3">
            <p>
              I love designing websites and keep things as simple as possible.
              My goals is to focus on minimalism and conveying the message that
              you want to send
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div className="imageHover box1">
                <img
                  src={objectgroupregular}
                  style={{
                    marginBottom: -80,
                  }}
                ></img>
              </div>
            </div>
            <h2 style={{ marginTop: 80 }}>Responsive Design</h2>
          </div>
        </div>
      </div>
      <p style={{ fontSize: 80, textAlign: "center", color: "black" }}>
        Avail your opportunity NOW !!!{" "}
      </p>
    </div>
  );
}
export default Card;
