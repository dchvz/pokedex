import React from 'react';
import {StyleSheet, TextStyle, View, ViewStyle} from 'react-native';
import BoldText from '../Text/BoldText';
import PokeType from '../PokeType';
import {upperCaseFirstLetter} from '../../helpers/pokemonListHelper';
import {PokemonType} from '../../types/types';

type Props = {
  name: string;
  types: PokemonType[];
};

const PokemonMetadata = ({name, types}: Props) => {
  return (
    <View style={styles.container}>
      <BoldText text={upperCaseFirstLetter(name)} textStyle={styles.name} />
      <View style={styles.types}>
        {types.map(type => (
          <PokeType key={`${name}-${type}`} type={type} />
        ))}
      </View>
    </View>
  );
};

interface IStyles {
  container: ViewStyle;
  types: ViewStyle;
  name: TextStyle;
}

const styles = StyleSheet.create<IStyles>({
  container: {width: '45%'},
  name: {
    fontSize: 14,
  },
  types: {
    flexDirection: 'column',
    marginVertical: 10,
  },
});

export default PokemonMetadata;
