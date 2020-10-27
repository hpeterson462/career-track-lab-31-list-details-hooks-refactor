import React from 'react';
import PropTypes from 'prop-types';
import { userCharacters } from '../../../hooks/character';
import CharacterDetail from './CharacterDetail';
import { Link } from 'react-router-dom';

const CharacterList = () => {
  const { loading, characters } = userCharacters();
  if (loading)
    return <h1>Loading...</h1>;

  const characterElements = characters.map(character => (
    <li key={character.name}>
      <Link to={`/characters/${character.name}`}>
        <CharacterDetail {...character} />
      </Link>
    </li>
  ));

  return (
    <ul data-testid="characters">
      {characterElements}
    </ul>
  );
};

CharacterList.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default CharacterList;

