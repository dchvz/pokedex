import {View, Text, ViewStyle, StyleSheet} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import {PokemonDetailsRouteProp} from '../types/navigation';
import Header from '../components/Header';

const PokemonDetailsScreen = () => {
  const route = useRoute<PokemonDetailsRouteProp>();
  return (
    <View style={styles.container}>
      <Header />
      <Text>{route.params.pokemonId}</Text>
    </View>
  );
};

interface IStyles {
  container: ViewStyle;
}

const styles = StyleSheet.create<IStyles>({
  container: {
    flex: 1,
  },
});

export default PokemonDetailsScreen;
