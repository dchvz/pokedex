import React from 'react';
import {ActivityIndicator} from 'react-native';
import {COLORS} from '../constants/colors';

const LoadingAnimation = () => {
  return (
    <ActivityIndicator
      testID="pokemon-loading-animation"
      size={'small'}
      color={COLORS.softBlue}
    />
  );
};

export default LoadingAnimation;
