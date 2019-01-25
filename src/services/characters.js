
const URI = "http://hp-api.herokuapp.com/api/characters";

const getCharactersFromAPI = () =>
  fetch(URI)
    .then(response => response.json());
    
export {
  getCharactersFromAPI,
};