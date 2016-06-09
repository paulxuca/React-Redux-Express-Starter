import React 						 from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import App 							 from '../example_feature/containers/ExampleApp';
import { browserHistory } 			 from 'react-router';

export default () =>{
	return(
		  <Router history={browserHistory}>
      		<Route path="/" component={App}>
      		</Route>
   		  </Router>
		);
};