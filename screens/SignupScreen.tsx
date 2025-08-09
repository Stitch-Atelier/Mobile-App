import React from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import * as Animatable from "react-native-animatable";
import { RootStackParamList } from "../App";
import { COLORS, FONTS } from "../theme";

type SignupScreenNavProp = NativeStackNavigationProp<
  RootStackParamList,
  "Signup"
>;

export default function SignupScreen() {
  const navigation = useNavigation<SignupScreenNavProp>();

  return (
    <LinearGradient
      colors={[COLORS.primary, COLORS.primaryDark]}
      style={styles.gradient}
    >
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <Animatable.View animation="fadeInDown" duration={1000}>
          <Text style={styles.title}>Create Account</Text>
          <Text style={styles.subtitle}>Join us today</Text>
        </Animatable.View>

        <Animatable.View
          animation="fadeInUp"
          duration={800}
          delay={200}
          style={styles.card}
        >
          <TextInput
            style={styles.input}
            placeholder="Name"
            placeholderTextColor={COLORS.textLight}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor={COLORS.textLight}
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor={COLORS.textLight}
            secureTextEntry
          />

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.link}>
              Already have an account?{" "}
              <Text style={styles.linkHighlight}>Login</Text>
            </Text>
          </TouchableOpacity>
        </Animatable.View>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontFamily: FONTS.extraBold,
    color: COLORS.surface,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    fontFamily: FONTS.regular,
    color: "#d1fae5",
    textAlign: "center",
    marginTop: 4,
    marginBottom: 20,
  },
  card: {
    backgroundColor: COLORS.surface,
    padding: 20,
    borderRadius: 20,
    shadowColor: COLORS.text,
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    elevation: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 16,
    fontFamily: FONTS.regular,
    marginBottom: 14,
    backgroundColor: COLORS.background,
    color: COLORS.text,
  },
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: 14,
    borderRadius: 10,
    marginTop: 6,
  },
  buttonText: {
    color: COLORS.surface,
    textAlign: "center",
    fontFamily: FONTS.semiBold,
    fontSize: 16,
  },
  link: {
    textAlign: "center",
    marginTop: 16,
    color: COLORS.textLight,
    fontFamily: FONTS.light,
  },
  linkHighlight: {
    color: COLORS.primary,
    fontFamily: FONTS.medium,
  },
});
