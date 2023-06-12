import React from 'react';

import {View, StyleSheet, ViewStyle, ImageStyle, Image} from 'react-native';
import PokeType from './PokeType';
import BoldText from './Text/BoldText';

import {
  getColorByType,
  upperCaseFirstLetter,
} from '../helpers/pokemonListHelper';
import {PokemonType} from '../types/types';
import Card from './Card';

type Props = {
  name: string;
  types: PokemonType[];
  imgUrl: string;
};

const PokeCard = ({name, types, imgUrl}: Props) => {
  return (
    <Card
      viewStyle={[
        styles.container,
        {backgroundColor: getColorByType(types[0])},
      ]}>
      <View style={styles.metadata}>
        <BoldText text={upperCaseFirstLetter(name)} />
        <View style={styles.types}>
          {types.map(type => (
            <PokeType key={`${name}-${type}`} type={type} />
          ))}
        </View>
      </View>

      <Image
        style={styles.image}
        source={{
          uri: imgUrl,
        }}
      />
    </Card>
  );
};

interface IStyles {
  container: ViewStyle;
  metadata: ViewStyle;
  image: ImageStyle;
  types: ViewStyle;
}

const styles = StyleSheet.create<IStyles>({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    height: 100,
  },
  image: {
    height: 100,
    width: 100,
  },
  types: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  metadata: {
    flexDirection: 'column',
  },
});

export default PokeCard;
