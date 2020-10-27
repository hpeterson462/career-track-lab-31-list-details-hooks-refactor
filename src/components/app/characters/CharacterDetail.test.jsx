import React from 'react';
import { render, cleanup } from '@testing-library/react';
import CharacterDetail from './CharacterDetail';

describe('CharacterDetail component', () => {
  it('renders CharacterDetail after loading...', () => {
    const { asFragment } = render(<CharacterDetail
      name="Absalom"
      gender="Male"
      occupation="Cult Leader"
      image="www.x-files-image.com"
      description="Cult Lader"
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
