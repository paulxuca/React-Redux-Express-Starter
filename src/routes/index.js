import React 						 from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import App 							 from '../containers/App';
import { browserHistory } 			 from 'react-router';

export default () =>{
	return(
		  <Router history={browserHistory}>
      		<Route path="/" component={App}>
      		</Route>
   		  </Router>
		);
};