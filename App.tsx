import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import PokedexScreen from './src/screens/PokedexScreen';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <PokedexScreen />
    </SafeAreaView>
  );
}

export default App;
