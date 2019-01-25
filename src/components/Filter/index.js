import React, { Component } from 'react';
import PropTypes from "prop-types";
import './Filter.scss'
class Filter extends Component {
  render() {
    return (
      <label htmlFor="query">
        <input
          className="App__header--input"
          id="query"
          type="text"
          onKeyUp={this.props.getUserSearch}
          placeholder="Ex: Harry Potter"
        />
      </label>);
  }
}

Filter.propTypes = {
  getUserSearch: PropTypes.func.isRequired
}
export default Filter;