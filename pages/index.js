import React from 'react';
import { RootShell, MainPageContainer } from 'react/containers';
import { withReduxSaga } from 'redux/store';

class Index extends React.PureComponent {
	render() {
		return (
			<RootShell>
				<MainPageContainer />
			</RootShell>
		);
	}
}

export default withReduxSaga(Index);
