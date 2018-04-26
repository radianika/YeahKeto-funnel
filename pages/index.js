import React from 'react';
import { RootShell } from 'react/containers';
import { withReduxSaga } from 'redux/store';

class Index extends React.PureComponent {
  render() {
    return <RootShell />;
  }
}

export default withReduxSaga(Index);
