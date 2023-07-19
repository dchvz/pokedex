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
import PokeBall from './../assets/pokeball.svg';

import {
  getColorByType,
  upperCaseFirstLetter,
} from '../helpers/pokemonListHelper';
import {PokemonType} from '../types/types';
import Card from './Card';
import {useNavigation} from '@react-navigation/native';
import {POKEMON_DETAILS_SCREEN} from '../constants/navigation';
import {PokemonDetailsNavigationProp} from '../types/navigation';

type Props = {
  id: number;
  name: string;
  types: PokemonType[];
  imgUrl: string;
};

const PokeCard = ({id, name, types, imgUrl}: Props) => {
  const navigation = useNavigation<PokemonDetailsNavigationProp>();
  const goToDetailsScreen = () =>
    navigation.navigate(POKEMON_DETAILS_SCREEN, {
      pokemonId: id,
    });
  return (
    <Card
      onPress={goToDetailsScreen}
      viewStyle={[
        styles.container,
        {backgroundColor: getColorByType(types[0])},
      ]}
      testID={`${name}-card`}>
      <View style={styles.leftContainer}>
        <BoldText text={upperCaseFirstLetter(name)} textStyle={styles.name} />
        <View style={styles.types}>
          {types.map(type => (
            <PokeType key={`${name}-${type}`} type={type} />
          ))}
        </View>
      </View>

      <View style={styles.rightContainer}>
        <BoldText
          text={`#${id}`}
          textStyle={[styles.id, {color: getColorByType(types[0], 'dark')}]}
        />
        <View style={styles.metadata}>
          <Image
            style={styles.image}
            source={{
              uri: imgUrl,
            }}
          />
          <PokeBall
            width={120}
            height={120}
            fill={getColorByType(types[0], 'light')}
            style={styles.pokeBall}
          />
        </View>
      </View>
    </Card>
  );
};

interface IStyles {
  container: ViewStyle;
  metadata: ViewStyle;
  rightContainer: ViewStyle;
  leftContainer: ViewStyle;
  pokeBall: ViewStyle;
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
    paddingLeft: 10,
    marginHorizontal: 5,
    marginVertical: 5,
    height: 120,
  },
  leftContainer: {width: '45%'},
  rightContainer: {
    flex: 1,
  },
  name: {
    fontSize: 14,
  },
  pokeBall: {
    top: 5,
  },
  id: {
    fontSize: 12,
    textAlign: 'right',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  image: {
    height: 70,
    width: 70,
    marginLeft: 10,
    position: 'absolute',
    zIndex: 1,
  },
  types: {
    flexDirection: 'column',
    marginVertical: 10,
  },
  metadata: {
    flex: 1,
    overflow: 'hidden',
    justifyContent: 'center',
    borderRadius: 10,
  },
});

export default PokeCard;
