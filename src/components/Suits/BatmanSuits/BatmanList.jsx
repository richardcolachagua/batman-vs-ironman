import { BatmanItem } from "../BatmanSuits/BatmanItem";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Card({ id, name, abilities, theme }) {
  return (
    <li className={`card ${theme}`}>
      <div className="card-content-container">
        <motion.div className="card-content" layoutId={`card-container-${id}`}>
          <motion.div
            className="card-image-container"
            layoutId={`card-image-container-${id}`}
          >
            <img className="card-image" src={`images/${id}.jpg`} alt="" />
          </motion.div>
          <motion.div
            className="title-container"
            layoutId={`title-container-${id}`}
          >
            <span className="category">{name}</span>
            <h2>{abilities}</h2>
          </motion.div>
        </motion.div>
      </div>
      <Link to={id} className={`card-open-link`} />
    </li>
  );
}

export function List({ selectedId }) {
  return (
    <ul className="card-list">
      {BatmanItem.map((card) => (
        <Card key={card.id} {...card} isSelected={card.id === selectedId} />
      ))}
    </ul>
  );
}
