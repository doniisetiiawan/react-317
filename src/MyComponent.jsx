import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = ({
  myString,
  myNumber,
  myBool,
  myFunc,
  myArray,
  myObject,
}) => (
  <section>
    <p>{myString}</p>
    <p>{myNumber}</p>

    <p>
      <input type="checkbox" defaultChecked={myBool} />
    </p>

    <p>{myFunc()}</p>

    <ul>
      {myArray.map(i => <li key={i}>{i}</li>)}
    </ul>

    <p>{myObject.myProp}</p>
  </section>
);

MyComponent.propTypes = {
  myArray: PropTypes.array,
  myBool: PropTypes.bool,
  myFunc: PropTypes.func,
  myNumber: PropTypes.number,
  myObject: PropTypes.object,
  myString: PropTypes.string,
};

MyComponent.defaultProps = {
  myArray: ['One'],
  myBool: false,
  myFunc: () => 'func',
  myNumber: 10,
  myObject: { myProp: 'Prop' },
  myString: 'string',
};

export default MyComponent;
