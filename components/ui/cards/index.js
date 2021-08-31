import styles from "./cards.module.css";

export default function Cards() {
  const { card } = styles;
  return (
    <>
      <div className={card}>Card1</div>
    </>
  );
}
