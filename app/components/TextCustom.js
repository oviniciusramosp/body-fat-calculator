import React from "react";
import { StyleSheet, Text } from "react-native";

import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import LoadingScreen from "../screens/LoadingScreen";

function TextCustom({
  children,
  style,
  fontWeight = "Regular",
  ...otherProps
}) {
  const [loaded] = useFonts({
    Inter: require("../assets/fonts/Inter-Regular.ttf"),
    InterSemiBold: require("../assets/fonts/Inter-SemiBold.ttf"),
  });

  if (!loaded) {
    return <LoadingScreen />;
  }

  return (
    <Text
      style={[
        fontWeight == "Semi Bold" ? styles.interSemiBold : styles.inter,
        style,
      ]}
      {...otherProps}
    >
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  inter: {
    fontFamily: "Inter",
  },
  interSemiBold: {
    fontFamily: "InterSemiBold",
  },
});

export default TextCustom;
