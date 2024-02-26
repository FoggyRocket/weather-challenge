import React, {
  useEffect,
  useState,
  useRef,
  forwardRef,
  ReactNode,
  useCallback,
  useMemo,
} from 'react';
import {DeviceEventEmitter} from 'react-native';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetView,
  useBottomSheetDynamicSnapPoints,
} from '@gorhom/bottom-sheet';
import {ActionExpandProps, BottomSheetEvents} from './types';
import {t} from '@styles';

const BottomSheetV1 = () => {
  const [content, setContent] = useState<ReactNode>(null);
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [index, setIndex] = useState<number>(-1);

  const expand = ({...props}: ActionExpandProps) => {
    setContent(props.content);
    setIndex(1)
    bottomSheetRef.current?.expand();
  };
  const points = useMemo(() => ['CONTENT_HEIGHT'], []);
  const {
    animatedHandleHeight,
    animatedSnapPoints,
    animatedContentHeight,
    handleContentLayout,
  } = useBottomSheetDynamicSnapPoints(points);
  const close = () => {
    setIndex(-1)
    bottomSheetRef.current?.forceClose();
  };
  const onDismiss = () => {
    setIndex(-1)
    bottomSheetRef.current?.close();
  };

  useEffect(() => {
    if(!content){
      bottomSheetRef.current?.forceClose()
      onDismiss()
    }
    DeviceEventEmitter.addListener(BottomSheetEvents.SHOW, expand);
    DeviceEventEmitter.addListener(BottomSheetEvents.HIDE, close);
    DeviceEventEmitter.addListener(BottomSheetEvents.DISMISS, onDismiss);
    return () => {
      DeviceEventEmitter.removeAllListeners();
    };
  }, [content]);


  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        onPress={()=>onDismiss()}
      />
    ),
    [],
  );

  return (
    <BottomSheet
      backgroundStyle={t.bgInfo}
      ref={bottomSheetRef}
      handleIndicatorStyle={t.bgWhite}
      snapPoints={animatedSnapPoints}
      handleHeight={animatedHandleHeight}
      contentHeight={animatedContentHeight}
      backdropComponent={renderBackdrop}
      enablePanDownToClose
      >
      <BottomSheetView onLayout={handleContentLayout}>
        {content}
      </BottomSheetView>
    </BottomSheet>
  );
};

export default forwardRef(BottomSheetV1);
