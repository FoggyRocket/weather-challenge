import {View} from 'react-native';
import {TextInputCustomProps} from './type';
import {t} from '@styles';
import InputBase from './InputBase';

function InputDefault({style, ...props}: TextInputCustomProps) {
  return (
    <View
      style={[
        t.border,
        t.rounded6xl,
        t.h12,
        t.justifyCenter,
        t.px4,
        t.bgWhite,
        style,
      ]}>
      <InputBase {...props} />
    </View>
  );
}

export default InputDefault;
