import type { ReactNode } from "react";

import styles from "./layout.module.css";
import { Footer } from "../Footer";

export const Layout = ({ children, isFullPage }: { children: ReactNode, isFullPage?: boolean}) => {
  return (
    <div className={`${styles.layout} ${isFullPage && styles.full}`}>
      {children}
      <Footer />
    </div>
  );
};
