import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthStack from "./navigation/AuthStack";
import MainTabs from "./navigation/MainTabs";
import * as Font from "expo-font";
import SplashScreen from "./screens/SplashScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  const [fontsLoaded] = Font.useFonts({
    PlayBold: require("./assets/fonts/Playfair-Bold.ttf"),
    PlayBoldI: require("./assets/fonts/Playfair-BoldItalic.ttf"),
    PlayExtraB: require("./assets/fonts/Playfair-ExtraBold.ttf"),
    PlayI: require("./assets/fonts/Playfair-Italic.ttf"),
    PlayLight: require("./assets/fonts/Playfair-Light.ttf"),
    PlayLightI: require("./assets/fonts/Playfair-LightItalic.ttf"),
    PlayMedium: require("./assets/fonts/Playfair-Medium.ttf"),
    PlayMediumI: require("./assets/fonts/Playfair-MediumItalic.ttf"),
    PlayRegular: require("./assets/fonts/Playfair-Regular.ttf"),
    PlaySemiBold: require("./assets/fonts/Playfair-SemiBold.ttf"),
    PlaySemiBoldI: require("./assets/fonts/Playfair-SemiBoldItalic.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      // wait 1 second before hiding splash
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null; // or a loading indicator
  }

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* 👉 Replace this check with your auth logic */}
        {/* <Stack.Screen name="AuthStack" component={AuthStack} /> */}
        <Stack.Screen name="MainTabs" component={MainTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
