import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StitchScreen from "../screens/main/StitchScreen";
import ExploreScreen from "../screens/main/ExploreScreen";
import ProfileScreen from "../screens/main/ProfileScreen";
import { COLORS } from "../theme";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }: any) => ({
        tabBarIcon: ({ color, size }: { color: string; size: number }) => {
          let iconName: any;
          if (route.name === "Stitch") iconName = "cut-outline";
          else if (route.name === "Explore") iconName = "compass-outline";
          else if (route.name === "Profile") iconName = "person-outline";
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.textLight,
        headerShown: false,
        headerStatusBarHeight: 10,
      })}
    >
      <Tab.Screen name="Stitch" component={StitchScreen} />
      <Tab.Screen name="Explore" component={ExploreScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
