import "./Cards.css";
import Card from "../Card";

const i = [1,2,3,4,5,6,7,8,9,0,11,12];

export function Cards({grid}) {
  const styles = grid && {flexDirection: "row", justifyContent: "space-between"}
  return (
    <ul className="cards" style={styles}>
      {i.map((item, ndx) => (
        <li key={"asdfasdf" + ndx}>
          <Card id="f02mOEt11OQ" grid={grid} />
        </li>
      ))}
    </ul>
  )
}