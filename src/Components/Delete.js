import React, { Component } from 'react';
import { redirect } from 'react-router';

let bassistUrl = `https://floating-chamber-81210.herokuapp.com/`;

class Delete extends Component {
    constructor() {
        super();
        this.state = {
            genres: {},
            redirect: false,
        }
    }
    deleteGenre() {
        fetch(`${bassistUrl}/bassists/${this.props.match.params.id}`, {
            method: 'DELETE',
        }).then(() => {
            fetch(`${bassistUrl}/bassists`)
                .then((res) => res.json())
                .then((res) => {
                    this.setState({ genres: res, redirect: true });
                });
        });
    }
    render() {
        if (this.state.redirect) {
            return <Redirect to='/'></Redirect>
        }
        return (
            <div>
            <button className='btn' onClick={(event) => {
                this.deleteGenre(event);
            }}>Delete</button>
            </div>
        );
    }
}

export default Delete;