import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Alert,
  StatusBar,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import * as Animatable from "react-native-animatable";
import { COLORS, FONTS } from "../../theme";
import { useNavigation } from "@react-navigation/native";
import StitchHeader from "../../components/StitchHeader";

export default function Name() {
  const navigation = useNavigation();
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");

  const handleLogin = () => {
    if (fName && lName) {
      navigation.navigate("MainTabs" as never);
    } else {
      Alert.alert("Error", "Please fill all fields");
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <LinearGradient
        colors={[COLORS.black, COLORS.black]}
        style={styles.gradient}
      >
        <StitchHeader />
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === "ios" ? "padding" : undefined}
        >
          <Animatable.View animation="fadeInDown" duration={1000}>
            <Text style={styles.title}>What's your Name</Text>
          </Animatable.View>

          <Animatable.View
            animation="fadeInUp"
            duration={800}
            delay={200}
            style={styles.card}
          >
            <View style={styles.inputRow}>
              <TextInput
                style={styles.inputFlex}
                placeholder="First Name"
                placeholderTextColor={COLORS.black}
                value={fName}
                onChangeText={setFName}
                keyboardType="default"
                autoCapitalize="none"
              />
            </View>
            <View style={styles.inputRow}>
              <TextInput
                style={styles.inputFlex}
                placeholder="Last Name"
                placeholderTextColor={COLORS.black}
                value={lName}
                onChangeText={setLName}
                keyboardType="default"
                autoCapitalize="none"
              />
            </View>

            {/* Login Button */}
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          </Animatable.View>
        </KeyboardAvoidingView>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.black,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0.1,
  },
  gradient: { flex: 1 },
  container: { flex: 1, justifyContent: "center", paddingHorizontal: 20 },
  title: {
    fontSize: 32,
    fontFamily: FONTS.extraBold,
    color: COLORS.white,
    textAlign: "center",
    marginBottom: 12,
  },

  card: {
    backgroundColor: COLORS.black,
    padding: 24,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 10,
    elevation: 6,
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 12,
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
  countryCode: {
    fontSize: 16,
    fontFamily: FONTS.medium,
    color: COLORS.black,
    marginLeft: 12,
    marginRight: 6,
  },
  iconBtn: { padding: 6 },
  button: {
    backgroundColor: COLORS.white,
    paddingVertical: 14,
    borderRadius: 12,
    marginTop: 10,
  },
  buttonText: {
    textAlign: "center",
    color: COLORS.black,
    fontFamily: FONTS.latoB,
    fontSize: 16,
  },
});
