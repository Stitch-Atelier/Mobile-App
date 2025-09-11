import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StitchScreen from "../screens/main/StitchScreen";
import ExploreScreen from "../screens/main/ExploreScreen";
import ProfileScreen from "../screens/main/ProfileScreen";
import TabBar from "../components/TabBar";
import OrderStatus from "../components/shortcuts/OrderStatus";
import MyMeasurements from "../components/shortcuts/MyMeasurements";
import OrderHistory from "../components/shortcuts/OrderHistory";
import StitchPoints from "../components/shortcuts/StitchPoints";

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
      <Tab.Screen name="OrderStatus" component={OrderStatus} />
      <Tab.Screen name="MyMeasurements" component={MyMeasurements} />
      <Tab.Screen name="OrderHistory" component={OrderHistory} />
      <Tab.Screen name="StitchPoints" component={StitchPoints} />
    </Tab.Navigator>
  );
}
