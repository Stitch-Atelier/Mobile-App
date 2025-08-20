import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EnterMobile from "../screens/initial/EnterMobile";
import EnterOTP from "../screens/initial/EnterOTP";
import Name from "../screens/initial/Name";
import MainTabs from "./MainTabs";
export type AuthStackParamList = {
  EnterMobile: undefined;
  EnterOTP: undefined;
  Name: undefined;
  MainTabs: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="EnterMobile" component={EnterMobile} />
      <Stack.Screen name="EnterOTP" component={EnterOTP} />
      <Stack.Screen name="Name" component={Name} />
      <Stack.Screen name="MainTabs" component={MainTabs} />
    </Stack.Navigator>
  );
}
