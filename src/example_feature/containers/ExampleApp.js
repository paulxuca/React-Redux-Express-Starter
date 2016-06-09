//DEFAULT IMPORT STATEMENTS
import React, { Component, PropTypes } from 'react';

//REDUX IMPORT STATEMENTS
import { bindActionCreators } 		   from 'redux';
import { connect } 					   from 'react-redux';

//REDUX ACTION IMPORT STATEMENTS
import * as actions 				   from '../ExampleActions';

class App extends Component {
	render(){
		console.log(this.props);
		return(<div onClick={()=>{this.props.actions.exampleAction()}}>Hello!</div>);
	}
}

const mapStateToProps = (state) =>{
	return{
		example: state.ExampleReducer.get('myData')
	}
}

function mapDispatchToProps(dispatch){
	return{
		actions: bindActionCreators(actions, dispatch),
	}
}



export default connect(mapStateToProps, mapDispatchToProps)(App);