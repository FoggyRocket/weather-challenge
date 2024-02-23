import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // Flex Direction
  flexRow: {
    flexDirection: 'row',
  },
  flexRowReverse: {
    flexDirection: 'row-reverse',
  },
  flexCol: {
    flexDirection: 'column',
  },
  flexColReverse: {
    flexDirection: 'column-reverse',
  },
  // Flex Wrap
  flexWrap: {
    flexWrap: 'wrap',
  },
  flexWrapReverse: {
    flexWrap: 'wrap-reverse',
  },
  flexNoWrap: {
    flexWrap: 'nowrap',
  },
  // Flex
  flex0_3: {
    flex: 0.3,
  },
  flex1: {
    flex: 1,
  },
  flex2: {
    flex: 2,
  },
  flex3: {
    flex: 3,
  },
  flex5: {
    flex: 5,
  },
  flexNone: {
    flex: 0,
  },
  // Flex Grow
  grow: {
    flexGrow: 1,
  },
  grow0: {
    flexGrow: 0,
  },
  // Flex Shrink
  shrink: {
    flexShrink: 1,
  },
  shrink0: {
    flexShrink: 0,
  },
  // Justify Content
  justifyStart: {
    justifyContent: 'flex-start',
  },
  justifyEnd: {
    justifyContent: 'flex-end',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  justifyBetween: {
    justifyContent: 'space-between',
  },
  justifyAround: {
    justifyContent: 'space-around',
  },
  justifyEvenly: {
    justifyContent: 'space-evenly',
  },
  // Align Content
  contentCenter: {
    alignContent: 'center',
  },
  contentStart: {
    alignContent: 'flex-start',
  },
  contentEnd: {
    alignContent: 'flex-end',
  },
  contentBetween: {
    alignContent: 'space-between',
  },
  contentAround: {
    alignContent: 'space-around',
  },
  contentStretch: {
    alignContent: 'stretch',
  },
  // Align Items
  itemsStart: {
    alignItems: 'flex-start',
  },
  itemsEnd: {
    alignItems: 'flex-end',
  },
  itemsCenter: {
    alignItems: 'center',
  },
  itemsBaseline: {
    alignItems: 'baseline',
  },
  itemsStretch: {
    alignItems: 'stretch',
  },
  // Align Self
  selfAuto: {
    alignSelf: 'auto',
  },
  selfStart: {
    alignSelf: 'flex-start',
  },
  selfEnd: {
    alignSelf: 'flex-end',
  },
  selfCenter: {
    alignSelf: 'center',
  },
  selfStretch: {
    alignSelf: 'stretch',
  },
  selfBaseline: {
    alignSelf: 'baseline',
  },
});
