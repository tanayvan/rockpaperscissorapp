import * as React from 'react';
import Svg, {Defs, RadialGradient, Stop, Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={374.989}
      height={407.055}
      viewBox="0 0 374.989 407.055"
      {...props}>
      <Defs>
        <RadialGradient
          id="prefix__a"
          cx={0.5}
          cy={0.5}
          r={1}
          gradientUnits="objectBoundingBox">
          <Stop offset={0} stopColor="#2d2599" />
          <Stop offset={1} />
        </RadialGradient>
      </Defs>
      <Path
        data-name="Fill 1"
        d="M58.574 154.408L57.338 135.8C51.972 55.063 122.292-10.134 202.394 1.308c69.4 15.943 172.6 113.215 172.6 113.215l-.01 81.271s-14.937 9.389-24.421 10.838a56.55 56.55 0 00-46.295 42.076c-12.9 106.057-114.792 177.609-218.931 153.743l-6.04-1.518C46.934 392.795 0 335.461 0 335.461l.148-98.874s7.664-7.5 12.22-10.679a112.4 112.4 0 0046.206-71.5z"
        opacity={0.127}
        fill="url(#prefix__a)"
      />
    </Svg>
  );
}

export default SvgComponent;
