import React from 'react';
import { render, cleanup, waitFor } from '@testing-library/react';
import CharacterList from './CharacterList';
import { getApi } from '../../../services/api';

jest.mock('../../../services/api.js');

describe('CharacterList component', () => {
  afterEach(() => cleanup());
  it('renders CharacterList after loading...', async () => {
    getApi.mockResolvedValue([
      {
        id: 1,
        name: 'Absalom',
        gender: 'Male',
        occupation: 'Cult Leader',
        image: 'www.x-files-image.com',
        description: 'Cult Leader'
      }
    ]);

    render(<CharacterList />);

    screen.getByTest('Loading...');

    const characterList = await screen.findById('characterList');

    return waitFor(() => {
      expect(characterList).not.toBeEmptyDOMElement();
    });
  });
});
