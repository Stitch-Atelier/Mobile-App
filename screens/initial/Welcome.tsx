import React from "react";
import {
  View,
  Text,
  Image,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS, FONTS } from "../../theme";
import { useNavigation } from "@react-navigation/native"; // 👈 import hook

const Welcome = () => {
  const navigation = useNavigation(); // 👈 access navigation
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="white"
        barStyle="light-content" // change to "light-content" if needed
      />
      {/* Top Section with Centered Image */}
      <View style={styles.topContainer}>
        <Image
          source={require("../../assets/roll.jpg")} // update path to your image
          style={styles.image}
          resizeMode="contain"
        />
        <View style={styles.overlay}>
          <Text style={styles.title}>Welcome to</Text>
          <Text style={styles.subTitle}>STITCH Family</Text>
        </View>
      </View>

      {/* Bottom Section with Gradient */}
      <LinearGradient
        colors={[COLORS.primaryLight, COLORS.primaryDark]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.bottomContainer}
      >
        <Text style={styles.loginText}>LOGIN</Text>

        {/* Mobile Login Button */}
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("AuthStack" as never); // 👈 navigate
          }}
          style={styles.loginButton}
        >
          <Ionicons name="call" size={20} color="#fff" style={styles.icon} />
          <Text style={styles.loginButtonText}>
            LOGIN/SIGNUP WITH MOBILE NUMBER
          </Text>
        </TouchableOpacity>

        {/* Google Login Button */}
        {/* <TouchableOpacity style={[styles.loginButton, styles.googleButton]}>
          <AntDesign
            name="google"
            size={20}
            color="#DB4437"
            style={styles.icon}
          />
          <Text style={[styles.loginButtonText, { color: "#000" }]}>
            LOGIN WITH GOOGLE
          </Text>
        </TouchableOpacity> */}

        {/* Terms & Policy */}
        <Text style={styles.footerText}>
          By continuing you agree to our Terms & Privacy Policy
        </Text>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  topContainer: {
    flex: 0.6,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  image: {
    width: "100%",
    height: "70%",
  },
  overlay: {
    position: "absolute",
    bottom: 40,
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontFamily: FONTS.extraBold,
    color: "#fff",
  },
  subTitle: {
    fontSize: 36,
    fontFamily: FONTS.boldItalic,
    color: "#fff",
    marginTop: 4,
  },
  bottomContainer: {
    flex: 0.4,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden", // important for gradient within rounded corners
  },
  loginText: {
    fontSize: 32,
    fontFamily: FONTS.extraBold,
    color: COLORS.text,
    marginBottom: 15,
  },
  loginButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#5e42d3",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 30,
    width: "100%",
    justifyContent: "center",
    marginVertical: 8,
  },
  googleButton: {
    backgroundColor: "#fff",
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 14,
    fontFamily: FONTS.latoB,
  },
  icon: {
    marginRight: 8,
  },
  footerText: {
    fontSize: 16,
    fontFamily: FONTS.medium,
    color: "#f0f0f0",
    textAlign: "center",
    marginTop: 15,
  },
});
