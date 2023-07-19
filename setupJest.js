require('jest-fetch-mock').enableMocks();
// global.fetch = require('jest-fetch-mock');
import {jest} from '@jest/globals';

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => ({
      navigate: jest.fn(),
      dispatch: jest.fn(),
    }),
  };
});
