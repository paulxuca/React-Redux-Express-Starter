import { EXAMPLE_ACTION } from './ExampleConstants';
import { fromJS } from 'immutable';

const initialState = fromJS({
    myData: 0
});

export default function example(state = initialState, action) {
    switch (action.type) {
        case EXAMPLE_ACTION:
            return state.set('myData', state.get('myData') + 1);
        default:
            return state
    }
}
