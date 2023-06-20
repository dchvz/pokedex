import {View, StyleSheet, ViewStyle} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();
  const goBack = () => navigation.goBack();
  return (
    <View style={styles.container}>
      <Ionicons name="ios-arrow-back" size={30} onPress={goBack} />
      <View>
        <Ionicons name="menu" size={30} />
      </View>
    </View>
  );
};

interface IStyles {
  container: ViewStyle;
}

const styles = StyleSheet.create<IStyles>({
  container: {
    backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Header;
