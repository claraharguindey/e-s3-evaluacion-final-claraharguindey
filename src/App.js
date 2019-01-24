import React, { Component } from "react";
import { getCharacters } from "./services/characters";
import Filter from './components/Filter';
import CharacterList from './components/CharacterList';
import { Switch, Route } from 'react-router-dom';
import DetailPage from './components/DetailPage/index';
import "./App.scss";


class App extends Component {
  constructor(props) {
    super(props);
    this.allCharacters();
    this.state = {
      characters: [],
      query: "",
      filter: "",
      loading: true
    };

    this.getUserSearch = this.getUserSearch.bind(this);
    this.filter = this.filter.bind(this);
  }

  allCharacters() {
    getCharacters().then(data => {
      const charactersWithId = data.map((character, id) => {
        return {
          ...character,
          id: id
        };
      });

      this.setState({
        characters: charactersWithId
      });
    });
  }

  getUserSearch(event) {
    const value = event.target.value;
    this.setState({
      query: value
    });
    this.filter();
  }

  filter() {
    const { characters, query } = this.state;
    const filteredCharacters = characters.filter(character => {
      const characterName = character.name;
      return characterName.toLowerCase().includes(query.toLowerCase())
        ? true
        : false;
    });
    return filteredCharacters;
  }

  render() {
    const filteredResults = this.filter();
    return (
      <div className="App">
        <header className="App-header">
          <h1>Harry Potter Characters</h1>
          <Switch>
            <Route
              exact
              path="/"
              render={() => {
                return (
                  <Filter
                    getUserSearch={this.getUserSearch}
                  />)
              }} />
          </Switch>
        </header>
        <main>
          <Switch>
            <Route
              exact
              path="/"
              render={() => {
                return (<CharacterList
                  filteredResults={filteredResults}
                />)
              }} />

            <Route
              path="/character/:id"
              render={(props) => {
                const currentCharacter = filteredResults
                  .find(character => character.id === parseInt(props.match.params.id))
                return (
                  <DetailPage
                    character={currentCharacter} />)
              }} />
            );
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
