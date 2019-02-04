import React from 'react';
import ReactDOMServer from 'react-dom/server';
import express from 'express';

import App from './App';

const doc = content => `
<!doctype html>
<html lang="en">
<head>
  <title>Rendering to strings</title>
</head>
<body>
<div id="app">${content}</div>
</body>
</html>
  `;

const app = express();

app.get('/', (req, res) => {
  const props = {
    items: ['One', 'Two', 'Three'],
  };

  const rendered = ReactDOMServer.renderToString(<App {...props} />);

  res.send(doc(rendered));
});

app.listen(8080, () => {
  console.log('listenig to 127.0.0.1:8080');
});
