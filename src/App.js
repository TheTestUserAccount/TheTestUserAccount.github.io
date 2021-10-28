import "./App.css";

import Content from "../src/Content/Content";
import Home from "../src/Home/Home";
import Footer from "./Footer/Footer";
import Contact from "./Contact/Contact";
import Blogs from "./BlogPosts/Blogs";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AllTags from "./AllTags";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />

          <Route exact path="/Content" component={Content} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/Blogs" component={Blogs} />

          <Route exact path="/AllTags" component={AllTags} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
