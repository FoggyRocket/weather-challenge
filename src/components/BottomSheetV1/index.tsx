import React from 'react';
import {DeviceEventEmitter} from 'react-native';
import BottomSheetV1Base from './BottomSheetV1Base';
import {ActionExpandProps, BottomSheetEvents} from './types';

const BottomSheetV1 = {
  Component: ({...props}) => {
    return <BottomSheetV1Base {...props} />;
  },
  show: ({...restArg}: ActionExpandProps) => {
    const props = {...restArg};
    DeviceEventEmitter.emit(BottomSheetEvents.SHOW, props);
  },
  dismiss: () => {
    DeviceEventEmitter.emit(BottomSheetEvents.DISMISS);
  },
};

export default BottomSheetV1;
