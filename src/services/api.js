export const getApi = (page = 1) => {
  return fetch('https://xfiles-api.herokuapp.com/api/v1/characters')
    .then(res => res.json())
    .then(json => json.results);
};

export const getApiByName = (name) => {
  return fetch(`https://xfiles-api.herokuapp.com/api/v1/characters/${name}`)
    .then(res => res.json())
    .then(json => json.results);
};
