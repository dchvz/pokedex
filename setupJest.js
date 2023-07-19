import {jest} from '@jest/globals';
require('jest-fetch-mock').enableMocks();

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => ({
      navigate: jest.fn(),
      dispatch: jest.fn(),
    }),
  };
});
