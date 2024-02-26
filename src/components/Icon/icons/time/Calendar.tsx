import React from 'react';
import { SvgProps, Svg, G, Path } from 'react-native-svg';
function Calendar({ ...props }: SvgProps) {
  if (!props.width) props.width = 24;
  if (!props.height) props.height = 24;
  return (
    <Svg viewBox="0 0 25 25" fill="none" {...props}>
      <G stroke={props.color} strokeLinecap="round" strokeLinejoin="round">
        <Path
          d="M8.5 2.5v3M16.5 2.5v3M4 9.59h17M21.5 9v8.5c0 3-1.5 5-5 5h-8c-3.5 0-5-2-5-5V9c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5z"
          strokeWidth={1.5}
          strokeMiterlimit={10}
        />
        <Path d="M12.495 14.2h.01M8.794 14.2h.01M8.794 17.2h.01" strokeWidth={2} />
      </G>
    </Svg>
  );
}
export default React.memo(Calendar);
