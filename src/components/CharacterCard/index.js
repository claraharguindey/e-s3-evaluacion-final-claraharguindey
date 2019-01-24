import React, { Component } from 'react';

class CharacterCard extends Component {
  render() {
    const { name, image, house } = this.props.character;
    return (
      <React.Fragment>
        <li>
          <h2>{name}</h2>
          <img src={image} alt={name} />
          <div>{house}</div>
        </li>
      </React.Fragment>);
  }
}

export default CharacterCard;