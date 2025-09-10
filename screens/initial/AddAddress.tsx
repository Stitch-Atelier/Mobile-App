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

export default function AddAddress() {
  const navigation = useNavigation();
  const [Hno, setHno] = useState("");
  const [streetNo, setStreetNo] = useState("");
  const [locality, setLocality] = useState("");
  const [city, setCity] = useState("Rupnagar");
  const [pinCode, setPinCode] = useState("140001");
  const [country, setCountry] = useState("India");

  const handleNext = () => {
    if (Hno && streetNo && locality && city && pinCode && country) {
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
            <Text style={styles.title}>Add Address</Text>
          </Animatable.View>

          <Animatable.View
            animation="fadeInUp"
            duration={800}
            delay={200}
            style={styles.card}
          >
            {/* House No */}
            <View style={styles.inputRow}>
              <TextInput
                style={styles.inputFlex}
                placeholder="House No"
                placeholderTextColor={COLORS.black}
                value={Hno}
                onChangeText={setHno}
              />
            </View>

            {/* Street No */}
            <View style={styles.inputRow}>
              <TextInput
                style={styles.inputFlex}
                placeholder="Street No."
                placeholderTextColor={COLORS.black}
                value={streetNo}
                onChangeText={setStreetNo}
              />
            </View>

            {/* Locality */}
            <View style={styles.inputRow}>
              <TextInput
                style={styles.inputFlex}
                placeholder="Locality"
                placeholderTextColor={COLORS.black}
                value={locality}
                onChangeText={setLocality}
              />
            </View>

            {/* City */}
            <View style={styles.inputRow}>
              <TextInput
                style={styles.inputFlex}
                placeholder="City"
                placeholderTextColor={COLORS.black}
                value={city}
                onChangeText={setCity}
              />
            </View>

            {/* Pin Code */}
            <View style={styles.inputRow}>
              <TextInput
                style={styles.inputFlex}
                placeholder="Pin Code"
                placeholderTextColor={COLORS.black}
                value={pinCode}
                onChangeText={setPinCode}
                keyboardType="numeric"
              />
            </View>

            {/* Country */}
            <View style={styles.inputRow}>
              <TextInput
                style={styles.inputFlex}
                placeholder="Country"
                placeholderTextColor={COLORS.black}
                value={country}
                onChangeText={setCountry}
              />
            </View>

            {/* Next Button */}
            <TouchableOpacity style={styles.button} onPress={handleNext}>
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
    fontSize: 24,
    fontFamily: FONTS.latoB,
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
    marginBottom: 200,
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
