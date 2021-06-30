import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={13.207}
      height={26.556}
      viewBox="0 0 13.207 26.556"
      {...props}>
      <Path
        data-name="Path 17 Copy"
        d="M2.819.567a1.6 1.6 0 00-2.82 1.036v23.35A1.6 1.6 0 002.809 26l10.005-11.567a1.6 1.6 0 00.012-2.086z"
        fill={props.color}
      />
    </Svg>
  );
}

export default SvgComponent;
