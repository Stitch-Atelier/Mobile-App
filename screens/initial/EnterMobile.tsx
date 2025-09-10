import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Platform,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import React from "react";
import StitchHeader from "../../components/StitchHeader";
import { COLORS, FONTS } from "../../theme";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";

const EnterMobile = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.safeArea}>
      <StitchHeader />
      <View style={styles.mainView}>
        <Animatable.View
          animation="fadeInUp"
          duration={800}
          delay={200}
          style={styles.card}
        >
          <Text style={styles.enterNumber}>Please enter your Number</Text>
          <View style={styles.inputRow}>
            <Text style={styles.countryCode}>+91 </Text>
            <TextInput
              style={styles.inputFlex}
              placeholder="Mobile"
              placeholderTextColor={COLORS.black}
              // value={userVal}
              // onChangeText={setUserVal}
              keyboardType="phone-pad"
              autoCapitalize="none"
            />
          </View>

          {/* Password Field with Toggle */}

          <TouchableOpacity
            onPress={() => navigation.navigate("EnterOTP" as never)}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </Animatable.View>
      </View>
    </SafeAreaView>
  );
};

export default EnterMobile;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.black,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0.1,
  },
  mainView: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 400,
  },
  enterNumber: {
    fontSize: 18,
    fontFamily: FONTS.latoR,
    color: COLORS.white,
    textAlign: "center",
    marginBottom: 20,
  },
  card: {
    backgroundColor: COLORS.black,
    width: "90%",
    padding: 20,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    elevation: 5,
  },
  countryCode: {
    fontSize: 16,
    fontFamily: FONTS.medium,
    color: COLORS.black,
    marginLeft: 10,
    marginRight: 6,
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    marginBottom: 15,
    paddingRight: 10,
  },
  inputFlex: {
    flex: 1,
    padding: 12,
    fontSize: 16,
    fontFamily: FONTS.regular,
    color: COLORS.black,
  },
  button: {
    backgroundColor: COLORS.white,
    paddingVertical: 12,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonText: {
    textAlign: "center",
    color: COLORS.black,
    fontFamily: FONTS.latoB,
    fontSize: 16,
  },
});
