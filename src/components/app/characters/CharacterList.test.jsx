import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import CharacterList from './CharacterList';
import { getApi } from '../../../services/api';
import { MemoryRouter } from 'react-router-dom';

jest.mock('../../../services/api.js');

describe('CharacterList component', () => {
  it('renders CharacterList after loading...', async () => {
    getApi.mockResolvedValue([
      {
        name: 'Absalom',
        gender: 'Male',
        occupation: 'Cult Leader',
        image: 'www.x-files-image.com',
        description: 'Cult Leader'
      }
    ]);

    render(<MemoryRouter><CharacterList /></MemoryRouter>);

    screen.getByText('Loading...');

    const characterList = await screen.findByTestId('characters');

    return waitFor(() => {
      expect(characterList).not.toBeEmptyDOMElement();
    });
  });
});
