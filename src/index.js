import React from "react";
import ReactDOM from "react-dom";
import "./css/reset.css";
import "./css/App.css";
import App from "./App";
import { Router, Route, browserHistory, IndexRoute } from "react-router";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import { collection } from "./reducers/movies";
import { detail } from "./reducers/detail";
import { error } from "./reducers/error";
import { favorite } from "./reducers/favorites";
import { Provider } from "react-redux";
import Erros from "./componentes/Erros";
import MovieDetails from './componentes/MovieDetails';
import Collection from './componentes/Collection';

const reducers = combineReducers({ collection, detail, error, favorite });
const store = createStore(reducers, applyMiddleware(thunkMiddleware));

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Collection} />
                <Route path="/movieDetails" component={MovieDetails} />
                <Route path="/erros" component={Erros} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById("root")
);
