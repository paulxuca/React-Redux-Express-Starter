import React 			  from 'react';
import ReactDOM 		  from 'react-dom';
import { configureStore } from './store/configStore';
import { Root } 		  from './containers/Root';

const store = configureStore();

ReactDOM.render( <Root store = {store}/>,
    document.getElementById('root')
);
