export default function handler(req, res) {
  const { code, state } = req.query;

  const redirectUrl =
    `smartsheetapp://oauth/callback?code=${encodeURIComponent(code)}&state=${encodeURIComponent(state)}`;

  res.setHeader("Content-Type", "text/html; charset=utf-8");

  res.status(200).send(`
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Opening app…</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      body {
        font-family: -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        text-align: center;
      }
    </style>
  </head>
  <body>
    <div>
      <p>Login successful.</p>
      <p>Opening the app…</p>
      <a id="openApp" href="${redirectUrl}">
        Open Smartsheet App
      </a>
    </div>

    <script>
      setTimeout(() => {
        document.getElementById("openApp").click();
      }, 100);
    </script>
  </body>
</html>
  `);
}