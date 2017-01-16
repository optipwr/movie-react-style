// Dependencies/Components
import React, { Component } from 'react';
import $ from 'jquery';

// Custom Components/Modules

import Poster from './Poster.js'
import Constants from './Constants.js';
import Config from './Config.js';
import './App.css';
import DiscoverButton from './DiscoverButton.js';

class Home extends Component{
	constructor(props) {
		super(props);
		this.handleCategoryChange = this.handleCategoryChange.bind(this);
		this.state = {
			moviePosters: []
		}
	}

    componentDidMount() {
        var url = Constants.baseUrl + Constants.nowPlayingEP + Config.api_key;
        $.getJSON(url, (movieData) =>{
            this.setState({
                moviePosters: movieData.results
            })
        })
    }
    // Custom function to update Home's state var, FROM THE CHILD BUTTON
    handleCategoryChange(categoryApiUrl){
    	var url = Constants.baseUrl + categoryApiUrl + Config.api_key;
    	$.getJSON(url, (categoryData) =>{
    		this.setState({
    			moviePosters: categoryData.results
    		})
    	});
    }

	render(){
		var postersArray = [];
        this.state.moviePosters.map((poster, index) =>{
            postersArray.push(<Poster poster={poster} key={index} />)
        });
        // Load up the postersArray with Poster Components

        // Build buttons with DiscoverButton Component
        var discoverButtons = [];
        Constants.discoverLinks.map((category, index) =>{
        	discoverButtons.push(
        		<DiscoverButton buttonLink={category.link} buttonText={category.buttonText} functionFromParent={this.handleCategoryChange} key={index} />
        	)
        })
		return(
			<div>
				<h1>
					This is the home page!
				</h1>
				<div className="col-sm-12">
					{discoverButtons}
				</div>
				{postersArray}
			</div>
		)
	}
}

export default Home;