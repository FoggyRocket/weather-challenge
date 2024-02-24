import {memo} from 'react';
import { SvgProps, Svg, G, Path } from 'react-native-svg';

function SearchNormal({ ...props }: SvgProps) {
  if (!props.width) props.width = 24;
  if (!props.height) props.height = 24;

  return (
    <Svg viewBox="0 0 24 24" fill="none" {...props}>
      <G stroke={props.color} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <Path d="M11.5 21a9.5 9.5 0 100-19 9.5 9.5 0 000 19zM22 22l-2-2" />
      </G>
    </Svg>
  );
}

export default memo(SearchNormal);
