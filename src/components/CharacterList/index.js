import React, { Component } from 'react';
import CharacterCard from '../CharacterCard';

class CharacterList extends Component {
  render() {
    return (<ul>
      {this.props.filteredResults.map(character => {
        return (
          <CharacterCard character={character} key={character.id} />)
      })}
    </ul>);
  }
}

export default CharacterList;