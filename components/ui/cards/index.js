import Image from "next/image";
import styles from "./cards.module.css";
import recomImg from "../../../pages/public/recom_video1.jpg";

export default function Cards() {
  const { card, img } = styles;
  return (
    <>
      <div className={card}>
        <Image
          src={recomImg}
          alt={"Recomendacion video"}
          layout={"fill"}
          className={img}
        />
      </div>
    </>
  );
}
