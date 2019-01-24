import React from 'react';
import { PermissionConsumer } from './PermissionContext';

function First() {
  return (
    <PermissionConsumer name="third">
      <div>
        <button type="button">third</button>
      </div>
    </PermissionConsumer>
  );
}

export default First;
