import React from 'react';
import { PermissionConsumer } from './PermissionContext';

function First() {
  return (
    <PermissionConsumer name="second">
      <div>
        <button type="button">second</button>
      </div>
    </PermissionConsumer>
  );
}

export default First;
