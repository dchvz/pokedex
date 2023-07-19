import React from 'react';
import fetchMock from 'jest-fetch-mock';
import '@testing-library/jest-native/extend-expect';
import {render, screen} from '@testing-library/react-native';
import PokedexScreen from '../src/screens/PokedexScreen';
import pokemonMockData from '../src/data/pokemon.json';
import {Pokemon} from '../src/types/pokemon';

describe('PokedexScreen', () => {
  const pokemonList = pokemonMockData as Pokemon[];
  const pokemonListMockResponse = {
    count: 1281,
    next: null,
    previous: null,
    results: [
      {
        name: 'snorlax',
        url: 'https://pokeapi.co/api/v2/pokemon/1/',
      },
    ],
  };

  fetchMock
    .once(JSON.stringify(pokemonListMockResponse))
    .once(JSON.stringify(pokemonList[0]));

  it('pokemon cards render after loading pokemon data', async () => {
    render(<PokedexScreen />);
    const card = await screen.findByTestId('snorlax-card');
    expect(card).toBeOnTheScreen();
  });
});
