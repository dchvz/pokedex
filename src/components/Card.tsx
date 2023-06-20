import {StyleSheet, Pressable, ViewStyle} from 'react-native';
import React, {PropsWithChildren} from 'react';

type Props = {
  viewStyle?: ViewStyle[];
  onPress: () => void;
};

const Card = ({children, viewStyle, onPress}: PropsWithChildren<Props>) => {
  return (
    <Pressable onPress={onPress} style={[viewStyle, styles.container]}>
      {children}
    </Pressable>
  );
};

interface IStyles {
  container: ViewStyle;
}

const styles = StyleSheet.create<IStyles>({
  container: {
    borderRadius: 10,
  },
});

export default Card;
