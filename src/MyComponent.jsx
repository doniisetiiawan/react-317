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
  myArray: PropTypes.array.isRequired,
  myBool: PropTypes.bool.isRequired,
  myFunc: PropTypes.func.isRequired,
  myNumber: PropTypes.number.isRequired,
  myObject: PropTypes.object.isRequired,
  myString: PropTypes.string.isRequired,
};

export default MyComponent;
