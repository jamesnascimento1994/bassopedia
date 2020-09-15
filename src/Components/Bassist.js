import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import './CSS/Bassist.css'
class Bassist extends Component {
    constructor(props) {
        super(props);

        this.state = {
            bassist: {
                name: '',
                image_url: '',
                artists_played_with: '',
                notable_basses: '',
                type_of_basses_played: '',
            },
        }
    }
    componentDidMount() {
        fetch(`https://floating-chamber-81210.herokuapp.com/bassists/${this.props.match.params.bassist}`)
					.then((res) => res.json())
					.then((json) => {
						this.setState({ bassist: json });
					});
    }
    render() {
        return (
					<div className='bassist'>
						<Card style={{ width: '18rem' }} className='card' >
							<Card.Title className='title'>
								{this.state.bassist.name}
							</Card.Title>
							<Card.Body>
								<Card.Img
									variant='middle'
									src={this.state.bassist.image_url}
                                    alt=''
                                    className='img'
								/>
								<Card.Text className='text'>
									Artists Played With: {this.state.bassist.artists_played_with}
								</Card.Text>
								<Card.Text className='text'>
									Notable Basses: {this.state.bassist.notable_basses}
								</Card.Text>
								<Card.Text className='text'>
									Type of Basses Played:{' '}
									{this.state.bassist.type_of_basses_played}
								</Card.Text>
							</Card.Body>
						</Card>
					</div>
				);
    }
}

export default Bassist;