import * as React from "react";
import Svg, { Path, G } from "react-native-svg";

export default function IconPlus({ size = 24, color, filled, rotate = 0 }) {
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
          <Path d="M12 16.75c.217 0 .396-.07.538-.212A.731.731 0 0012.75 16v-3.25h3.275a.728.728 0 00.725-.75.731.731 0 00-.212-.538.731.731 0 00-.538-.212h-3.25V7.975A.73.73 0 0012 7.25a.726.726 0 00-.75.75v3.25H7.975a.73.73 0 00-.725.75.726.726 0 00.75.75h3.25v3.275a.728.728 0 00.75.725zm0 4.75a9.263 9.263 0 01-3.712-.75 9.58 9.58 0 01-3.013-2.025 9.58 9.58 0 01-2.025-3.013A9.263 9.263 0 012.5 12c0-1.317.25-2.554.75-3.713a9.583 9.583 0 012.025-3.012A9.58 9.58 0 018.288 3.25 9.263 9.263 0 0112 2.5a9.27 9.27 0 013.713.75 9.583 9.583 0 013.012 2.025 9.583 9.583 0 012.025 3.012A9.27 9.27 0 0121.5 12c0 1.317-.25 2.554-.75 3.712a9.58 9.58 0 01-2.025 3.013 9.583 9.583 0 01-3.012 2.025A9.27 9.27 0 0112 21.5z" />
        </G>
      ) : (
        <G>
          <Path d="M12 16.75c.217 0 .396-.07.538-.212A.731.731 0 0012.75 16v-3.25h3.275a.728.728 0 00.725-.75.731.731 0 00-.212-.538.731.731 0 00-.538-.212h-3.25V7.975A.73.73 0 0012 7.25a.726.726 0 00-.75.75v3.25H7.975a.73.73 0 00-.725.75.726.726 0 00.75.75h3.25v3.275a.728.728 0 00.75.725zm0 4.75a9.263 9.263 0 01-3.712-.75 9.58 9.58 0 01-3.013-2.025 9.58 9.58 0 01-2.025-3.013A9.263 9.263 0 012.5 12c0-1.317.25-2.554.75-3.713a9.583 9.583 0 012.025-3.012A9.58 9.58 0 018.288 3.25 9.263 9.263 0 0112 2.5a9.27 9.27 0 013.713.75 9.583 9.583 0 013.012 2.025 9.583 9.583 0 012.025 3.012A9.27 9.27 0 0121.5 12c0 1.317-.25 2.554-.75 3.712a9.58 9.58 0 01-2.025 3.013 9.583 9.583 0 01-3.012 2.025A9.27 9.27 0 0112 21.5zm0-1.5c2.217 0 4.104-.779 5.663-2.337C19.221 16.104 20 14.217 20 12s-.779-4.104-2.337-5.663C16.104 4.779 14.217 4 12 4s-4.104.779-5.662 2.337C4.779 7.896 4 9.783 4 12s.78 4.104 2.338 5.663C7.896 19.221 9.783 20 12 20z" />
        </G>
      )}
    </Svg>
  );
}
