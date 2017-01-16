// React Stuff
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

// Custom Modules
import App from './App';
import SingleMovie from './SingleMovie.js';
import Home from './Home.js';
import SearchResults from './SearchResults.js';

// Custom CSS
import './index.css';

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home} />
			<Route path="movie/:id" component={SingleMovie} />
			<Route path="search/:movieToSearchFor" component={SearchResults} />
		</Route>
	</Router>,
	document.getElementById('root')
);
