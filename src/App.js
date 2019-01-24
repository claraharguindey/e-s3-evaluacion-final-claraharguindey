import React, { Component } from 'react';
import { getCharacters } from './services/characters';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.allCharacters()
    this.state = {
      characters: [],
      query: ""
    }
    this.getUserSearch = this.getUserSearch.bind(this);
  }

  allCharacters() {
    getCharacters()
      .then(data => {
        const charactersWithId = data.map((character, id) => {
          return {
            ...character,
            id: id
          }
        })

        this.setState({
          characters: charactersWithId
        })
      })
  }
  
  getUserSearch(event) {
    const value = event.target.value;
    this.setState( {
      query:value
    })
  }
  


  render() {
    const { characters } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1>Harry Potter Characters</h1>
          <main>
          <label htmlFor="query">
          <input id="query" type="text" onChange={this.getUserSearch} placeholder="Ex: Harry Potter"/>  
          </label>
            <ul>
              {characters.map((character) => {
                return (
                  <li key={character.id}>
                    <h2>
                    {character.name}
                    </h2>
                    <img src={character.image} alt={character.name} />
                    <div>
                      {character.house}
                    </div>
                  </li>)
              })}
            </ul>
          </main>
        </header>
      </div>
    );
  }
}

export default App;
