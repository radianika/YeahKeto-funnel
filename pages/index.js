import React from 'react';
import RootShell from 'react/components/RootShell';
import { withReduxSaga } from 'redux/store';

class Index extends React.PureComponent {
  render() {
    return (
      <RootShell>
        <h1>StarLight Group</h1>
      </RootShell>
    );
  }
}

export default withReduxSaga(Index);
