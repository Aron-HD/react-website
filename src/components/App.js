import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Fragment } from "react";
// import Navbar from "./Navbar";
import Blogs from "./Blog/Blogs";
import Create from "./Blog/Create";
import About from "./About";
import Contact from "./Contact";
import Showcase from "./Showcase/Showcase";
import NavAlt from "./Showcase/NavAlt";
import BlogDetails from "./Blog/BlogDetails";

function App() {
  return (
    <Router>
      <Fragment key="App">
        <Switch>
          <Route exact path="/" component={Showcase} />
          <NavAlt />
        </Switch>
        <div className="content">
          <Switch>
            <Route exact path="/blogs" component={Blogs} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/create" component={Create} />
            <Route path="/blogs/:id" component={BlogDetails} />
          </Switch>
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
