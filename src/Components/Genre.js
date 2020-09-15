import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './CSS/Genre.css';

class Genre extends Component {
	constructor(props) {
		super(props);
		this.state = {
			genre: '',
			bassists: [],
		};
	}
	componentDidMount() {
		// make a request for genre details
		// for each bassist, make a request for bassist name, and id
		fetch(
			`https://floating-chamber-81210.herokuapp.com/genres/${this.props.match.params.genre}`
		)
			.then((res) => res.json())
			.then((json) => {
                this.setState({ genre: json })
				let bassists = [];
				for (let i = 0; i < json.bassists.length; i++) {
					fetch(json.bassists[i])
						.then((res) => res.json())
						.then((json) => {
                            bassists.push(json);
                            this.setState({ bassists })
						})
						.catch((err) => {
							console.error(err);
						});
				}
                
            })
			.catch((err) => {
				console.error(err);
			});
	}
	render() {
		return (
			<div>
				<h1 className='bassist-genre'>{this.state.genre?.genre}</h1>
				{this.state.bassists.map((bassist) => {
					return (
						<Link key={bassist.id} to={`/bassists/${bassist.id}`} className='bassist-link'>
							<h2 className='bassist-name'>{bassist.name}</h2>
						</Link>
					);
				})}
			</div>
		);
	}
}

export default Genre;
