import React, { Component } from 'react';
import { Link } from 'react-router';
import Constants from './Constants.js'
import $ from 'jquery';
import Config from './Config.js'

class SearchResults extends Component{
	constructor(props) {
		super(props);
		this.state = {
			searchArray: []
		}
	}

	componentDidMount() {
		var searchPosterPathsArray = [];
		var url = Constants.baseUrl + 'search/movie?' + Config.api_key + '&language=en-US&page=1&include_adult=false&query=' + this.props.params.movieToSearchFor;
		$.getJSON(url, (searchMovieData) =>{
			this.setState({
			searchArray: searchMovieData.results
			})
		})
	}

	render(){
        return(
            <div>        
                {this.state.searchArray.map((poster, index) => {
                    var imageUrl = "http://image.tmdb.org/t/p/w300" + poster.poster_path
                return(
                    <div key={index}>
                        <img src={imageUrl} />
                    </div>
                    )
                })}
            </div>
        )
    }
}

export default SearchResults;