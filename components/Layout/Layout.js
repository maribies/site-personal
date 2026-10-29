import styles from "./layout.module.css";
import { Footer } from "../Footer";

export const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      {children}
      <Footer />
    </div>
  );
};
