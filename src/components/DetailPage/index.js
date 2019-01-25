import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";

class DetailPage extends Component {
    
    characterState(){
        
        const { character } = this.props;
        if (!character){
            return <p>Loading...</p>
        } else {
            return character.alive
            ? 'vivo'
            : "💀";
        }
    }

    render() {
        const { name, image, house, yearOfBirth, patronus } = this.props.character;       
        
        if(!this.props.character){
            return <p>Loading...</p>
        } else {
        return (
            <div>
                <Link to="/">
                Go back
                </Link>
                <h1>{name}</h1>
                <img src={image} alt={name} />
                <div>Casa: {house}</div>
                <div>Nacimiento: {yearOfBirth}</div>
                <div>Patronus: {patronus}</div>
                <div>Estado: {this.characterState()}</div>
            </div>
        );}}
    }

DetailPage.propTypes = {
    character: PropTypes.object.isRequired
}

export default DetailPage;