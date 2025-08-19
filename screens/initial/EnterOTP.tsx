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
import React, { useState, useRef } from "react";
import StitchHeader from "../../components/StitchHeader";
import { COLORS, FONTS } from "../../theme";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";

const EnterOTP = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = useRef<TextInput[]>([]);

  const navigation = useNavigation();

  const handleChange = (text: string, index: number) => {
    if (/^\d$/.test(text)) {
      const newOtp = [...otp];
      newOtp[index] = text;
      setOtp(newOtp);

      // Move to next input automatically
      if (index < 3) {
        inputRefs.current[index + 1]?.focus();
      }
    } else if (text === "") {
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);
    }
  };

  const handleVerify = () => {
    const enteredOtp = otp.join("");
    console.log("Entered OTP:", enteredOtp);
    navigation.navigate("Name" as never);
    // verify logic here
  };

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
          <Text style={styles.enterNumber}>
            Please enter the OTP sent to your number
          </Text>

          {/* Mobile Number Display */}
          <Text style={styles.mobileNumber}>+91 9876543210</Text>

          {/* OTP Input Fields */}
          <View style={styles.otpRow}>
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                ref={(el) => {
                  if (el) inputRefs.current[index] = el;
                }}
                style={styles.otpInput}
                keyboardType="number-pad"
                maxLength={1}
                value={digit}
                onChangeText={(text) => handleChange(text, index)}
              />
            ))}
          </View>

          {/* Verify Button */}
          <TouchableOpacity style={styles.button} onPress={handleVerify}>
            <Text style={styles.buttonText}>Verify</Text>
          </TouchableOpacity>
        </Animatable.View>
      </View>
    </SafeAreaView>
  );
};

export default EnterOTP;

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
  },
  enterNumber: {
    fontSize: 18,
    fontFamily: FONTS.latoR,
    color: COLORS.white,
    marginBottom: 10,
    textAlign: "center",
  },
  mobileNumber: {
    fontSize: 16,
    fontFamily: FONTS.medium,
    color: COLORS.white,
    marginBottom: 20,
    textAlign: "center",
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
    alignItems: "center",
  },
  otpRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    width: "80%",
  },
  otpInput: {
    borderWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    textAlign: "center",
    fontSize: 20,
    fontFamily: FONTS.latoB,
    width: 50,
    height: 55,
  },
  button: {
    backgroundColor: COLORS.white,
    paddingVertical: 12,
    borderRadius: 10,
    marginTop: 5,
    width: "100%",
  },
  buttonText: {
    textAlign: "center",
    color: COLORS.black,
    fontFamily: FONTS.latoB,
    fontSize: 16,
  },
});
