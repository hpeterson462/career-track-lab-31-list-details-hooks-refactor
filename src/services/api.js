export const getApi = () => {
  return fetch('https://xfiles-api.herokuapp.com/api/v1/characters')
    .then(res => res.json())
    .then(json => json.docs);
};

export const getApiById = (characterId) => {
  return fetch(`https://xfiles-api.herokuapp.com/api/v1/characters/${characterId}`)
    .then(res => res.json())
    .then(json => json.docs);
};
