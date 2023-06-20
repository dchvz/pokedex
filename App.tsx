import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PokedexScreen from './src/screens/PokedexScreen';
import PokemonDetailsScreen from './src/screens/PokemonDetailsScreen';
import {
  POKEDEX_SCREEN,
  POKEMON_DETAILS_SCREEN,
} from './src/constants/navigation';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={POKEDEX_SCREEN} component={PokedexScreen} />
        <Stack.Screen
          name={POKEMON_DETAILS_SCREEN}
          component={PokemonDetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
