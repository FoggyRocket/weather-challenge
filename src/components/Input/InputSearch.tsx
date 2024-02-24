import {Text, TouchableOpacity, View} from 'react-native';
import {TextInputCustomProps} from './type';
import {constants, t} from '@styles';
import InputBase from './InputBase';
import {Icon} from '@components';
import {useState} from 'react';
import {Keyboard} from 'react-native';

function InputSearch({style, onClean, ...props}: TextInputCustomProps) {
  const [showButton, setShowButton] = useState<boolean>(false);
  const onCancel = () => {
    onClean?.();
    Keyboard.dismiss();
    setShowButton(false);
  };
  return (
    <View style={[t.flexRow]}>
      <View
        style={[
          t.flex1,
          t.border,
          t.rounded6xl,
          t.h12,
          t.px4,
          t.bgWhite,
          t.flexRow,
          t.itemsCenter,
          style
        ]}>
        <View>
          <Icon color={constants.colors.gray400} iconName="SearchNormal" height={20} />
        </View>
        <InputBase
          style={[t.w4_5_1, t.maxW4_5_1]}
          autoFocus={showButton}
          onFocus={() => setShowButton(true)}
          onBlur={() => setShowButton(false)}
          {...props}
        />
        {onClean && (
          <View>
            <TouchableOpacity
              onPress={onClean}
              style={[
                t.roundedFull,
                t.h5,
                t.w5,
                t.bgGray400,
                t.justifyCenter,
                t.itemsCenter,
              ]}>
              <Icon
                iconName="Close"
                height={10}
                color={constants.colors.white}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
      {showButton && (
        <TouchableOpacity onPress={onCancel} style={[t.justifyCenter, t.mx2]}>
          <Text>Cancelar</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

export default InputSearch;
