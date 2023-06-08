import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import PokeList from './src/components/PokeList';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <PokeList />
    </SafeAreaView>
  );
}

export default App;
