export const getApi = async (page = 1) => {
  const res = await fetch(`https://xfiles-api.herokuapp.com/api/v1/characters?perPage=10&page=${page}`);
  const json = await res.json();

  if (!res.ok) throw 'Unable to find';

  return json.results.map(character => ({
    name: character.name,
    image: character.image
  }));
};

export const getApiByName = async (name) => {
  const res = await fetch(`https://xfiles-api.herokuapp.com/api/v1/characters/${name}`)
  const json = await res.json();

  if (!res.ok) throw 'Unable to find';

  return {
    name: json.name,
    gender: json.gender,
    occupation: json.occupation,
    image: json.image,
    description: json.description
  };
};
