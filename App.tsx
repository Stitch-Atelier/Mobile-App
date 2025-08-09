import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthStack from "./navigation/AuthStack";
import MainTabs from "./navigation/MainTabs";
import * as Font from "expo-font";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = Font.useFonts({
    IncBold: require("./assets/fonts/Inconsolata-Bold.ttf"),
    IncExBold: require("./assets/fonts/Inconsolata-ExtraBold.ttf"),
    IncExLight: require("./assets/fonts/Inconsolata-ExtraLight.ttf"),
    IncLight: require("./assets/fonts/Inconsolata-Light.ttf"),
    IncMedium: require("./assets/fonts/Inconsolata-Medium.ttf"),
    IncRegular: require("./assets/fonts/Inconsolata-Regular.ttf"),
    IncSemiBold: require("./assets/fonts/Inconsolata-SemiBold.ttf"),
  });

  if (!fontsLoaded) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="AuthStack" component={AuthStack} />
        <Stack.Screen name="MainTabs" component={MainTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
