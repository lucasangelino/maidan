import Filters from "../filters/index";
import styles from "./categories.module.css";
import { filters } from "../../../constants/content";

function Caterogies() {
  const { categories_container } = styles;
  return (
    <div className={categories_container}>
      <h4>Categorias</h4>
      <Filters filters={filters} />
    </div>
  );
}

export default Caterogies;
