import React from "react";
import ReactDOM from "react-dom";
import "./css/reset.css";
import "./css/collection.css";
import App from "./App";
import { Router, Route, browserHistory, IndexRoute } from "react-router";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import { collection } from "./reducers/movies";
import { detail } from "./reducers/detail";
import { Provider } from "react-redux";
import MovieDetails from './componentes/MovieDetails';
import Collection from './componentes/Collection';

const reducers = combineReducers({ collection, detail });
const store = createStore(reducers, applyMiddleware(thunkMiddleware));

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Collection} />
                <Route path="/movieDetails" component={MovieDetails} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById("root")
);
