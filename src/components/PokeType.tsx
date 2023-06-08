import React from 'react';
import {StyleSheet, Text, TextStyle, ViewStyle} from 'react-native';
import {PokemonType} from '../types/types';
import {getColorByType} from '../helpers/PokemonListHelper';
import Card from './Card';

type Props = {
  type: PokemonType;
};

const PokeType = ({type}: Props) => {
  return (
    <Card
      viewStyle={[styles.container, {backgroundColor: getColorByType(type)}]}>
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
    borderColor: 'white',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 2,
    marginHorizontal: 2,
  },
  type: {
    color: 'white',
    fontWeight: '500',
  },
});

export default PokeType;
