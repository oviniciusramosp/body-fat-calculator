import * as React from "react";
import Svg, { Path, G } from "react-native-svg";

export default function IconHeight({ size = "24", color, filled }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      {filled ? (
        <G>
          <Path d="M5 22C4.71667 22 4.479 21.904 4.287 21.712C4.09567 21.5207 4 21.2833 4 21C4 20.7167 4.09567 20.4793 4.287 20.288C4.479 20.096 4.71667 20 5 20H19C19.2833 20 19.5207 20.096 19.712 20.288C19.904 20.4793 20 20.7167 20 21C20 21.2833 19.904 21.5207 19.712 21.712C19.5207 21.904 19.2833 22 19 22H5ZM5 4C4.71667 4 4.479 3.904 4.287 3.712C4.09567 3.52067 4 3.28333 4 3C4 2.71667 4.09567 2.479 4.287 2.287C4.479 2.09567 4.71667 2 5 2H19C19.2833 2 19.5207 2.09567 19.712 2.287C19.904 2.479 20 2.71667 20 3C20 3.28333 19.904 3.52067 19.712 3.712C19.5207 3.904 19.2833 4 19 4H5ZM12 18.575C11.8667 18.575 11.7417 18.554 11.625 18.512C11.5083 18.4707 11.4 18.4 11.3 18.3L8.675 15.675C8.49167 15.4917 8.4 15.2667 8.4 15C8.4 14.7333 8.5 14.5 8.7 14.3C8.88333 14.1167 9.11233 14.025 9.387 14.025C9.66233 14.025 9.9 14.1167 10.1 14.3L11 15.15V8.85L10.1 9.725C9.9 9.90833 9.66667 10 9.4 10C9.13333 10 8.9 9.9 8.7 9.7C8.51667 9.51667 8.425 9.28333 8.425 9C8.425 8.71667 8.51667 8.48333 8.7 8.3L11.3 5.7C11.4 5.6 11.5083 5.52933 11.625 5.488C11.7417 5.446 11.8667 5.425 12 5.425C12.1333 5.425 12.2583 5.446 12.375 5.488C12.4917 5.52933 12.6 5.6 12.7 5.7L15.325 8.325C15.5083 8.50833 15.6 8.73333 15.6 9C15.6 9.26667 15.5 9.5 15.3 9.7C15.1167 9.88333 14.8877 9.975 14.613 9.975C14.3377 9.975 14.1 9.88333 13.9 9.7L13 8.85V15.15L13.9 14.275C14.1 14.0917 14.3333 14 14.6 14C14.8667 14 15.1 14.1 15.3 14.3C15.4833 14.4833 15.575 14.7167 15.575 15C15.575 15.2833 15.4833 15.5167 15.3 15.7L12.7 18.3C12.6 18.4 12.4917 18.4707 12.375 18.512C12.2583 18.554 12.1333 18.575 12 18.575Z" />
        </G>
      ) : (
        <G>
          <Path d="M5 21.75C4.78333 21.75 4.60433 21.6793 4.463 21.538C4.321 21.396 4.25 21.2167 4.25 21C4.25 20.7833 4.321 20.604 4.463 20.462C4.60433 20.3207 4.78333 20.25 5 20.25H19C19.2167 20.25 19.396 20.3207 19.538 20.462C19.6793 20.604 19.75 20.7833 19.75 21C19.75 21.2167 19.6793 21.396 19.538 21.538C19.396 21.6793 19.2167 21.75 19 21.75H5ZM5 3.75C4.78333 3.75 4.60433 3.679 4.463 3.537C4.321 3.39567 4.25 3.21667 4.25 3C4.25 2.78333 4.321 2.604 4.463 2.462C4.60433 2.32067 4.78333 2.25 5 2.25H19C19.2167 2.25 19.396 2.32067 19.538 2.462C19.6793 2.604 19.75 2.78333 19.75 3C19.75 3.21667 19.6793 3.39567 19.538 3.537C19.396 3.679 19.2167 3.75 19 3.75H5ZM12 18.275C11.8833 18.275 11.771 18.254 11.663 18.212C11.5543 18.1707 11.4583 18.1083 11.375 18.025L8.85 15.5C8.71667 15.3667 8.65 15.2 8.65 15C8.65 14.8 8.725 14.625 8.875 14.475C9.025 14.325 9.2 14.25 9.4 14.25C9.6 14.25 9.775 14.325 9.925 14.475L11.25 15.775V8.225L9.925 9.55C9.775 9.68333 9.6 9.75 9.4 9.75C9.2 9.75 9.025 9.675 8.875 9.525C8.725 9.375 8.65 9.2 8.65 9C8.65 8.8 8.725 8.625 8.875 8.475L11.375 5.975C11.4583 5.89167 11.5543 5.829 11.663 5.787C11.771 5.74567 11.8833 5.725 12 5.725C12.1167 5.725 12.2293 5.74567 12.338 5.787C12.446 5.829 12.5417 5.89167 12.625 5.975L15.15 8.5C15.2833 8.63333 15.35 8.8 15.35 9C15.35 9.2 15.275 9.375 15.125 9.525C14.975 9.675 14.8 9.75 14.6 9.75C14.4 9.75 14.225 9.675 14.075 9.525L12.75 8.225V15.775L14.075 14.45C14.225 14.3167 14.4 14.25 14.6 14.25C14.8 14.25 14.975 14.325 15.125 14.475C15.275 14.625 15.35 14.8 15.35 15C15.35 15.2 15.275 15.375 15.125 15.525L12.625 18.025C12.5417 18.1083 12.446 18.1707 12.338 18.212C12.2293 18.254 12.1167 18.275 12 18.275Z" />
        </G>
      )}
    </Svg>
  );
}
