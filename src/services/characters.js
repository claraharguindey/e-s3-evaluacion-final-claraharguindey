
const URI = "http://hp-api.herokuapp.com/api/characters";

const getCharacters = () =>
  fetch(URI)
    .then(response => response.json());
    
export {
  getCharacters,
};