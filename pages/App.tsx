import { StrictMode, type ReactNode } from "react";

export const App = ({ children }: { children: ReactNode }) => (
  <StrictMode>
    <main>{children}</main>
  </StrictMode>
);
