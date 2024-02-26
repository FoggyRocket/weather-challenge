/**
 * Code Challenge React Native App
 * Dylan Torres
 *
 * @format
 */
import 'react-native-gesture-handler';
import React, {useCallback, useMemo, useRef, useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {constants, t} from '@styles';
import {BottomSheetV1, Icon, TemplateWeatherInfo} from '@components';

import {GestureHandlerRootView} from 'react-native-gesture-handler';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetView,
  useBottomSheet,
  useBottomSheetDynamicSnapPoints,
} from '@gorhom/bottom-sheet';
import WeatherView from '@views/WeatherView';

const SubContiner = () => {


  return (
    <View style={[t.flex1]}>
      <WeatherView/>
      <BottomSheetV1.Component/>
    </View>
  );
};

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView style={[t.flex1]}>
        <SubContiner />
    </GestureHandlerRootView>
  );
}

export default App;
