import React from 'react';
import PropTypes from 'prop-types';

const CharacterItem = ({ name, image, description }) => (
  <figure>
    <img src={image} alt={name} />
    <figcaption>
      {name}
    </figcaption>
  </figure>
);

CharacterItem.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default CharacterItem;
