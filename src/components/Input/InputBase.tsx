import { TextInput } from 'react-native';
import {TextInputCustomProps} from './type';
import {t} from '@styles';

function InputBase({textStyle, ...props}: TextInputCustomProps) {
  return (
    <TextInput
      autoCapitalize="none"
      placeholderTextColor="gray"
      style={[t.textSm,t.textGray300, t.textNeutro, textStyle]}
      {...props}
    />
  );
}

export default InputBase;
