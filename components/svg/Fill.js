import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={232}
      height={231}
      viewBox="0 0 232 231"
      {...props}>
      <Path
        data-name="Fill 1"
        d="M17.66 128.2a63.837 63.837 0 0025.991-40.575l-.7-10.559C39.938 31.248 79.493-5.751 124.55.742a167.157 167.157 0 01102.858 72.669l.007.01c11.191 17.431.827 40.705-19.522 43.842a31.916 31.916 0 00-26.041 23.878c-7.258 60.186-64.571 100.791-123.149 87.247l-3.4-.861c-19.973-5.068-45.176-37.887-45.176-37.887a41.836 41.836 0 017.533-61.44"
        fill="#E2E4E4"
      />
    </Svg>
  );
}

export default SvgComponent;
