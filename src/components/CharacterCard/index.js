import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import './CharacterCard.scss';

class CharacterCard extends Component {
  render() {
    const { id, name, image, house } = this.props.character;

    return (
      <React.Fragment>
          <Link to={`/character/${id}`}>
            <li className="main__list--item">    
                <h2 className="list__item--title">{name}</h2>
                <img src={image} alt={name} className="list__item--img" />
                <div>{house || "X"}</div>
            </li>
          </Link>
      </React.Fragment>);
  }
}

CharacterCard.propTypes = {
  character: PropTypes.object.isRequired
}

export default CharacterCard;