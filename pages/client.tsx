import type { ReactNode } from "react";
import { createRoot } from "react-dom/client";

import "@fontsource/poppins/latin-100.css";
import "@fontsource/poppins/latin-400.css";
import "@fontsource/dela-gothic-one/latin-400.css";
import "../styles/styles.css";

import { App } from "./App";

export const render = (page: ReactNode) => {
  createRoot(document.getElementById("root")!).render(<App>{page}</App>);
};
