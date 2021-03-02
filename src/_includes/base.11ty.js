exports.render = function (data) {
  return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${data.title}</title>
        <meta name="description" content="More Coming Soon" />
        <meta property="og:title" content="bourbon.net" />
        <meta property="og:description" content="More Coming Soon" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bourbon.net" />
        <meta property="og:image" content="/512.png" />
        <meta property="og:image:secure_url" content="/512.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="icon" type="image/png" sizes="32x32" href="/32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <style>
          * {
            border: 0;
            margin: 0;
            padding: 0;
          }
          html {
            height: 100%;
          }
          body {
            background: #14191e;
            color: #f2f2f2;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
            font-family: ui-sans-serif, system-ui, -apple-system,
              BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
              'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
              'Segoe UI Symbol', 'Noto Color Emoji';
            text-align: center;
          }
          p {
            font-size: 5em;
          }
          h1 {
            font-size: 1em;
            font-weight: normal;
            padding: 12px;
          }
        </style>
      </head>
      <body>
        <div>${data.content}</div>
      </body>
    </html>`
}
