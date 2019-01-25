import React, { Component } from 'react';
import CharacterCard from '../CharacterCard';
import PropTypes from "prop-types";
import './CharacterList.scss';

class CharacterList extends Component {

  render() {
    const { loading, filteredResults} = this.props;
    
    if (loading) {
      return <div className="loader">Loading...</div>
    }
    else {
      return (<ul className="main__list">
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