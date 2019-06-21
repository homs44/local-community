import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { connectRouter, routerMiddleware } from 'connected-react-router'
import penderMiddleware, { penderReducer } from 'redux-pender'
import thunk from 'redux-thunk'
import authReducer from './auth/reducer'

export function configureStore(history) {
    const middleware = applyMiddleware(
        routerMiddleware(history),
        thunk,
        penderMiddleware()
    );

    const composed = window.__REDUX_DEVTOOLS_EXTENSION__ ?
        compose(
            middleware,
            window.__REDUX_DEVTOOLS_EXTENSION__()
        ) :
        middleware;

    // createStore에 첫번 째 인자는 리듀서, 두번 째 인자는 미들웨어
    return createStore(
        combineReducers({
            auth: authReducer,
            router: connectRouter(history),
            pender: penderReducer
        }),
        composed
    )
}