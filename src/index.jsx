import {
  renderToString,
  HydrationScript,
  generateHydrationScript,
} from "solid-js/web";

export default {
  fetch() {
    return new Response(
      `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Hono + SolidJS</title>
            <link href="/src/style.css" rel="stylesheet">${generateHydrationScript()}
          </head>
          <body>${renderToString(() => (
            <>
              Hello from SolidJS!
              <HydrationScript />
            </>
          ))}</body>
        </html>
      `, {
        headers: { "Content-Type": "text/html; charset=utf-8" },
      }
    );
  },
};
