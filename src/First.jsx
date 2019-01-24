import React from 'react';
import { PermissionConsumer } from './PermissionContext';

function First() {
  return (
    <PermissionConsumer name="first">
      <div>
        <button type="button">first</button>
      </div>
    </PermissionConsumer>
  );
}

export default First;
