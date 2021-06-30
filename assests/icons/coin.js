import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={16.051}
      height={15.854}
      viewBox="0 0 16.051 15.854"
      {...props}>
      <Path
        data-name="Fill 4"
        d="M0 7.927A7.977 7.977 0 018.026 0a7.977 7.977 0 018.026 7.927 7.977 7.977 0 01-8.026 7.927A7.977 7.977 0 010 7.927"
        fill="#ffcc01"
      />
    </Svg>
  );
}

export default SvgComponent;
