import type { ReactNode } from "react";

import styles from "./layout.module.css";
import { Footer } from "../Footer";
import { Header } from "../Header";

export const Layout = ({
  children,
  isFullPage,
  showHeader,
}: {
  children: ReactNode;
  isFullPage?: boolean;
  showHeader?: boolean;
}) => {
  return (
    <div className={`${styles.layout} ${isFullPage ? styles.full : ""}`}>
      {showHeader && <Header />}
      {children}
      <Footer />
    </div>
  );
};
