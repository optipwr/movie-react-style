import React, { Component } from 'react';
import Router, { Link } from 'react-router'

class BootstrapNavBar extends Component{

	constructor(props) {
		super(props);
		this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
	}

	handleSearchSubmit(event){
		event.preventDefault();
		var inputBox = event.target[0].value;
		// this.props.router.push('/search/' + inputBox);
		this.props.functionFromParent(inputBox);
	}

	render(){
		return(
			<nav className="navbar navbar-default">
				<div className="container-fluid">
					<div className="navbar-header">
						<a className="navbar-brand" href="#">WebSiteName</a>
					</div>
					<ul className="nav navbar-nav">
						<li className="active">
							<Link to="/">Home</Link>
						</li>
						<li><Link to="/NowPlaying">Now Playing</Link></li>
						<li><Link to="/TopRated">Top Rated</Link></li>
						<li>
							<form onSubmit={this.handleSearchSubmit}>
								<input type="text" placeholder="Search..."/>
								<button type="submit" className="btn btn-success">
									Search for Movie
								</button>
							</form>
						</li>
					</ul>
				</div>
			</nav>
		)
	}
}

export default BootstrapNavBar;