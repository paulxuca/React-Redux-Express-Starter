import { EXAMPLE_ACTION } from './ExampleConstants';

const initialState = {
}

export default function example(state = initialState, action) {
    switch (action.type) {
        case EXAMPLE_ACTION:
            console.log('Hello! Example Action triggered.');
            return {
            	...state
            }
        default:
            return state
    }
}
