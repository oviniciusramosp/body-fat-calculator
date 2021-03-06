// react
import React, { useContext, useState, useEffect } from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
// expo libraries
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
// styles
import colors from "../config/colors";
// custom components
import Card from "../components/Card";
import FabButtonCustom from "../components/FabButtonCustom";
import Header from "../components/Header";
import IconCustom from "../components/IconCustom";
import TextInputCustom from "../components/TextInputCustom";
import TextCustom from "../components/TextCustom";
import ToggleItem from "../components/ToggleItem";
import ModalCustom from "../components/ModalCustom";
import ButtonLarge from "../components/ButtonLarge";
// data
import { UserData } from "../contexts/userdata";

function Step1({ navigation }) {
  const {
    numberWithDot,
    user,
    setUserGender,
    setUserHeight,
    setUserWeight,
    setUserAge,
    setUserTMB,
  } = useContext(UserData);

  const [modalVisible, setModalVisible] = useState(false);
  const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(true);

  // Calculate TMB
  useEffect(() => {
    if (user.height > 0 && user.weight > 0 && user.age > 10) {
      if (user.gender == "male") {
        const maleTMB = Math.round(
          10 * user.weight + 6.25 * user.height - 5 * user.age + 5
        );
        setUserTMB(maleTMB);
      } else {
        const femaleTMB = Math.round(
          10 * user.weight + 6.25 * user.height - 5 * user.age - 161
        );
        setUserTMB(femaleTMB);
      }
    } else {
      setUserTMB(0);
    }
  }, [user.weight, user.height, user.age, user.gender]);

  // Response Messages + Icon
  const [response, setResponse] = useState({
    label: "Selecione um Gênero",
    icon: "ic_gender",
  });
  useEffect(() => {
    // gender not selected
    if (user.gender === "none") {
      setIsNextButtonDisabled(true);
      setResponse({ label: "Selecione um Gênero", icon: "ic_gender" });
      return;
    }
    // exagerated numbers
    else if (
      user.height > 250 ||
      user.weight > 350 ||
      user.age > 110 ||
      (user.age > 0 && user.age < 10)
    ) {
      setIsNextButtonDisabled(true);
      setResponse({
        label: "Eu sou uma piada para você?",
        icon: "ic_face_serious",
      });
      return;
    }
    // low numbers
    else if (
      user.height < 1 ||
      user.height == undefined ||
      user.weight < 1 ||
      user.weight == undefined ||
      user.age < 1 ||
      user.age == undefined
    ) {
      setIsNextButtonDisabled(true);
      setResponse({ label: "Preencha os Campos", icon: "ic_edit" });
      return;
    }
    // all valid
    else {
      setIsNextButtonDisabled(false);
      setResponse({
        label: numberWithDot(user.tmb) + " kcal",
        icon: "ic_fire",
      });
      return;
    }
  }, [user.weight, user.height, user.age, user.gender, user.tmb]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.list}
        keyboardShouldPersistTaps="handled"
      >
        <View>
          {/* Gender */}
          <Card>
            <Header>Selecione seu Gênero</Header>
            <View style={styles.row}>
              <ToggleItem
                onPress={() => setUserGender("male")}
                isSelected={user.gender == "male" ? true : false}
                icon="ic_male"
                margin={true}
              />
              <ToggleItem
                onPress={() => setUserGender("female")}
                icon="ic_female"
                isSelected={user.gender == "female" ? true : false}
              />
            </View>
          </Card>
          {/* Medidas */}
          <Card>
            <Header>Suas Medidas</Header>
            <View style={styles.row}>
              <TextInputCustom
                label="Altura"
                maxLength={3}
                placeholder="000"
                keyboardType="number-pad"
                returnKeyType="done"
                textAlign="center"
                value={user.height}
                onChangeText={(value) => setUserHeight(value)}
                sufix="cm"
                icon="ic_height"
              />
              <View style={styles.margin} />
              <TextInputCustom
                label="Peso"
                maxLength={3}
                placeholder="000"
                keyboardType="number-pad"
                returnKeyType="done"
                textAlign="center"
                value={user.weight}
                onChangeText={(value) => setUserWeight(value)}
                sufix="kg"
                icon="ic_weight"
              />
            </View>
            <View style={styles.margin} />
            <View style={styles.row}>
              <TextInputCustom
                label="Idade"
                maxLength={3}
                placeholder="00"
                keyboardType="number-pad"
                returnKeyType="done"
                textAlign="center"
                value={user.age}
                onChangeText={(value) => setUserAge(value)}
                sufix="anos"
                icon="ic_cake"
              />
              <View style={styles.margin} />
              <View style={styles.whiteSpace} />
            </View>
          </Card>
          {/* Taxa Metabólica Basal */}
          <Card>
            <Header
              style={styles.colorPrimary}
              hasButton={true}
              buttonIcon={"ic_info"}
              buttonAction={() => setModalVisible(true)}
            >
              Taxa Metabólica Basal
            </Header>
            <View style={styles.tbmContent}>
              <View style={styles.tbmIcon}>
                <IconCustom name={response.icon} size="28" />
              </View>
              <TextCustom fontWeight="Semi Bold" style={styles.tbmLabel}>
                {response.label}
              </TextCustom>
            </View>
          </Card>
        </View>
      </ScrollView>
      <ModalCustom
        visible={modalVisible}
        closeButton={false}
        onRequestClose={() => setModalVisible(false)}
        closeButtonFunction={() => setModalVisible(false)}
      >
        <View style={styles.modalContent}>
          <TextCustom marginBottom={24}>
            A Taxa Metabólica Basal (
            <TextCustom fontWeight="Semi Bold" color={colors.primary}>
              TMB
            </TextCustom>
            ) é a quantidade de energia necessária para a manutenção das funções
            vitais do organismo, como respiração, batimentos cardíacos e
            controle da temperatura corporal.
          </TextCustom>
          <TextCustom marginBottom={24}>
            O valor estima o gasto energético de um dia em total repouso.
          </TextCustom>
          <ButtonLarge onPress={() => setModalVisible(false)}>
            Fechar
          </ButtonLarge>
        </View>
      </ModalCustom>
      <View>
        <LinearGradient
          style={styles.fab}
          colors={colors.grayLightGradient}
          locations={[0, 0.5]}
        >
          <FabButtonCustom
            disabled={isNextButtonDisabled}
            onPress={() =>
              navigation.navigate("Step 2", {
                userGender: user.gender,
                userWeight: user.weight,
                userAge: user.age,
              })
            }
            icon={"ic_arrow"}
          />
        </LinearGradient>
      </View>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grayLight,
  },
  list: {
    padding: 24,
    paddingBottom: 72 + 48,
  },
  row: {
    flex: 1,
    flexDirection: "row",
  },
  margin: {
    height: 24,
    width: 12,
  },
  whiteSpace: {
    flex: 1,
  },
  fab: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: 24,
    position: "absolute",
    bottom: 0,
  },
  colorPrimary: {
    color: colors.primary,
  },
  tbmContent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  tbmIcon: {
    borderColor: colors.fadedGrayLight,
    borderWidth: 1,
    height: 52,
    width: 52,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 52,
    marginRight: 24,
  },
  emojiIcon: {
    fontSize: 24,
  },
  tbmLabel: {
    fontSize: 18,
    flex: 1,
  },
  modalContent: {
    padding: 24,
  },
});

export default Step1;
