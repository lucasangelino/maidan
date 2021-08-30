import Navbar from "../navbar";
import Footer from "../footer";

import styles from "./layout.module.css";

export default function Layout({ children }) {
  const { container, navbar, content, footer } = styles;
  return (
    <>
      <div className={container}>
        <div className={navbar}>
          <Navbar />
        </div>
        <div className={content}>{children}</div>
        <div className={footer}>
          <Footer />
        </div>
      </div>
    </>
  );
}
