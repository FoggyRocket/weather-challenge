import React from 'react';
import { DeviceEventEmitter } from 'react-native';
import LoadingModalBase from './LoadingModalBase';
import { LoadingModalEvents, LoadingProps } from './types';
import LoadingBase from './LoadingBase';

const Loading = {
  Screen: (props:LoadingProps)=>{
    return <LoadingBase {...props}/>
  },
  Component: () => {
    return <LoadingModalBase />;
  },
  show: () => {
    DeviceEventEmitter.emit(LoadingModalEvents.OPEN);
  },
  hide: () => {
    DeviceEventEmitter.emit(LoadingModalEvents.CLOSE);
  },
};

export default Loading;
