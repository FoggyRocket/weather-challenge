import React, { useEffect, useState } from 'react';
import { DeviceEventEmitter, Modal } from 'react-native';
import { LoadingModalEvents } from './types';
import LoadingBase from './LoadingBase';

function LoadingModal({ ...props }) {
  const [modalVisible, setModalVisible] = useState(false);

  const onOpen = () => {
    setModalVisible(true);
  };

  const onClose = () => {
    setModalVisible(false);
  };

  useEffect(() => {
    DeviceEventEmitter.addListener(LoadingModalEvents.OPEN, onOpen);
    DeviceEventEmitter.addListener(LoadingModalEvents.CLOSE, onClose);
    return () => {
      DeviceEventEmitter.removeAllListeners();
    };
  }, []);

  return (
    <Modal animationType="fade" transparent={false} visible={modalVisible} onRequestClose={() => null}>
      <LoadingBase />
    </Modal>
  );
}

export default LoadingModal;
