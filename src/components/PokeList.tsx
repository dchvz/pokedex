import {FlatList, SafeAreaView} from 'react-native';
import React from 'react';
import PokeCard from './PokeCard';
import pokemonList from '../data/pokemon.json';

const PokeList = () => {
  return (
    <SafeAreaView>
      <FlatList
        data={pokemonList}
        renderItem={({item}) => (
          <PokeCard
            name={item.name}
            imgUrl={item.sprites.front_default}
            types={['poison']}
          />
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default PokeList;
