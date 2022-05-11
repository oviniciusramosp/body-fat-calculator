import {
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  View,
  Image,
} from "react-native";
import React, { useState } from "react";
import TextCustom from "../TextCustom";
import colors from "../../config/colors";
import ModalCustom from "../ModalCustom";
import PickerItemCustom from "./PickerItemCustom";
import IconCustom from "../IconCustom";

export default function PickerCustom({
  options,
  onChangeSelect,
  placeholder = "Selecionar",
  modalHeader,
  closeButton = false,
}) {
  const [content, setContent] = useState(placeholder);
  const [contentIcon, setContentIcon] = useState(null);
  const [contentIconRotate, setContentIconRotate] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [itemSelected, setItemSelected] = useState("");

  function renderOption(item) {
    return (
      <PickerItemCustom
        label={item.label}
        description={item.description}
        iconRotate={item.iconRotate}
        selected={item.id === itemSelected}
        icon={item.icon}
        onPress={() => {
          onChangeSelect(item.id);
          setContent(item.label);
          setContentIcon(item.icon);
          setContentIconRotate(item.iconRotate);
          setModalVisible(false);
          setItemSelected(item.id);
        }}
      />
    );
  }

  return (
    <SafeAreaView>
      <TouchableOpacity
        style={styles.picker}
        onPress={() => setModalVisible(true)}
      >
        <View style={styles.leftPickerLabel}>
          {contentIcon && (
            <IconCustom
              style={styles.icon}
              name={contentIcon}
              size={28}
              rotate={contentIconRotate}
              filled={true}
            />
          )}
          <TextCustom style={styles.pickerLabel} numberOfLines={1}>
            {content}
          </TextCustom>
        </View>
        <IconCustom
          name={"ic_chevron"}
          rotate={modalVisible ? 180 : 0}
          size={28}
        />
      </TouchableOpacity>
      <ModalCustom
        visible={modalVisible}
        header={modalHeader}
        onRequestClose={() => setModalVisible(false)}
        closeButton={closeButton}
        closeButtonFunction={() => setModalVisible(false)}
        style={styles.modalPicker}
      >
        <FlatList
          data={options}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => renderOption(item)}
          style={styles.list}
          ListFooterComponent={<View style={styles.maginItem} />}
          ListHeaderComponent={<View style={styles.maginItem} />}
        />
      </ModalCustom>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  picker: {
    flex: 1,
    borderColor: colors.fadedGrayLight,
    borderWidth: 1,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 11,
    height: 52,
  },
  leftPickerLabel: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    paddingRight: 26,
  },
  pickerLabel: {},
  modalPicker: {
    maxHeight: "90%",
  },
  list: {},
  maginItem: {
    height: 12,
  },
  icon: {
    marginRight: 12,
  },
  chevron: { height: 30, width: 30, marginLeft: 12 },
});
