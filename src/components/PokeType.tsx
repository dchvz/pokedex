import React from 'react';
import {StyleSheet, Text, TextStyle, View, ViewStyle} from 'react-native';
import {PokemonType} from '../types/types';
import {getColorByType} from '../helpers/pokemonListHelper';
import Card from './Card';

type Props = {
  type: PokemonType;
};

const PokeType = ({type}: Props) => {
  return (
    <Card
      viewStyle={[
        {backgroundColor: getColorByType(type, true)},
        styles.container,
      ]}>
      <Text style={styles.type}>{type}</Text>
    </Card>
  );
};

interface IStyles {
  container: ViewStyle;
  type: TextStyle;
}

const styles = StyleSheet.create<IStyles>({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 4,
    padding: 2,
    width: 60,
  },
  type: {
    color: 'white',
    fontSize: 10,
    fontWeight: '500',
  },
});

export default PokeType;
