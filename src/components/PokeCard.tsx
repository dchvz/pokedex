import React from 'react';

import {
  View,
  StyleSheet,
  ViewStyle,
  ImageStyle,
  Image,
  TextStyle,
} from 'react-native';
import PokeType from './PokeType';
import BoldText from './Text/BoldText';

import {
  getColorByType,
  upperCaseFirstLetter,
} from '../helpers/pokemonListHelper';
import {PokemonType} from '../types/types';
import Card from './Card';

type Props = {
  id: number;
  name: string;
  types: PokemonType[];
  imgUrl: string;
};

const PokeCard = ({id, name, types, imgUrl}: Props) => {
  return (
    <Card
      viewStyle={[
        styles.container,
        {backgroundColor: getColorByType(types[0])},
      ]}>
      <View>
        <BoldText text={upperCaseFirstLetter(name)} textStyle={styles.name} />
        <View style={styles.types}>
          {types.map(type => (
            <PokeType key={`${name}-${type}`} type={type} />
          ))}
        </View>
      </View>

      <View style={styles.metadata}>
        <BoldText text={`#${id}`} textStyle={styles.id} />
        <Image
          style={styles.image}
          source={{
            uri: imgUrl,
          }}
        />
      </View>
    </Card>
  );
};

interface IStyles {
  container: ViewStyle;
  metadata: ViewStyle;
  image: ImageStyle;
  types: ViewStyle;
  name: TextStyle;
  id: TextStyle;
}

const styles = StyleSheet.create<IStyles>({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginHorizontal: 5,
    marginVertical: 5,
    height: 120,
  },
  name: {
    fontSize: 14,
  },
  id: {fontSize: 12, textAlign: 'right'},
  image: {
    height: 70,
    width: 70,
    marginTop: 10,
  },
  types: {
    flexDirection: 'column',
    marginVertical: 10,
  },
  metadata: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignContent: 'flex-end',
  },
});

export default PokeCard;
