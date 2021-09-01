import Navbar from "../navbar";
import Footer from "../footer";

import styles from "./layout.module.css";
import Sidebar from "../sidebar";

export default function Layout({ children }) {
  const { container, navbar, content, sidebar, footer } = styles;
  return (
    <>
      <div className={container}>
        {/* <div className={navbar}>
          <Navbar />
        </div> */}
        <div className={content}>{children}</div>
        <div className={sidebar}>
          <Sidebar />
        </div>
        {/* <div className={footer}>
          <Footer />
        </div> */}
      </div>
    </>
  );
}
