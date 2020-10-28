import { useEffect, useState } from 'react';
import { getApi } from '../services/api.js';
import { getApiByName } from '../services/api';

export const useCharacters = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getApi()
      .then(fetchedCharacters => setCharacters(fetchedCharacters))
      .finally(() => setLoading(false));
  }, []);

  return {
    loading,
    characters
  };
};

export const useCharacterByName = name => {
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    getApiByName(name)
      .then(fetchedCharacter => setCharacter(fetchedCharacter))
      .finally(() => setLoading(false));
  }, []);

  return {
    loading,
    character
  };
};
