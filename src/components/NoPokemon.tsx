import React from 'react';
import BoldText from './Text/BoldText';
import {StyleSheet, TextStyle} from 'react-native';

// @TODO: Add a nicer UI for this case
const NoPokemon = () => {
  return (
    <BoldText
      text={'No pokemon could be fetched at this time. Please try again later'}
      textStyle={styles.header}
    />
  );
};

interface IStyles {
  header: TextStyle;
}

const styles = StyleSheet.create<IStyles>({
  header: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 28,
    marginVertical: 30,
  },
});

export default NoPokemon;
