import React from 'react';
import PropTypes from 'prop-types';
import { useCharacters } from '../../../hooks/character';
import CharacterItem from './CharacterItem';
import { Link } from 'react-router-dom';

const CharacterList = () => {
  const { loading, characters } = useCharacters();
  if (loading)
    return <h1>Loading...</h1>;

  const characterElements = characters.map(character => (
    <li key={character.name}>
      <Link to={`/characters/${character.name}`}>
        <CharacterItem
          name={character.name}
          image={character.image}
        />
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
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}

export default CharacterList;

