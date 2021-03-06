import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {
	createStore
} from 'redux'



import allReducer from './components/reducers'

import {
	Provider,
	useSelector
} from 'react-redux'



import * as serviceWorker from './serviceWorker';


//创建store
const store = createStore(
	allReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

);


ReactDOM.render(
	<Provider store={ store }>
	<App />
	</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();