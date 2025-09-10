import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { COLORS, FONTS } from "../../theme";

const GetStarted = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/getstarted.jpg")}
          style={styles.backgroundImage}
        />
      </View>

      {/* Overlay Content */}
      <View style={styles.overlay}>
        <Text style={styles.welcomeText}>Tailoring Reimagined</Text>
        <Text style={styles.welcomeSubText}>Period</Text>

        <TouchableOpacity
          onPress={() => navigation.navigate("Welcome" as never)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center", // center vertically
    alignItems: "center", // center horizontally
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    // resizeMode: "contain", // ✅ keep full image visible
  },
  overlay: {
    position: "absolute",
    bottom: 120, // stays above bottom nav buttons
    left: 0,
    right: 0,
    alignItems: "center",
  },
  welcomeText: {
    fontSize: 28,
    fontFamily: FONTS.boldItalic,
    color: COLORS.white,
    marginBottom: 10,
    textAlign: "center",
  },
  welcomeSubText: {
    fontSize: 28,
    fontFamily: FONTS.medium,
    color: COLORS.white,
    marginBottom: 20,
    textAlign: "center",
  },
  button: {
    backgroundColor: COLORS.black,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 30,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: FONTS.latoB,
    color: COLORS.white,
  },
});
