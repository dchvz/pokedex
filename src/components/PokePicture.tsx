import {ImageStyle, Image, StyleSheet} from 'react-native';
import React from 'react';

type Props = {
  imgUrl: string;
};

const PokePicture = ({imgUrl}: Props) => {
  return (
    <Image
      style={styles.image}
      source={{
        uri: imgUrl,
      }}
    />
  );
};

interface IStyles {
  image: ImageStyle;
}

const styles = StyleSheet.create<IStyles>({
  image: {
    width: 150,
    height: 150,
  },
});

export default PokePicture;
