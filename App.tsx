import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Font from "expo-font";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import { COLORS, FONTS } from "./theme";

export type RootStackParamList = {
  Login: undefined;
  Signup: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const [fontsLoaded] = Font.useFonts({
    [FONTS.bold]: require("./assets/fonts/Inconsolata-Bold.ttf"),
    [FONTS.extraBold]: require("./assets/fonts/Inconsolata-ExtraBold.ttf"),
    [FONTS.extraLight]: require("./assets/fonts/Inconsolata-ExtraLight.ttf"),
    [FONTS.light]: require("./assets/fonts/Inconsolata-Light.ttf"),
    [FONTS.medium]: require("./assets/fonts/Inconsolata-Medium.ttf"),
    [FONTS.regular]: require("./assets/fonts/Inconsolata-Regular.ttf"),
    [FONTS.semiBold]: require("./assets/fonts/Inconsolata-SemiBold.ttf"),
  });

  if (!fontsLoaded) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
