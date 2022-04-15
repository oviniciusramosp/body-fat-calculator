import React, { useState, useRef } from "react";
import {
  TextInput,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import colors from "../config/colors";

function TextInputCustom({ children, icon, sufix, ...otherProps }) {
  const [content, onChangeContent] = useState();
  const [isActive, setActive] = useState(false);
  const textInputContent = useRef();

  function focusInput() {
    textInputContent.current.focus();
  }

  return (
    <TouchableOpacity
      style={styles.inputWithLabel}
      onPress={focusInput}
      activeOpacity={1}
    >
      <Text style={styles.label}>{children}</Text>
      <View
        style={[
          styles.input,
          isActive === true ? styles.inputFocus : styles.inpuinputUnfocus,
        ]}
      >
        {icon && <Image style={styles.icon} source={icon} />}
        <TextInput
          style={styles.inputText}
          onChangeText={onChangeContent}
          ref={textInputContent}
          value={content}
          maxLength={3}
          {...otherProps}
          onFocus={() => setActive(true)}
          onBlur={() => setActive(false)}
        />

        {sufix && <Text>{sufix}</Text>}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.grayLight,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 11,
    borderWidth: 2,
    borderColor: colors.grayLight,
    height: 48,
  },
  inputText: {
    color: colors.grayDark,
    paddingRight: 4,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 16,
    height: "100%",
    marginLeft: 12,
  },
  inputFocus: {
    borderWidth: 2,
    borderColor: colors.primary,
    height: 48,
  },
  inputUnfocus: {},
  inputWithLabel: {
    flex: 1,
    flexDirection: "column",
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 16,
    marginBottom: 6,
    color: colors.grayDark,
  },
  icon: {
    height: 30,
    width: 30,
  },
});

export default TextInputCustom;
