import { StyleProp, TextInputProps, TextStyle } from 'react-native';
export enum InputVariant {
  'default',
  'search',
}

export interface TextInputCustomProps extends TextInputProps {
  textStyle?: StyleProp<TextStyle>;
  variant?: keyof typeof InputVariant;
  onClean?:()=>void;
}
