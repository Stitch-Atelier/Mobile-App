import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native"; // 👈 import hook
import { COLORS, FONTS } from "../../theme";

const GetStarted = () => {
  const navigation = useNavigation(); // 👈 access navigation

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../../assets/getstarted.jpg")}
        style={styles.backgroundImage}
      />

      {/* Overlay Content */}
      <View style={styles.overlay}>
        <Text style={styles.welcomeText}>Tailoring Reimagined</Text>
        <Text style={styles.welcomeSubText}>Period</Text>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Welcome" as never); // 👈 navigate
          }}
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
  backgroundImage: {
    flex: 1, // fills the SafeArea only
    width: "100%",
    resizeMode: "cover",
  },
  overlay: {
    position: "absolute",
    bottom: 60, // keeps it above bottom nav area
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
    fontSize: 20,
    fontFamily: FONTS.medium,
    color: COLORS.white,
    marginBottom: 20,
    textAlign: "center",
  },
  button: {
    backgroundColor: COLORS.black, // changed for better contrast
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 30,
    elevation: 4, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: FONTS.semiBold,
    color: COLORS.white,
  },
});
