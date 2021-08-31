import Bagde from "../badges";
import styles from "./filters.module.css";

export default function Filters({ filters }) {
  const { filterList } = styles;

  return (
    <div className={filterList}>
      {filters.map((filter, index) => {
        return <Bagde key={index} title={filter.title} />;
      })}
    </div>
  );
}
