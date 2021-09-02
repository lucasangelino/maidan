import { Instragram } from "../../ui/icons/instagram/";
import styles from "./navbar.module.css";

export default function Navbar() {
  const { navbar, actions, searchbox, socialmedia, mediabutton } = styles;
  return (
    <div className={navbar}>
      <div className={actions}>
        {/* <input className={searchbox} type="text" placeholder="Search" /> */}
        {/* <div className={socialmedia}></div> */}
      </div>
    </div>
  );
}
