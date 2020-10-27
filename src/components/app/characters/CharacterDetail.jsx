import React from 'react';
import PropTypes from 'prop-types';

const CharacterDetail = ({ name, gender, occupation, image, description }) => (
  <>
    <section>
      <p>Name{name}</p>
      <p>Gender{gender}</p>
      <p>Occupation{occupation}</p>
      <p>Image{image}</p>
      <p>Description{description}</p>
    </section>
  </>
)

CharacterDetail.propTypes = {
  name: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default CharacterDetail;
