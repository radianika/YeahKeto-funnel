import React, { PureComponent } from 'react';
import { CommonFooter } from 'react/components/common/desktop';
import 'styles/global-style.scss';

class RootShell extends PureComponent {
  constructor(props) {
    super(props);
    this.internalData = {};
  }
  render() {
    return (
      <React.Fragment>
        {this.props.children}
        <CommonFooter />
      </React.Fragment>
    );
  }
}

export { RootShell };
