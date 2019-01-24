import React from 'react';
import PropTypes from 'prop-types';

function MyList(props) {
  const { items } = props;
  return (
    <ul>
      {items.map(i => <li key={i}>{i}</li>)}
    </ul>
  );
}

MyList.propTypes = {
  items: PropTypes.array,
};

MyList.defaultProps = {
  items: [],
};

export default MyList;
