import { StyleSheet } from 'react-native';

import { colors } from '../constants';

export default StyleSheet.create({
  // Box Shadow
  shadow: {
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1.5,
  },
  shadowSm: {
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  shadowMd: {
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  shadowLg: {
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 7.5,
  },
  shadowXl: {
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowOpacity: 0.1,
    shadowRadius: 25,
    elevation: 12.5,
  },
  shadow2xl: {
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 25,
    },
    shadowOpacity: 0.25,
    shadowRadius: 50,
    elevation: 25,
  },
  shadowNone: {
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  // Opacity
  opacity0: {
    opacity: 0,
  },
  opacity5: {
    opacity: 0.05,
  },
  opacity10: {
    opacity: 0.1,
  },
  opacity20: {
    opacity: 0.2,
  },
  opacity25: {
    opacity: 0.25,
  },
  opacity30: {
    opacity: 0.3,
  },
  opacity40: {
    opacity: 0.4,
  },
  opacity50: {
    opacity: 0.5,
  },
  opacity60: {
    opacity: 0.6,
  },
  opacity70: {
    opacity: 0.7,
  },
  opacity75: {
    opacity: 0.75,
  },
  opacity80: {
    opacity: 0.8,
  },
  opacity90: {
    opacity: 0.9,
  },
  opacity95: {
    opacity: 0.95,
  },
  opacity100: {
    opacity: 1,
  },
  overflowHidden: {
    overflow: 'hidden',
  },
});
