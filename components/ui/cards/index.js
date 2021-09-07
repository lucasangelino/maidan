import Image from "next/image";
import styles from "./cards.module.css";

export default function Cards({ title, imgURL }) {
  const { card, img } = styles;
  return (
    <>
      <div className={card}>
        <Image src={imgURL} alt={title} layout={"fill"} className={img} />
      </div>
    </>
  );
}
