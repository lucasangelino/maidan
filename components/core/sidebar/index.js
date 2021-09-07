import Card from "../../ui/cards";
import Categories from "../../ui/categories";
import styles from "./sidebar.module.css";
import { recomendations } from "../../../constants/content";

export default function Sidebar() {
  const { sidebar_container } = styles;
  return (
    <>
      <Categories />
      <h4>Recomendaciones</h4>
      <div className={sidebar_container}>
        {recomendations.map((recom, index) => (
          <Card key={index} title={recom.title} imgURL={recom.imgURL} />
        ))}
      </div>
    </>
  );
}
