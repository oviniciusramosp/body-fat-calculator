import * as React from "react";
import Svg, { Path, G } from "react-native-svg";

export default function IconArrow({ size = 24, color, filled, rotate = 0 }) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      style={{ transform: [{ rotate: rotate + "deg" }] }}
    >
      {filled ? (
        <G>
          <Path d="M11.475 19.1a.734.734 0 01-.225-.538c0-.208.067-.387.2-.537l5.3-5.275H5.125a.74.74 0 01-.525-.213.706.706 0 01-.225-.537.71.71 0 01.225-.538.742.742 0 01.525-.212H16.75l-5.3-5.275a.781.781 0 01-.2-.537c0-.209.075-.388.225-.538.15-.133.325-.2.525-.2s.375.067.525.2l6.45 6.475c.1.083.171.179.213.287a.944.944 0 010 .675.704.704 0 01-.213.288l-6.45 6.475a.766.766 0 01-.525.2.766.766 0 01-.525-.2z" />
        </G>
      ) : (
        <G>
          <Path d="M11.475 19.1a.734.734 0 01-.225-.538c0-.208.067-.387.2-.537l5.3-5.275H5.125a.74.74 0 01-.525-.213.706.706 0 01-.225-.537.71.71 0 01.225-.538.742.742 0 01.525-.212H16.75l-5.3-5.275a.781.781 0 01-.2-.537c0-.209.075-.388.225-.538.15-.133.325-.2.525-.2s.375.067.525.2l6.45 6.475c.1.083.171.179.213.287a.944.944 0 010 .675.704.704 0 01-.213.288l-6.45 6.475a.766.766 0 01-.525.2.766.766 0 01-.525-.2z" />
        </G>
      )}
    </Svg>
  );
}
