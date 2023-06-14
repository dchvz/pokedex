import React from 'react';
import {SafeAreaView, StyleSheet, ViewStyle} from 'react-native';
import PokedexScreen from './src/screens/PokedexScreen';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <PokedexScreen />
    </SafeAreaView>
  );
}

interface IStyles {
  container: ViewStyle;
}

const styles = StyleSheet.create<IStyles>({
  container: {
    flex: 1,
  },
});

export default App;
