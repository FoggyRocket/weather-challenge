/**
 * Code Challenge React Native App
 * Dylan Torres
 *
 * @format
 */
import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {View} from 'react-native';
import {t} from '@styles';
import {BottomSheetV1, Loading} from '@components';

import {GestureHandlerRootView} from 'react-native-gesture-handler';
import WeatherView from '@views/WeatherView';
import {LocationsProvider} from '@context/apiResponseContext';

function App(): React.JSX.Element {
  useEffect(() => {
    Loading.show();
    setTimeout(() => {
      Loading.hide();
      BottomSheetV1.dismiss();
    }, 1200);
  }, []);
  
  return (
    <GestureHandlerRootView style={[t.flex1]}>
      <LocationsProvider>
        <View style={[t.flex1,t.bgWhite]}>
          <WeatherView />
          <BottomSheetV1.Component />
          <Loading.Component />
        </View>
      </LocationsProvider>
    </GestureHandlerRootView>
  );
}

export default App;
