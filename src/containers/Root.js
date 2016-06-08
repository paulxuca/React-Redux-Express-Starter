import React, { Component } 	from 'react';
import { Provider } 			from 'react-redux';
import Routes 					from '../routes'

class Root extends Component{
	render(){
		const {store} = this.props;
		return(
			<Provider store={store}>
				<div>
					<Routes/>
				</div>
			</Provider>
			);
	}
}

module.exports = {
	Root
}