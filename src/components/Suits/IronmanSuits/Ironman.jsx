import React from "react";
import { AnimatePresence } from "framer-motion";
import { Header } from "./Header";
import { IronmanItem } from "./IronmanItem";
import { IronmanList } from "./IronmanList";
import { BrowserRouter as Router, Route } from "react-router-dom";

function Store({ match }) {
  let { id } = match.params;
  const imageHasLoaded = true;

  return (
    <>
      <IronmanList selectedId={id} />
      <AnimatePresence>
        {id && imageHasLoaded && <IronmanItem id={id} key="item" />}
      </AnimatePresence>
    </>
  );
}

export default function App() {
  return (
    <div className="container">
      <Header />
      <Router>
        <Route path={["/:id", "/"]} component={Store} />
      </Router>
    </div>
  );
}
