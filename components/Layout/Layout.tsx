import type { ReactNode } from "react";

import styles from "./layout.module.css";
import { Footer } from "../Footer";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.layout}>
      {children}
      <Footer />
    </div>
  );
};
