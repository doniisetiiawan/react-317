import React from 'react';
import ReactDOM from 'react-dom';

import MyFeature from './MyFeature';

let disabled = true;

function render() {
  disabled = !disabled;

  ReactDOM.render(
    <MyFeature {...{ disabled }} />,
    document.getElementById('root'),
  );
}

setInterval(render, 3000);

render();
