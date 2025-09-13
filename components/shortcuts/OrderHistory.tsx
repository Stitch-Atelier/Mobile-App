import React from "react";
import StitchHeader from "../StitchHeader";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Platform,
  FlatList,
} from "react-native";
import { COLORS, FONTS } from "../../theme";
import { OrderHistoryI } from "../../types";
import HistoryDetail from "./HistoryDetail";
import { createStackNavigator } from "@react-navigation/stack";
import OrderDetailScreen from "./OrderDetailScreen";

const orderList: OrderHistoryI[] = [
  {
    orderId: "232423",
    placedOn: new Date().toLocaleDateString("en-IN"),
    deliveredOn: new Date().toLocaleDateString("en-IN"),
    TAmount: 2800,
  },
  {
    orderId: "232414",
    placedOn: new Date().toLocaleDateString("en-IN"),
    deliveredOn: new Date().toLocaleDateString("en-IN"),
    TAmount: 2400,
  },
  {
    orderId: "232411",
    placedOn: new Date().toLocaleDateString("en-IN"),
    deliveredOn: new Date().toLocaleDateString("en-IN"),
    TAmount: 2400,
  },
  {
    orderId: "232416",
    placedOn: new Date().toLocaleDateString("en-IN"),
    deliveredOn: new Date().toLocaleDateString("en-IN"),
    TAmount: 2400,
  },
  {
    orderId: "232418",
    placedOn: new Date().toLocaleDateString("en-IN"),
    deliveredOn: new Date().toLocaleDateString("en-IN"),
    TAmount: 2400,
  },
  {
    orderId: "232412",
    placedOn: new Date().toLocaleDateString("en-IN"),
    deliveredOn: new Date().toLocaleDateString("en-IN"),
    TAmount: 2400,
  },
];

export type RootStackParamList = {
  History: undefined;
  OrderDetails: { orderId: string }; // 👈 pass params here
};

const Stack = createStackNavigator<RootStackParamList>();

const OrderHistory: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerShown: false,
        cardStyle: { backgroundColor: COLORS.black }, // 👈 force black background
        cardStyleInterpolator: ({ current, layouts }) => {
          return {
            cardStyle: {
              transform: [
                {
                  translateX: current.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [layouts.screen.width, 0],
                  }),
                },
              ],
            },
          };
        },
      }}
      initialRouteName="History"
    >
      <Stack.Screen name="History" component={OrderHistoryUI} />
      <Stack.Screen name="OrderDetails" component={OrderDetailScreen} />
    </Stack.Navigator>
  );
};

export default OrderHistory;

const OrderHistoryUI = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />

      {/* Fixed Header */}
      <StitchHeader />

      <View style={styles.container}>
        {/* Top Heading */}
        <View style={styles.header}>
          <Text style={styles.heading}>Order History</Text>
          <Text style={styles.subHeading}>All your Past Orders</Text>
        </View>
      </View>

      <View
        style={{
          margin: 20,
          backgroundColor: COLORS.lilac,
          borderRadius: 20,
          padding: 20,
          maxHeight: "55%",
        }}
      >
        <FlatList
          data={orderList}
          keyExtractor={(item) => item.orderId}
          renderItem={({ item }) => <HistoryDetail {...item} />}
          contentContainerStyle={{ paddingBottom: 140 }}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={() => (
            <Text
              style={{
                textAlign: "center",
                padding: 10,
                color: "white",
                fontSize: 12,
              }}
            >
              --- End of Orders ---
            </Text>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.black,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  container: {
    // flex: 1,
    paddingHorizontal: 20,
    backgroundColor: COLORS.black,
    // marginBottom: 100,
  },
  header: {
    marginBottom: 12,
  },
  heading: {
    fontSize: 60,
    color: COLORS.white,
    fontFamily: FONTS.semiBoldItalic,
    textAlign: "center",
  },
  subHeading: {
    fontSize: 20,
    color: COLORS.white,
    fontFamily: FONTS.boldItalic,
    textAlign: "center",
  },
  orderCount: {
    fontSize: 20,
    color: COLORS.white,
    fontFamily: FONTS.boldItalic,
    textAlign: "left",
  },
});
