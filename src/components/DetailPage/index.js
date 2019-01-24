import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class DetailPage extends Component {
    state = {}
    render() {
        const { character } = this.props;
        if (!character){
            return <p>Loading...</p>
        } else{
        return (
            <div>
                <h1>{character.name}</h1>
                <img src={character.image} alt={character.name} />
                <Link to="/">
                Go back
                </Link>
            </div>
        );}
    }
}

export default DetailPage;