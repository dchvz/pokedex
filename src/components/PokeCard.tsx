import {View, Text, StyleSheet, ViewStyle} from 'react-native';
import React from 'react';
import PokePicture from './PokePicture';

type Props = {
  name: string;
  types: string[];
  imgUrl: string;
};

const PokeCard = ({name, types, imgUrl}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.metadata}>
        <Text>{name}</Text>
        <Text>{types}</Text>
      </View>

      <PokePicture imgUrl={imgUrl} />
    </View>
  );
};

interface IStyles {
  container: ViewStyle;
  metadata: ViewStyle;
}

const styles = StyleSheet.create<IStyles>({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'green',
    marginHorizontal: 4,
    marginVertical: 4,
    borderRadius: 4,
    height: 100,
  },
  metadata: {
    flexDirection: 'column',
  },
});

export default PokeCard;
