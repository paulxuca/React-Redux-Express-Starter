import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer 								 from '../reducers';
import createLogger 							 from 'redux-logger';
import thunk 									 from 'redux-thunk';
import { syncHistory } 							 from 'react-router-redux';
import { browserHistory } 						 from 'react-router';

const reduxRouterMiddleware = syncHistory(browserHistory);
const logger = createLogger();
const finalStore = compose(
    applyMiddleware(logger, thunk, reduxRouterMiddleware)
)(createStore);

module.exports = function configureStore(initialState) {
    const store = finalStore(rootReducer, initialState);
    reduxRouterMiddleware.listenForReplays(store);
    if (module.hot) {
        module.hot.accept('../reducers', () =>
            store.replaceReducer(require('../reducers'))
        );
    }
    return store;
}
