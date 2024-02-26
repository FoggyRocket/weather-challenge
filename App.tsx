/**
 * Code Challenge React Native App
 * Dylan Torres
 *
 * @format
 */
import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {
  View,
} from 'react-native';
import {t} from '@styles';
import {BottomSheetV1} from '@components';

import {GestureHandlerRootView} from 'react-native-gesture-handler';
import WeatherView from '@views/WeatherView';

const SubContiner = () => {

  useEffect(()=>{
    setTimeout(()=>{
      BottomSheetV1.dismiss()
    },1000)
  },[])

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
