import React from "react";
//Global Style
import GlobalStyle from "./components/GlobalStyle";
//Import Pages
import ContactUs from "./pages/ContactUs";
import Projects from "./pages/Projects";
import Nav from "./components/Nav";
import MovieDetail from "./pages/MovieDetail";
import AboutMe from "./pages/AboutMe";
//Router
import { Switch, Route, useLocation } from "react-router-dom";
//Animation
import { AnimatePresence } from "framer-motion";


function App() {
  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />

      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <AboutMe />
          </Route>
          <Route path="/projects" exact>
            <Projects/>
          </Route>
          <Route path="/work/:id">
            <MovieDetail />
          </Route>
          <Route path="/contact">
            <ContactUs />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
