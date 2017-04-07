import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import firebaseApp from './firebase';
import reducer from './reducers';
import { logUser } from './actions';

const browserHistory = createBrowserHistory();
let store = createStore(reducer);

import App from './components/app';
import SignIn from './components/signin';
import SignUp from './components/signup';

firebaseApp.auth().onAuthStateChanged(user => {
    if(user) {
        const { email } = user;
        store.dispatch(logUser(email));
        browserHistory.push('/app');
    }
    else {
        browserHistory.replace('/signin');
    }
});

ReactDOM.render(
    <Provider store={store}>
        <Router path="/" history={browserHistory}>
            <div>
                <Route path="/app" component={App} />
                <Route path="/signin" component={SignIn} />
                <Route path="/signup" component={SignUp} />
            </div>
        </Router>
    </Provider>, document.getElementById('root')
);