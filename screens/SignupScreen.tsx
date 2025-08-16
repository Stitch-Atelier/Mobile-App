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
import { Ionicons } from "@expo/vector-icons"; // 👈 for eye icon

export default function SignupScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);

  const handleLogin = () => {
    if (email && password && mobile && cPassword) {
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
          {/* Email */}
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor={COLORS.textLight}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />

          {/* Mobile with +91 */}
          <View style={styles.inputRow}>
            <Text style={styles.prefix}>+91</Text>
            <TextInput
              style={styles.inputFlex}
              placeholder="Mobile"
              placeholderTextColor={COLORS.textLight}
              value={mobile}
              onChangeText={setMobile}
              keyboardType="phone-pad"
            />
          </View>

          {/* Password */}
          <View style={styles.inputRow}>
            <TextInput
              style={styles.inputFlex}
              placeholder="Password"
              placeholderTextColor={COLORS.textLight}
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}
              style={styles.iconBtn}
            >
              <Ionicons
                name={showPassword ? "eye" : "eye-off"}
                size={22}
                color={COLORS.textLight}
              />
            </TouchableOpacity>
          </View>

          {/* Confirm Password */}
          <View style={styles.inputRow}>
            <TextInput
              style={styles.inputFlex}
              placeholder="Confirm Password"
              placeholderTextColor={COLORS.textLight}
              secureTextEntry={!showCPassword}
              value={cPassword}
              onChangeText={setCPassword}
            />
            <TouchableOpacity
              onPress={() => setShowCPassword(!showCPassword)}
              style={styles.iconBtn}
            >
              <Ionicons
                name={showCPassword ? "eye" : "eye-off"}
                size={22}
                color={COLORS.textLight}
              />
            </TouchableOpacity>
          </View>

          {/* Signup Button */}
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Signup</Text>
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
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 10,
    backgroundColor: COLORS.background,
    marginBottom: 15,
    paddingRight: 10,
  },
  inputFlex: {
    flex: 1,
    padding: 12,
    fontSize: 16,
    fontFamily: FONTS.regular,
    color: COLORS.text,
  },
  iconBtn: { padding: 6 },
  prefix: {
    paddingLeft: 12,
    paddingRight: 6,
    fontSize: 16,
    fontFamily: FONTS.medium,
    color: COLORS.text,
  },
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: 14,
    borderRadius: 10,
    marginTop: 10,
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
