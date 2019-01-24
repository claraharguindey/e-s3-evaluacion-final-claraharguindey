import React, { Component } from 'react';
import { getCharacters } from './services/characters';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.allCharacters()
    this.state = {
      characters: []
    }
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

  render() {
    const { characters } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1>Harry Potter Characters</h1>
          <main>
            <ul>
              {characters.map((character) => {
                return (
                  <li>
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
