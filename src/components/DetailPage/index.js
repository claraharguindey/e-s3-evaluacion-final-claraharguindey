import React, { Component } from "react";
import './DetailPage.scss';
import PropTypes from "prop-types";

class DetailPage extends Component {
    characterState() {
        const { character } = this.props;
        
        if (!character) {
            return <p>Loading...</p>;
        } else {
            return (character.alive
            ? (<span>vivo</span>) 
            : (<span role="img" aria-label="die">💀</span>));
        }
    }

    render() {
        const { character } = this.props;

        if (!character) {
            return <p>Loading...</p>;
        } else {
            return (
                <div className="detail__wrapper">
                    <h1 className="detail__title">{character.name}</h1>
                    <img 
                        className="detail__img"
                        src={character.image}
                        alt={character.name} />
                    <div className="detail__data--wrapper">
                        <div>Casa: {character.house}</div>
                        <div>Nacimiento: {character.yearOfBirth}</div>
                        <div>Patronus: {character.patronus}</div>
                        <div>Estado: {this.characterState()}</div>
                    </div>
                </div>
            );
        }
    }
}

DetailPage.propTypes = {
    character: PropTypes.object
};

export default DetailPage;
