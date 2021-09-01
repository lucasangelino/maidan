import Card from "../../ui/cards";
import styles from "./sidebar.module.css";
import { recomendations } from "../../../constants/content";

export default function Sidebar() {
  const { sidebar_container } = styles;
  return (
    <>
      <div>
        <h4>Recomendaciones</h4>
      </div>
      <div className={sidebar_container}>
        {recomendations.map((recom, index) => (
          <Card key={index} title />
        ))}
      </div>
    </>
  );
}
