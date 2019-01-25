import React, { Component } from 'react';
import CharacterCard from '../CharacterCard';
import PropTypes from "prop-types";

class CharacterList extends Component {
  render() {
    if (this.props.loading) {
      return <p>Loading...</p>
    }
    else {
      return (<ul>
        {this.props.filteredResults.map(character => {
          return (
            <CharacterCard character={character} key={character.id} />)
        })}
      </ul>)
    }
  }
}

CharacterList.propTypes = {
  filteredResults: PropTypes.array.isRequired
}
export default CharacterList;