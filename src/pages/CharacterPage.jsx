import React from 'react'
import PropTypes from 'prop-types'

const CharacterPage = () => {
  const [page, setPage] = useState(1);

  return (
    <>
      <button
        onClick={() => setPage(page => page - 1)}
        disable={page <= 1}
      >
        &lt;
      </button>
      <button
        onClick={() => setPage(page => page + 1)}
      //disable={page <= }
      >
        &gt;
      </button>
      <CharacterList page={page} />
    </>
  );
};

export default CharacterPage;

