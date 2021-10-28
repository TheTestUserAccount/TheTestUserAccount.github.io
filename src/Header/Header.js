import "../App.css";
import "../Styles/Nav.css";
import { Link } from "react-router-dom";

import { Container, Row, Col } from "react-grid-system";

function AppHeader() {
  return (
    <Container fluid>
      <div>
        <Row>
          <header className="App-header">
            <Col xs={4} md={4} lg={6} debug>
              <a href="/" style={{ color: "white", textDecoration: "none" }}>
                <h1>Code Challenge</h1>
              </a>
            </Col>

            <Col xs={4} md={4} lg={4} debug></Col>

            <div>
              <Col xs={4} md={4} lg={2} debug>
                <nav role="navigation">
                  <div id="menuToggle">
                    <input type="checkbox" />

                    <span></span>
                    <span></span>

                    <span></span>

                    <ul id="menu">
                      <Link to={"/Content"}>
                        <li>Content</li>
                      </Link>

                      <Link to={"/Blogs"}>
                        <li>Blogs</li>
                      </Link>
                      <Link to={"/Contact"}>
                        {" "}
                        <li>Contact</li>
                      </Link>
                    </ul>
                  </div>
                </nav>

                {/* <nav
                style={{
                  display: "flex",

                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <a
                  href="#foot"
                  style={{
                    marginRight: 20,
                    borderRadius: 30,
                    borderColor: "red",
                    borderWidth: 20,
                    backgroundColor: "red",
                  }}
                >
                  {" "}
                  click me
                </a>
                <a
                  href="#"
                  style={{
                    marginRight: 20,
                    borderRadius: 50,

                    borderWidth: 2,
                    backgroundColor: "yellow",
                    padding: 3,
                    borderColor: "blue",
                  }}
                >
                  click me again
                </a>
                <a href="#">click me again</a>
              </nav> */}
              </Col>
            </div>
          </header>
        </Row>
      </div>
    </Container>
  );
}

export default AppHeader;
