import React, { Component } from 'react';
import { Link } from 'react-router';
import Constants from './Constants.js'

class Poster extends Component{
	render(){
		var imagePath = Constants.imageBase + this.props.poster.poster_path;
		var posterLink = '/movie/' + this.props.poster.id;
		return(
			<div className="col-sm-6 col-md-3 movie-poster">
				<Link to={posterLink} ><img src={imagePath} alt="a" /></Link>
			</div>
		)
	}
}

export default Poster;