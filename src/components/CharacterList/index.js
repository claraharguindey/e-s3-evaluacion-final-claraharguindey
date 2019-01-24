import React, { Component } from 'react';
import CharacterCard from '../CharacterCard';
import PropTypes from "prop-types";

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

CharacterList.propTypes = {
  filteredResults: PropTypes.array.isRequired
}
export default CharacterList;