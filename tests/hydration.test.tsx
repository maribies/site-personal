// @vitest-environment jsdom
import { act } from "react";
import { hydrateRoot } from "react-dom/client";
import { afterEach, describe, expect, it, vi } from "vitest";

import { App } from "../pages/App";
import { render, routes } from "../pages/entry-server";
import { notFound } from "../pages/routes";
import { siteData } from "./fixtures";

(
  globalThis as { IS_REACT_ACT_ENVIRONMENT?: boolean }
).IS_REACT_ACT_ENVIRONMENT = true;

vi.stubGlobal("matchMedia", () => ({
  matches: true,
  addEventListener: () => {},
  removeEventListener: () => {},
}));
vi.stubGlobal(
  "ResizeObserver",
  class {
    observe() {}
    disconnect() {}
  },
);

// React recovers from hydration mismatches by re-rendering on the client, so
// the page looks fine in a browser. The only signs are these errors.
describe.each([...Object.entries(routes), ["/404", notFound] as const])(
  "hydrate %s",
  (url, { Page }) => {
    afterEach(() => {
      document.body.innerHTML = "";
      vi.restoreAllMocks();
    });

    it("matches the server-rendered HTML", async () => {
      const container = document.createElement("div");
      container.innerHTML = render(url, siteData).html;
      document.body.append(container);

      const consoleError = vi.spyOn(console, "error");
      const onRecoverableError = vi.fn();

      await act(async () => {
        hydrateRoot(
          container,
          <App>
            <Page data={siteData} />
          </App>,
          { onRecoverableError },
        );
      });

      expect(onRecoverableError).not.toHaveBeenCalled();
      expect(consoleError).not.toHaveBeenCalled();
    });
  },
);
