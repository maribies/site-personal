// @vitest-environment jsdom
import { act } from "react";
import { hydrateRoot } from "react-dom/client";
import { afterEach, describe, expect, it, vi } from "vitest";

import { App } from "../pages/App";
import { render, routes } from "../pages/entry-server";
import { siteData } from "./fixtures";

// React recovers from hydration mismatches by re-rendering on the client, so
// the page looks fine in a browser. The only signs are these errors.
describe.each(Object.entries(routes))("hydrate %s", (url, { Page }) => {
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
});
