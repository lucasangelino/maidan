import styles from "./badge.module.css";

export default function Bagde({ title, style }) {
  const { badge } = styles;
  return <div className={badge}>{title}</div>;
}
