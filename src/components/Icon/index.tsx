import {memo} from 'react';
import { IconProps } from './types';
import * as icons from './icons';

function Icon({ color = '#3D4754', iconName, ...svgProps }: IconProps) {
  const SelectedIcon = icons[iconName];
  
  return <SelectedIcon color={color}  {...svgProps} />;
}

export default memo(Icon);