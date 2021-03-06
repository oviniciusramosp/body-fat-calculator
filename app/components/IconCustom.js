import * as React from "react";
import colors from "../config/colors";
import { View } from "react-native";
// Icons Available
import IconWeight from "../assets/icons/IconWeight";
import IconHeight from "../assets/icons/IconHeight";
import IconCake from "../assets/icons/IconCake";
import IconGenderMale from "../assets/icons/IconGenderMale";
import IconGenderFemale from "../assets/icons/IconGenderFemale";
import IconGenders from "../assets/icons/IconGenders";
import IconArrow from "../assets/icons/IconArrow";
import IconPlaceholder from "../assets/icons/IconPlaceholder";
import IconFire from "../assets/icons/IconFire";
import IconFaceSerious from "../assets/icons/IconFaceSerious";
import IconChevron from "../assets/icons/IconChevron";
import IconMinus from "../assets/icons/IconMinus";
import IconPlus from "../assets/icons/IconPlus";
import IconPause from "../assets/icons/IconPause";
import IconArrowCircle from "../assets/icons/IconArrowCircle";
import IconArrowCircleDouble from "../assets/icons/IconArrowCircleDouble";
import IconSkinny from "../assets/icons/IconSkinny";
import IconStrong from "../assets/icons/IconStrong";
import IconFat from "../assets/icons/IconFat";
import IconFakeSkinny from "../assets/icons/IconFakeSkinny";
import IconApple from "../assets/icons/IconApple";
import IconChicken from "../assets/icons/IconChicken";
import IconCroissant from "../assets/icons/IconCroissant";
import IconPeanuts from "../assets/icons/IconPeanuts";
import IconWaterCup from "../assets/icons/IconWaterCup";
import IconDownload from "../assets/icons/IconDownload";
import IconEdit from "../assets/icons/IconEdit";
import IconInfo from "../assets/icons/IconInfo";
import IconBread from "../assets/icons/IconBread";
import IconCalendar from "../assets/icons/IconCalendar";
import IconClose from "../assets/icons/IconClose";

export default function IconCustom({
  color = colors.primary,
  size = 24,
  name,
  rotate,
  filled = false,
  style,
}) {
  return (
    <View style={style}>
      {(() => {
        switch (name) {
          // A
          case "ic_apple":
            return (
              <IconApple
                color={color}
                size={size}
                filled={filled}
                rotate={rotate}
              />
            );
          case "ic_arrow":
            return (
              <IconArrow
                color={color}
                size={size}
                filled={filled}
                rotate={rotate}
              />
            );
          case "ic_arrow_circle":
            return (
              <IconArrowCircle
                color={color}
                size={size}
                filled={filled}
                rotate={rotate}
              />
            );
          case "ic_arrow_circle_double":
            return (
              <IconArrowCircleDouble
                color={color}
                size={size}
                filled={filled}
                rotate={rotate}
              />
            );
          // B
          case "ic_bread":
            return (
              <IconBread
                color={color}
                size={size}
                filled={filled}
                rotate={rotate}
              />
            );
          // C
          case "ic_cake":
            return (
              <IconCake
                color={color}
                size={size}
                filled={filled}
                rotate={rotate}
              />
            );
          case "ic_calendar":
            return (
              <IconCalendar
                color={color}
                size={size}
                filled={filled}
                rotate={rotate}
              />
            );
          case "ic_chevron":
            return (
              <IconChevron
                color={color}
                size={size}
                filled={filled}
                rotate={rotate}
              />
            );
          case "ic_chicken":
            return (
              <IconChicken
                color={color}
                size={size}
                filled={filled}
                rotate={rotate}
              />
            );
          case "ic_close":
            return (
              <IconClose
                color={color}
                size={size}
                filled={filled}
                rotate={rotate}
              />
            );
          case "ic_croissant":
            return (
              <IconCroissant
                color={color}
                size={size}
                filled={filled}
                rotate={rotate}
              />
            );
          // D
          case "ic_download":
            return (
              <IconDownload
                color={color}
                size={size}
                filled={filled}
                rotate={rotate}
              />
            );
          // E
          case "ic_edit":
            return (
              <IconEdit
                color={color}
                size={size}
                filled={filled}
                rotate={rotate}
              />
            );
          // F
          case "ic_face_serious":
            return (
              <IconFaceSerious
                color={color}
                size={size}
                filled={filled}
                rotate={rotate}
              />
            );
          case "ic_fake_skinny":
            return (
              <IconFakeSkinny
                color={color}
                size={size}
                filled={filled}
                rotate={rotate}
              />
            );
          case "ic_fat":
            return (
              <IconFat
                color={color}
                size={size}
                filled={filled}
                rotate={rotate}
              />
            );
          case "ic_female":
            return (
              <IconGenderFemale
                color={color}
                size={size}
                filled={filled}
                rotate={rotate}
              />
            );
          case "ic_fire":
            return (
              <IconFire
                color={color}
                size={size}
                filled={filled}
                rotate={rotate}
              />
            );
          // G
          case "ic_gender":
            return (
              <IconGenders
                color={color}
                size={size}
                filled={filled}
                rotate={rotate}
              />
            );
          // H
          case "ic_height":
            return (
              <IconHeight
                color={color}
                size={size}
                filled={filled}
                rotate={rotate}
              />
            );
          // I
          case "ic_info":
            return (
              <IconInfo
                color={color}
                size={size}
                filled={filled}
                rotate={rotate}
              />
            );
          // J
          // K
          // L
          // M
          case "ic_male":
            return (
              <IconGenderMale
                color={color}
                size={size}
                filled={filled}
                rotate={rotate}
              />
            );
          case "ic_minus":
            return (
              <IconMinus
                color={color}
                size={size}
                filled={filled}
                rotate={rotate}
              />
            );
          // N
          // O
          // P
          case "ic_pause":
            return (
              <IconPause
                color={color}
                size={size}
                filled={filled}
                rotate={rotate}
              />
            );
          case "ic_peanuts":
            return (
              <IconPeanuts
                color={color}
                size={size}
                filled={filled}
                rotate={rotate}
              />
            );
          case "ic_placeholder":
            return (
              <IconPlaceholder
                color={color}
                size={size}
                filled={filled}
                rotate={rotate}
              />
            );
          case "ic_plus":
            return (
              <IconPlus
                color={color}
                size={size}
                filled={filled}
                rotate={rotate}
              />
            );
          // Q
          // R
          // S
          case "ic_skinny":
            return (
              <IconSkinny
                color={color}
                size={size}
                filled={filled}
                rotate={rotate}
              />
            );
          case "ic_strong":
            return (
              <IconStrong
                color={color}
                size={size}
                filled={filled}
                rotate={rotate}
              />
            );
          // T
          // U
          // V
          // W
          case "ic_water_cup":
            return (
              <IconWaterCup
                color={color}
                size={size}
                filled={filled}
                rotate={rotate}
              />
            );
          case "ic_weight":
            return (
              <IconWeight
                color={color}
                size={size}
                filled={filled}
                rotate={rotate}
              />
            );
          // X
          // Y
          // Z

          default:
            return (
              <IconPlaceholder
                color={color}
                size={size}
                filled={filled}
                rotate={rotate}
              />
            );
        }
      })()}
    </View>
  );
}
