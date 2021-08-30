import Navbar from "../navbar";
import Footer from "../footer";

import styles from "./layout.module.css";

export default function Layout({ children }) {
  const { container } = styles;
  return (
    <>
      <Navbar />
      <div className={container}>{children}</div>
      <Footer />
    </>
  );
}
