import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import LoginScreen from "../screens/auth/LoginScreen";
// import SignupScreen from "../screens/auth/SignupScreen";
import EnterMobile from "../screens/auth/EnterMobile";
import EnterOTP from "../screens/auth/EnterOTP";
import Name from "../screens/auth/Name";
export type AuthStackParamList = {
  EnterMobile: undefined;
  EnterOTP: undefined;
  Name: undefined;
  // Login: undefined;
  // Signup: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="EnterMobile" component={EnterMobile} />
      <Stack.Screen name="EnterOTP" component={EnterOTP} />
      <Stack.Screen name="Name" component={Name} />
      {/* <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="Login" component={LoginScreen} /> */}
    </Stack.Navigator>
  );
}
