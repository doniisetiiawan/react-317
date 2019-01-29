import React from 'react';
import ReactDOM from 'react-dom';

import MyComponent from './MyComponent';

const validProps = {
  myString: 'My String',
  myNumber: 100,
  myBool: true,
  myFunc: () => 'My return value',
  myArray: ['One', 'Two', 'Three'],
  myObject: { myProp: 'My Prop' },
};

const invalidProps = {
  myString: 100,
  myNumber: 'My String',
  myBool: () => 'My Reaturn Value',
  myFunc: true,
  myArray: { myProp: 'My Prop' },
  myObject: ['One', 'Two', 'Three']
};

function render(props) {
  ReactDOM.render(
    <MyComponent {...props} />,
    document.getElementById('root'),
  );
}

render(validProps);
render(invalidProps);
