import "../BatmanSuits/batmanstyles.css";
import { AnimatePresence } from "framer-motion";
import { BatmanItem } from "../BatmanSuits/BatmanItem";
import { List } from "./BatmanList";
import { Route, Routes, useParams } from "react-router-dom";

function Store() {
  let { id } = useParams();
  const imageHasLoaded = true;

  return (
    <>
      <List selectedId={id} />
      <AnimatePresence>
        {id && imageHasLoaded && <BatmanItem id={id} key="item" />}
      </AnimatePresence>
    </>
  );
}

export default function Batman() {
  return (
    <div className="container">
      <Routes>
        <Route path="/:id" element={<Store />} />
        <Route path="/*" element={<Store />} />
      </Routes>
    </div>
  );
}
