import * as React from "react";
import Svg, { Path, G } from "react-native-svg";

export default function IconChicken({ size = 24, color, filled, rotate = 0 }) {
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
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.16 12.73a6.327 6.327 0 01-3.77 1.8c-1.39.15-2.67.68-3.64 1.65a2.792 2.792 0 01-3.95 0l-.99-.99a2.72 2.72 0 01-.809-1.89 2.92 2.92 0 01.88-2.12l.03-.03c.92-.92 1.42-2.15 1.55-3.47.17-1.82 1.14-3.58 2.9-4.71 1.01-.65 2.18-.97 3.35-.97 1.19 0 2.37.33 3.38 1a6.27 6.27 0 011.07 9.73zM6.62 15.31l.017.023c.136.185.29.394.463.567l.99.99c.21.2.41.37.67.52l-2.5 2.45c.27.56.18 1.24-.29 1.7a1.49 1.49 0 01-2.55-.98 1.49 1.49 0 01-.98-2.55c.46-.46 1.15-.56 1.7-.29l2.48-2.43z"
          />
        </G>
      ) : (
        <G>
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.39 14.53c1.37-.15 2.71-.75 3.77-1.8A6.27 6.27 0 0019.09 3c-1.01-.67-2.19-1-3.38-1-1.17 0-2.34.32-3.35.97-1.76 1.13-2.73 2.89-2.9 4.71-.13 1.32-.63 2.55-1.55 3.47l-.03.03a2.92 2.92 0 00-.878 2.12c.008.462.132.918.37 1.324L4.14 17.74c-.55-.27-1.24-.17-1.7.29a1.49 1.49 0 00.98 2.55 1.49 1.49 0 002.55.98c.47-.46.56-1.14.29-1.7l3.22-3.178a2.767 2.767 0 001.55.306 2.792 2.792 0 001.72-.808c.97-.97 2.25-1.5 3.64-1.65zM13.17 4.232h.002A4.688 4.688 0 0115.71 3.5c.914 0 1.802.253 2.55.75l.007.004.006.004c2.663 1.73 2.935 5.3.829 7.409a4.827 4.827 0 01-2.874 1.372c-1.665.18-3.285.826-4.539 2.08-.255.255-.587.381-.919.381-.326 0-.65-.122-.91-.38l-.99-.99-.004-.006c-.471-.466-.527-1.282.075-1.883l.03-.03c1.209-1.21 1.825-2.786 1.982-4.384v-.008c.13-1.377.86-2.715 2.218-3.587z"
          />
        </G>
      )}
    </Svg>
  );
}
