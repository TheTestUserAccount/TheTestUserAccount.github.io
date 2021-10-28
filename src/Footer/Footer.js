import React from "react";
import "../Footer/footer.css";
import "../Styles/buttonc.css";

import a from "../Resources/envelope-regular.svg";
function Footer() {
  return (
    <div id="foot">
      <footer className="Footer">
        <h1 style={{ marginBottom: -30 }}>Haider Qadir</h1>

        <h3 style={{ marginBottom: -15 }}>haiderqadir026@gmail.com</h3>
        <div style={{ display: "flex", margin: 20 }}>
          <a href="/Contact">
            <button className="button1"> Cusom button </button>
          </a>

          <a href="/Contact">
            <button className="button1"> Cusom button </button>
          </a>

          <a href="/Contact">
            <button className="button1"> Cusom button </button>
          </a>

          <a href="/Contact">
            <button className="button1"> Cusom button </button>
          </a>
        </div>
        <div style={{ display: "flex", margin: 20 }}>
          <img src={a} style={{ width: 30 }}></img>
          github
          <img src={a} style={{ width: 30 }}></img> about
          <img src={a} style={{ width: 30 }}></img>contact
        </div>

        <h3>
          AhmadAwais.com Copyright © Ahmad Awais 2003 - 2021. All rights
          reserved
        </h3>
      </footer>
    </div>
  );
}
export default Footer;
