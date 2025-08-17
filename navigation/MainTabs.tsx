import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StitchScreen from "../screens/main/StitchScreen";
import ExploreScreen from "../screens/main/ExploreScreen";
import ProfileScreen from "../screens/main/ProfileScreen";
import { COLORS } from "../theme";
import { Ionicons } from "@expo/vector-icons";
import TabBar from "../components/TabBar";

const Tab = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props) => <TabBar {...props} />}
    >
      <Tab.Screen name="Explore" component={ExploreScreen} />
      <Tab.Screen name="Stitch" component={StitchScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
