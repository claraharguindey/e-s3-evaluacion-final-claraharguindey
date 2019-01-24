import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";

class DetailPage extends Component {
    
    isAlive(){
        const { character } = this.props;
        return character.alive
        ? 'vivo'
        : "💀";
    }

    render() {
        const { character } = this.props;       
        if (!character){
            return <p>Loading...</p>
        } else{
        return (
            <div>
                <h1>{character.name}</h1>
                <img src={character.image} alt={character.name} />
                <div>Casa: {character.house}</div>
                <div>Nacimiento: {character.yearOfBirth}</div>
                <div>Patronus: {character.patronus}</div>
                <div>Estado: {this.isAlive()}</div>
                <Link to="/">
                Go back
                </Link>
            </div>
        );}
    }
}
DetailPage.propTypes = {
    character: PropTypes.object.isRequired
}

export default DetailPage;