import * as React from 'react';
import Svg, {Defs, ClipPath, Path, G} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={18.596}
      height={18.192}
      viewBox="0 0 18.596 18.192"
      {...props}>
      <Defs>
        <ClipPath id="prefix__a">
          <Path
            data-name="Clip 2"
            d="M0 0h18.6v18.192H0z"
            transform="translate(0 .395)"
            fill="none"
          />
        </ClipPath>
        <ClipPath id="prefix__b">
          <Path
            data-name="Clip 11"
            d="M0 0h9v9.013H0z"
            transform="translate(.304 .065)"
            fill="none"
          />
        </ClipPath>
        <ClipPath id="prefix__c">
          <Path
            data-name="Clip 16"
            d="M0 0h9v9.013H0z"
            transform="translate(.304 .404)"
            fill="none"
          />
        </ClipPath>
      </Defs>
      <G data-name="Group 3">
        <Path data-name="Clip 2" d="M0 0h18.6v18.192H0z" fill="none" />
        <G
          data-name="Group 3"
          clipPath="url(#prefix__a)"
          transform="translate(0 -.395)">
          <Path
            data-name="Fill 1"
            d="M18.433 9.104a.54.54 0 010 .774l-8.739 8.549a.568.568 0 01-.791 0L.163 9.878a.54.54 0 010-.774L8.9.555a.568.568 0 01.79 0z"
            fill="#be75ff"
          />
        </G>
      </G>
      <Path
        data-name="Fill 4"
        d="M4.921 12.138l-.567-.767 9.751-6.9.693.678-9.876 6.988zm-.363-2.479L3.084 7.664l8.288-5.862 1.8 1.763-8.613 6.093z"
        fill="#feb9eb"
      />
      <Path
        data-name="Fill 6"
        d="M4.933 14.149l3.97 3.883a.567.567 0 00.79 0l5.61-5.488 1.321-3.448H2.444z"
        fill="#a061ff"
      />
      <Path
        data-name="Fill 8"
        d="M9 .084a.532.532 0 00-.1.076L.163 8.71A.541.541 0 000 9.097h6.026z"
        fill="#9f48ff"
      />
      <G data-name="Group 12">
        <Path data-name="Clip 11" d="M9.593.083h9v9.013h-9z" fill="none" />
        <G
          data-name="Group 12"
          clipPath="url(#prefix__b)"
          transform="translate(9.289 .018)">
          <Path
            data-name="Fill 10"
            d="M3.282 9.078h6.022a.541.541 0 00-.163-.387L.404.142a.592.592 0 00-.1-.077z"
            fill="#d783eb"
          />
        </G>
      </G>
      <Path
        data-name="Fill 13"
        d="M8.9 18.032a.54.54 0 00.1.077L6.026 9.096H0a.539.539 0 00.163.387z"
        fill="#8b38d6"
      />
      <G data-name="Group 17">
        <Path data-name="Clip 16" d="M9.593 9.096h9v9.013h-9z" fill="none" />
        <G
          data-name="Group 17"
          clipPath="url(#prefix__c)"
          transform="translate(9.289 8.692)">
          <Path
            data-name="Fill 15"
            d="M3.282.404L.304 9.417a.559.559 0 00.1-.077L9.144.791a.539.539 0 00.16-.387z"
            fill="#8536cd"
          />
        </G>
      </G>
      <Path
        data-name="Fill 18"
        d="M6.026 4.381A1.662 1.662 0 004.65 5.728a1.662 1.662 0 00-1.376-1.346A1.661 1.661 0 004.65 3.037a1.66 1.66 0 001.376 1.344"
        fill="#fff"
      />
      <Path
        data-name="Fill 20"
        d="M7.623 6.37a.9.9 0 00-.747.731.9.9 0 00-.747-.731.9.9 0 00.746-.73.9.9 0 00.747.73"
        fill="#fff"
      />
    </Svg>
  );
}

export default SvgComponent;
