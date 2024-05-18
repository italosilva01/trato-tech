import { Outlet } from "react-router-dom";
import styles from "./PageDefault.module.scss";
import Navbar from "components/Navbar";
import Footer from "components/Footer";

export const PageDefault = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles["container-outlet"]}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
