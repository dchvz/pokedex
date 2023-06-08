import {StyleSheet, Text, TextStyle} from 'react-native';
import React from 'react';

type Props = {
  text: string;
  textStyle?: TextStyle;
};

const BoldText = ({text, textStyle}: Props) => {
  return <Text style={[styles.text, textStyle]}>{text}</Text>;
};

interface IStyles {
  text: TextStyle;
}

const styles = StyleSheet.create<IStyles>({
  text: {
    fontWeight: 'bold',
    fontSize: 24,
    color: 'white',
  },
});

export default BoldText;
