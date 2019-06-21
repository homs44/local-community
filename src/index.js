import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history'
import { push } from 'connected-react-router'
import firebase from "firebase";
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { configureStore } from './module'
import * as authActions from './module/auth/actions'
import 'semantic-ui-css/semantic.min.css'
import { ConnectedRouter } from 'connected-react-router'

export const history = createBrowserHistory();

const store = configureStore(history);

var config = {
    apiKey: "AIzaSyAZY5lJYtQnbGUTd93s7uYUtWFcb2MrEr8",
    authDomain: "abcd-d4a7b.firebaseapp.com",
    databaseURL: "https://abcd-d4a7b.firebaseio.com",
    projectId: "abcd-d4a7b",
    storageBucket: "",
    messagingSenderId: "439976404381",
    appId: "1:439976404381:web:7679b825f3e66ed1"
};

firebase.initializeApp(config);


firebase.auth().onAuthStateChanged(function (user) {
    store.dispatch(authActions.updateUser(user))
    if(user){
        store.dispatch(push('/'));
    }else{
        store.dispatch(push('/sign-in'));
    }
});

/**
 * Provider에 store 연결을 해야
 * 하위에 있는 컴포넌트에서 state 값을 가져오거나
 * action을 dispatch할 수 있음.
 */
ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>
    , document.getElementById('root'));
