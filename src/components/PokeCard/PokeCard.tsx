import React from 'react';

import {StyleSheet, ViewStyle} from 'react-native';

import {getColorByType} from '../../helpers/pokemonListHelper';
import {PokemonType} from '../../types/types';
import Card from '../Card';
import {useNavigation} from '@react-navigation/native';
import {POKEMON_DETAILS_SCREEN} from '../../constants/navigation';
import {PokemonDetailsNavigationProp} from '../../types/navigation';
import PokemonImageIndex from './PokemonImageIndex';
import PokemonMetadata from './PokemonMetadata';

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
      <PokemonMetadata name={name} types={types} />
      <PokemonImageIndex id={id} mainType={types[0]} imgUrl={imgUrl} />
    </Card>
  );
};

interface IStyles {
  container: ViewStyle;
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
});

export default PokeCard;
