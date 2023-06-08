import {StyleSheet, View, ViewStyle} from 'react-native';
import React, {PropsWithChildren} from 'react';

type Props = {
  viewStyle?: ViewStyle[];
};

const Card = ({children, viewStyle}: PropsWithChildren<Props>) => {
  return <View style={[viewStyle, styles.container]}>{children}</View>;
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
