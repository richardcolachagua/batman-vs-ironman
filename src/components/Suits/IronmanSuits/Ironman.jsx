import "../IronmanSuits/ironmanstyles.css";
import { AnimatePresence } from "framer-motion";
import { IronManItem } from "./IronmanItem";
import { List } from "./IronmanList";
import { useParams, Routes, Route } from "react-router-dom";

function Store() {
  let { id } = useParams();
  const imageHasLoaded = true;

  return (
    <>
      <List selectedId={id} />
      <AnimatePresence>
        {id && imageHasLoaded && <IronManItem id={id} key="item" />}
      </AnimatePresence>
    </>
  );
}

export default function Ironman() {
  return (
    <div className="container">
      <Routes>
        <Route path="/:id" element={<Store />} />
        <Route path="/*" element={<Store />} />
      </Routes>
    </div>
  );
}
