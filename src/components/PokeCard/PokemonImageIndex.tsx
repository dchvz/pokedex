import React from 'react';
import {
  Image,
  ImageStyle,
  StyleSheet,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import BoldText from '../Text/BoldText';
import PokeBall from './../../assets/pokeball.svg';
import {getColorByType} from '../../helpers/pokemonListHelper';
import {PokemonType} from '../../types/types';

type Props = {
  id: number;
  mainType: PokemonType;
  imgUrl: string;
};

const PokemonImageIndex = ({id, mainType, imgUrl}: Props) => {
  return (
    <View style={styles.container}>
      <BoldText
        text={`#${id}`}
        textStyle={[styles.id, {color: getColorByType(mainType, 'dark')}]}
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
          fill={getColorByType(mainType, 'light')}
          style={styles.pokeBall}
        />
      </View>
    </View>
  );
};

interface IStyles {
  metadata: ViewStyle;
  container: ViewStyle;
  pokeBall: ViewStyle;
  image: ImageStyle;
  id: TextStyle;
}

const styles = StyleSheet.create<IStyles>({
  container: {
    flex: 1,
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
  metadata: {
    flex: 1,
    overflow: 'hidden',
    justifyContent: 'center',
    borderRadius: 10,
  },
});

export default PokemonImageIndex;
