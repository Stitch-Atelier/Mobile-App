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
import EmptyOrderStatus from "../components/shortcuts/EmptyOrderStatus";
import EmptyOrderHistory from "../components/shortcuts/EmptyOrderHistory";
import EmptyMyMeasurements from "../components/shortcuts/EmptyMyMeasurements";
import EmptyStitchPoints from "../components/shortcuts/EmptyStitchPoints";

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
      <Tab.Screen name="EmptyOrderStatus" component={EmptyOrderStatus} />
      <Tab.Screen name="MyMeasurements" component={MyMeasurements} />
      <Tab.Screen name="EmptyMyMeasurements" component={EmptyMyMeasurements} />
      <Tab.Screen name="OrderHistory" component={OrderHistory} />
      <Tab.Screen name="EmptyOrderHistory" component={EmptyOrderHistory} />
      <Tab.Screen name="StitchPoints" component={StitchPoints} />
      <Tab.Screen name="EmptyStitchPoints" component={EmptyStitchPoints} />
    </Tab.Navigator>
  );
}
