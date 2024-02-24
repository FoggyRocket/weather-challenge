import { memo } from 'react';
import { TextInputCustomProps } from './type';
import InputDefault from './InputDefualt';
import InputSearch from './InputSearch';

const Input = memo(function InputFn({ variant = 'default', ...props }: TextInputCustomProps) {
  switch (variant) {
    case 'search':
      return <InputSearch {...props} />;
    default:
      return <InputDefault {...props} />;
  }
});

export default Input;
