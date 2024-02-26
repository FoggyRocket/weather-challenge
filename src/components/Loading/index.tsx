import React from 'react';
import { DeviceEventEmitter } from 'react-native';
import LoadingModalBase from './LoadingModalBase';
import { LoadingModalEvents } from './types';

const Loading = {
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
