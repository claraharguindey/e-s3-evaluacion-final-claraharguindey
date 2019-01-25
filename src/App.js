import React, { Component } from "react";
import { Switch, Route } from 'react-router-dom';
import { getCharactersFromAPI } from "./services/characters";
import Filter from './components/Filter';
import CharacterList from './components/CharacterList';
import DetailPage from './components/DetailPage/index';
import "./App.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: this.setCharacters(),
      query: "",
      loading: true
    };
    this.getUserSearch = this.getUserSearch.bind(this);
    this.filterCharacters = this.filterCharacters.bind(this);
  }

  setCharacters() {
    const storedCharacters = localStorage.getItem('characters');
    if (!storedCharacters) {
      return []
    } else {
      return JSON.parse(storedCharacters);
    }
  }

  componentDidMount() {
    getCharactersFromAPI()
      .then(characters => {
        const charactersWithId = characters.map((character, id) => {
          return {
            ...character,
            id: id
          };
        });

        localStorage.setItem('characters', JSON.stringify(charactersWithId));

        this.setState({
          characters: charactersWithId,
          loading: false
        });
      });
  }

  getUserSearch(event) {
    const userQuery = event.target.value;
    this.setState({
      query: userQuery
    });
    this.filterCharacters();
  }

  filterCharacters() {
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
    const filteredResults = this.filterCharacters();
    const { loading } = this.state;

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
                  <Filter getUserSearch={this.getUserSearch} />)
              }}
            />
          </Switch>
        </header>
        <main>

          <Switch>
            <Route
              exact
              path="/"
              render={() => {
                return (
                  <CharacterList
                    filteredResults={filteredResults}
                    loading={loading}
                  />)
              }}
            />

            <Route
              path="/character/:id"
              render={(props) => {
                const currentCharacter = filteredResults
                  .find(character => character.id === parseInt(props.match.params.id))
                return (
                  <DetailPage character={currentCharacter} />)
              }}
            />

          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
