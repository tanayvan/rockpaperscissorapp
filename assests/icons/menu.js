import * as React from 'react';
import Svg, {Rect} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      data-name="Menu icon"
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={26}
      viewBox="0 0 32 26"
      {...props}>
      <Rect
        width={25.6}
        height={5.515}
        rx={2.758}
        transform="translate(3.2)"
        fill={props.color}
      />
      <Rect
        data-name="Rectangle Copy"
        width={32}
        height={5.515}
        rx={2.758}
        transform="translate(0 10.242)"
        fill={props.color}
      />
      <Rect
        data-name="Rectangle Copy 4"
        width={25.6}
        height={5.515}
        rx={2.758}
        transform="translate(3.2 20.485)"
        fill={props.color}
      />
    </Svg>
  );
}

export default SvgComponent;
