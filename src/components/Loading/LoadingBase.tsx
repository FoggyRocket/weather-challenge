import { t } from '@styles';
import React from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';
import { LoadingProps } from './types';


function LoadingBase({ height }: LoadingProps) {
  return (
    <View style={[t.flex1, t.itemsCenter, t.justifyCenter,height]}>
      <LottieView autoPlay loop source={require('./weather_load.json')} style={[t.h100, t.w100]} />
    </View>
  );
}

export default LoadingBase;
