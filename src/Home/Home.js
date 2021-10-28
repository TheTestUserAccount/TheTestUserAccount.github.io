import React from "react";
import "./Home.css";

import Content from "../Content/Content";
import Footer from "../Footer/Footer";

import AppHeader from "../Header/Header";

import Card from "../Card/Card";

function Home() {
  return (
    <div>
      <AppHeader />

      <Content />

      <Card />
      {/* <Links /> */}
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
