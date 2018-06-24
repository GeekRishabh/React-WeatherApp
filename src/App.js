import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import Home from './components/home';
import reducers from './redux/reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);

class App extends Component {
	render() {
		return (
			<div className="App">
				<Provider store={createStoreWithMiddleware(reducers)}>
					<Home />
				</Provider>
			</div>
		);
	}
}

export default App;
