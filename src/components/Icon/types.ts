import type { SvgProps } from 'react-native-svg';
import type * as icons from './icons';

export type IconsType = typeof icons;
export interface IconProps extends SvgProps  {
  color?: string;
  iconName: keyof IconsType;
};
