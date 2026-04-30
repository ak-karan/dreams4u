import React from "react";
import { renderToString } from "react-dom/server";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { appRoutes } from "./routes";

// Prevent noisy SSR warnings from client-only layout effects used by
// animation/router libraries during static prerendering.
if (typeof window === "undefined") {
  React.useLayoutEffect = React.useEffect;
}

function buildHeadMarkup(helmet) {
  return [
    helmet.title?.toString() ?? "",
    helmet.priority?.toString() ?? "",
    helmet.meta?.toString() ?? "",
    helmet.link?.toString() ?? "",
    helmet.script?.toString() ?? "",
  ].join("");
}

export function render(url) {
  const helmetContext = {};
  const router = createMemoryRouter(appRoutes, {
    initialEntries: [url],
  });

  const appHtml = renderToString(
    <HelmetProvider context={helmetContext}>
      <RouterProvider router={router} />
    </HelmetProvider>,
  );

  return {
    appHtml,
    headMarkup: buildHeadMarkup(helmetContext.helmet ?? {}),
  };
}
