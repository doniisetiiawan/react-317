import React, { Fragment } from 'react';

function WithoutFragments() {
  return (
    <Fragment>
      <h1>With Fragments</h1>
      <p>Don't have unused DOM element</p>
    </Fragment>
  );
}

export default WithoutFragments;
