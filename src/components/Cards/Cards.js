import "./Cards.css";
import Card from "../Card";
import { useSelector } from "react-redux";

export function Cards({grid}) {
  const list = useSelector(state => state.videos.list)
  return (
    <ul className="cards" style={styles}>
      {list.map((item) => (
        <li key={item.id}>
          <Card id={item.id} title={item.title} count={item.count} category={item.category}  grid={grid} />
        </li>
      ))}
    </ul>
  )
}