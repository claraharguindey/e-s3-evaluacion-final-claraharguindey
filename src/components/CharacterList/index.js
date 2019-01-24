import React, { Component } from 'react';

class CharacterList extends Component {
  render() {
    return (<ul>
      {this.props.filteredResults.map(character => {
        return (
          <li key={character.id}>
            <h2>{character.name}</h2>
            <img src={character.image} alt={character.name} />
            <div>{character.house}</div>
          </li>
        );
      })}
    </ul>);
  }
}

export default CharacterList;