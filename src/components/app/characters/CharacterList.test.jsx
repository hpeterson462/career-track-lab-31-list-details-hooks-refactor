import React from 'react';
import { render, cleanup } from '@testing-library/react';
import CharacterDetail from './CharacterDetail';

describe('CharacterDetail component', () => {
  afterEach(() => cleanup());
  it('renders CharacterDetail', () => {
    const { asFragment } = render(<CharacterDetail
      name="Absalom"
      gender="Male"
      occupation="Cult Leader"
      image="https://vignette.wikia.nocookie.net/x-files/images/3/31/Absalom.jpg/revision/latest/scale-to-width-down/310?cb=20070708201919"
      description="Absalom was the leader of a cult..."
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
