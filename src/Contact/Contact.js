import React from "react";

import "../Content/Content";

import { Container, Row, Col } from "react-grid-system";
import a from "../Resources/envelope-regular.svg";
import "./ContactStyles.css";
import "../App.css";
import Footer from "../Footer/Footer";
import AppHeader from "../Header/Header";

function Contact() {
  return (
    <div>
      <AppHeader />

      <div className="ContactStyle">
        <img src={a} style={{ width: 30 }}></img>
        <img src={a} style={{ width: 30 }}></img>
        <img src={a} style={{ width: 30 }}></img>
      </div>

      <div>
        <div class="container">
          <h1>FormSubmit Demo</h1>
          <form
            target="_blank"
            action="https://formsubmit.co/haiderqadir026@gmail.com"
            method="POST"
          >
            <div class="form-group">
              <div class="form-row">
                <div class="col">
                  <input
                    type="text"
                    name="name"
                    class="form-control"
                    placeholder="Full Name"
                    required
                  ></input>
                </div>
                <div class="col">
                  <input
                    type="email"
                    name="email"
                    class="form-control"
                    placeholder="Email Address"
                    required
                  ></input>

<input type="hidden" name="_next" value="https://www.google.com ">
                </div>
              </div>
            </div>
            <div class="form-group">
              <textarea
                placeholder="Your Message"
                class="form-control"
                name="message"
                rows="10"
                required
              ></textarea>
            </div>
            <button type="submit" class="btn btn-lg btn-dark btn-block">
              Submit Form
            </button>

          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}
export default Contact;
