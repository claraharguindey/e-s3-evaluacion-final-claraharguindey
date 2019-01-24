import React, { Component } from 'react';

class Filter extends Component {
  render() {
    return (
      <label htmlFor="query">
        <input
          id="query"
          type="text"
          onKeyUp={this.props.getUserSearch}
          placeholder="Ex: Harry Potter"
        />
      </label>);
  }
}

export default Filter;