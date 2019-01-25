import React, { Component } from 'react';
import CharacterCard from '../CharacterCard';
import PropTypes from "prop-types";

class CharacterList extends Component {

  render() {
    const { loading, filteredResults} = this.props;
    
    if (loading) {
      return <p>Loading...</p>
    }
    else {
      return (<ul>
        {filteredResults.map(character => {
          return (
            <CharacterCard character={character} key={character.id} />)
        })}
      </ul>)
    }
  }
}

CharacterList.propTypes = {
  loading: PropTypes.bool.isRequired,
  filteredResults: PropTypes.array.isRequired
}
export default CharacterList;