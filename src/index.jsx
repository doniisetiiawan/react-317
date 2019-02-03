import React from 'react';
import ReactDOM from 'react-dom';

import { connect, getState, setState } from './store';
import MyInput from './MyInput';
import MyList from './MyList';

const ConnectedInput = connect(MyInput);
const ConnectedList = connect(MyList);

setState(
  getState().merge({
    filterValue: '',
    placeholder: 'search...',
    items: ['First', 'Second', 'Third', 'Fourth'],
  }),
);

ReactDOM.render(
  <section>
    <ConnectedInput />
    <ConnectedList />
  </section>,
  document.getElementById('root'),
);
