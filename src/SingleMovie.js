import React, { Component } from 'react'
import $ from 'jquery';
import Constants from './Constants.js'

class SingleMovie extends Component{
	constructor(props) {
		super(props);
		this.state = {
			currentMovieData: [],
			budget: '',
			revenue: ''
		}
	}

	componentDidMount() {
		var currentMovieId = this.props.params.id;
		var url = 'https://api.themoviedb.org/3/movie/' + currentMovieId + '?api_key=fec8b5ab27b292a68294261bb21b04a5';
		$.getJSON(url, (movieApiResponse) =>{
			var revenue = "$" + movieApiResponse.revenue;
			var budget = "$" + movieApiResponse.budget;
			this.setState({
				currentMovieData: movieApiResponse,
				revenue: revenue,
				budget: budget
			})
		});
	}

	render(){
		var posterPath = 'http://image.tmdb.org/t/p/original' + this.state.currentMovieData.poster_path;
		return(
			<div className="col-sm-8">
				<a href={this.state.currentMovieData.homepage} target="_blank">
					<img src={posterPath} />
				</a>
			</div>
		)
	}
}

export default SingleMovie;