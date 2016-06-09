import {combineReducers} from 'redux';
import ExampleReducer 	 from './example_feature/ExampleReducer';
import {routeReducer} 	 from 'react-router-redux';

const intialState = (state = true, action)=>{
	return state;
}


const rootReducer = combineReducers({
	intialState,
	ExampleReducer,
	routing: routeReducer
});

export default rootReducer;