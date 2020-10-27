import React from 'react'
import { useState } from 'react';
import CharacterList from '../components/app/characters/CharacterList';

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

