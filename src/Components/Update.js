import React, { Component } from 'react';
import { Redirect } from 'react-router';

class Update extends Component {
	constructor() {
		super();
		this.state = {
			id: '',
			redirect: false,
		};
	}
	componentDidMount() {
		this.setState({ id: this.props.match.params.id });
	}

	onChange = (event) => {
		this.setState({ [event.target.id]: event.target.value });
	};
	handleSubmit = (event) => {
		event.preventDefault();
		this.props.updateGenre(this.state);
	};
	clearForm = () => {
		this.setState({ id: '' });
    };
	render() {
        if (this.state.redirect) {
            return <Redirect to='/'></Redirect>
        }
		return (
			<div className='update'>
				<form className='updateForm'>
					<label htmlFor='genres'>Genre:</label>
					<select id='genres' name='genres'>
						<option value='genres'>{this.state.genres}</option>
					</select>
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

export default Update;