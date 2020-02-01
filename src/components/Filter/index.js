import React, { Component } from 'react';
import PropTypes from "prop-types";
import './Filter.scss';

class Filter extends Component {
  render() {
    return (
      <React.Fragment>
      <label htmlFor="query"> 
        <input
          className="App__header--input"
          id="query"
          type="text"
          onChange={this.props.getUserSearch}
          placeholder="insert a character"
          value={this.props.query}
        />
      </label>
      
      <label htmlFor="query">
      <input
        className="App__header--input"
        id="query"
        type="text"
        onChange={this.props.getUserSearchHouses}
        placeholder="insert a house"
        value={this.props.queryHouses}
      />
    </label>
    </React.Fragment>
      );
  }
}

Filter.propTypes = {
  getUserSearch: PropTypes.func.isRequired
}
export default Filter;