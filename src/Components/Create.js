import React, { Component } from 'react';
import { Redirect } from 'react-router';
import Form from 'react-bootstrap/Form';

class Create extends Component {
	constructor() {
		super();
		this.state = {
			genre: '',
			name: '',
			image_url: '',
			artists_played_with: '',
			notable_basses: '',
			type_of_basses_played: '',
			redirect: false,
		};
	}

	

	onChange = (event) => {
		this.setState({ [event.target.id]: event.target.value });
		console.log('working');
	};
	handleSubmit = (event) => {
		console.log('it worked');
		event.preventDefault();
		this.props.createGenre(this.state);
		this.setState({ redirect: true });
	};
	clearForm = () => {
		this.setState({
			genre: '',
			name: '',
			image_url: '',
			artists_played_with: '',
			notable_basses: '',
			type_of_basses_played: '',
		});
	};

	render() {
		if (this.state.redirect) {
			return <Redirect to='/'></Redirect>;
		}
		return (
			<div className='create'>
				<form className='createForm'>
					<label htmlFor='genres'>Genre:</label>
				        <input
							onChange={this.onChange}
							id='genres'
							type='text'
							name='genres'></input>
					<label type='text' htmlFor='name'>
						Name:
					</label>
					<input onChange={this.onChange} type='text' id='name' name='name' />
					<label type='text' htmlFor='image'>
						Image Url:
					</label>
					<input onChange={this.onChange} type='text' id='image' name='image' />
					<label type='text' htmlFor='artists-played-with'>
						Artists Played With:
					</label>
					<input
						onChange={this.onChange}
						type='text'
						id='artists-played-with'
						name='artists-played-with'
					/>
					<label type='text' htmlFor='notable-basses'>
						Notable Basses:
					</label>
					<input
						onChange={this.onChange}
						type='text'
						id='notable-basses'
						name='notable-basses'
					/>
					<label type='text' htmlFor='type-of-basses-played'>
						Type of Basses Played:
					</label>
					<input
						onChange={this.onChange}
						type='text'
						id='type-of-basses-played'
						name='type-of-basses-played'
					/>
					<button
						onClick={this.handleSubmit}
						className='updateButton'
						variant='outline-success'>
						Submit
					</button>
				</form>
			</div>
		);
	}
}

export default Create;