import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from "prop-types"; 

class CharacterCard extends Component {
  render() {
    const { id, name, image, house } = this.props.character;
    
    return (
      <React.Fragment>
        <li>
        <Link to={`/character/${id}`}>
          <h2>{name}</h2>
          <img src={image} alt={name} />
          <div>{house}</div>
        </Link>
        </li>
      </React.Fragment>);
  }
}

CharacterCard.propTypes = {
  character: PropTypes.object.isRequired
}

export default CharacterCard;