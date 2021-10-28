import React from "react";
import "./Blogs.css";

import Articles from "../Strings/Articles";
import AppHeader from "../Header/Header";
import Footer from "../Footer/Footer";
import "../Styles/buttonspan.css";

import "../Resources/BuildingRESTAPIswithFlask.pdf";
import "../App.css";

function Blogs(props) {
  return (
    <div className="BlogBody">
      <div>
        <AppHeader />
      </div>

      <div
        style={{
          display: "flex",
          // margin: "125px 350px 0px 350px",
          margin: "185px 340px 0px 340px",
          // backgroundColor: "white",
          borderRadius: 5,
          padding: 0,
        }}
      >
        <h1 style={{ letterSpacing: 4 }}>Blog Posts</h1>

        <button className="button">
          <a href="/AllTags">
            <span>View All Tags</span>
          </a>
        </button>
      </div>

      <div className="Blog">
        <button
          type="button"
          className="collapsible contentfont"
          onClick={khan}
        >
          need this long text is because we want the effect to be as crisp as...
          <p
            style={{
              color: "black",
              width: 100,
              fontSize: 12,
              marginLeft: 10,
            }}
          >
            Date 20/19/1990
          </p>
        </button>

        <div className="content">
          <p className="contentfont" style={{ fontWeight: "bold" }}>
            {Articles.M1STARTICLE.ARTICLE}
          </p>
          <hr></hr>
          <a
            style={{ textDecoration: "none" }}
            href="https://haiderqadir.medium.com/?p=77bd0dc961c7"
          >
            👉Click here to Read the Full Article
          </a>
        </div>
      </div>
      <Footer />
      <a href="https://drive.google.com/file/d/1BoxKy9sv-W1xgFvRZLB6mtJ6qNTGtvcE/view?usp=sharing">
        hello
      </a>
    </div>
  );
}
export default Blogs;

function khan() {
  var coll = document.getElementsByClassName("collapsible");
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var content = this.nextElementSibling;

      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }
}
