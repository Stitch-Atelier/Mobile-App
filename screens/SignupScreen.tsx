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
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import * as Animatable from "react-native-animatable";
import { COLORS, FONTS } from "../theme";
import { useNavigation } from "@react-navigation/native";

export default function SignupScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email && password) {
      navigation.navigate("MainTabs" as never);
    } else {
      Alert.alert("Error", "Please fill all fields");
    }
  };

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
          <Text style={styles.subtitle}>Join Today</Text>
        </Animatable.View>

        <Animatable.View
          animation="fadeInUp"
          duration={800}
          delay={200}
          style={styles.card}
        >
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor={COLORS.textLight}
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor={COLORS.textLight}
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("Login" as never)}
          >
            <Text style={styles.link}>
              Already have an Account?{" "}
              <Text style={styles.linkHighlight}>Login</Text>
            </Text>
          </TouchableOpacity>
        </Animatable.View>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: { flex: 1 },
  container: { flex: 1, justifyContent: "center", paddingHorizontal: 20 },
  title: {
    fontSize: 32,
    fontFamily: FONTS.extraBold,
    color: "#fff",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#d1fae5",
    textAlign: "center",
    fontFamily: FONTS.regular,
    marginBottom: 20,
  },
  card: {
    backgroundColor: COLORS.surface,
    padding: 20,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    elevation: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    fontFamily: FONTS.regular,
    color: COLORS.text,
    marginBottom: 15,
    backgroundColor: COLORS.background,
  },
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: 14,
    borderRadius: 10,
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontFamily: FONTS.semiBold,
    fontSize: 16,
  },
  link: {
    textAlign: "center",
    marginTop: 20,
    color: COLORS.textLight,
    fontFamily: FONTS.light,
  },
  linkHighlight: { color: COLORS.primary, fontFamily: FONTS.medium },
});
