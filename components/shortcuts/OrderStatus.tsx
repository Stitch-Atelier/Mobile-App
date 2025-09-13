import React from "react";
import StitchHeader from "../StitchHeader";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Platform,
  ScrollView,
  FlatList,
} from "react-native";
import { COLORS, FONTS } from "../../theme";
import PerOrder from "./PerOrder";
import { OrderI } from "../../types";

const orders: OrderI[] = [
  {
    orderId: "232423",
    dressesCnt: 3,
    tDate: new Date().toLocaleDateString("en-IN"),
    dressesList: [
      {
        dressID: "80976",
        pic: "https://picsum.photos/400/400?random=1",
        progressStatus: 3,
      },
      {
        dressID: "80976",
        pic: "https://picsum.photos/400/400?random=1",
        progressStatus: 3,
      },
      {
        dressID: "80976",
        pic: "https://picsum.photos/400/400?random=1",
        progressStatus: 3,
      },
    ],
  },
  {
    orderId: "23242321",
    dressesCnt: 3,
    tDate: new Date().toLocaleDateString("en-IN"),
    dressesList: [
      {
        dressID: "80976",
        pic: "https://picsum.photos/400/400?random=1",
        progressStatus: 3,
      },
      {
        dressID: "80976",
        pic: "https://picsum.photos/400/400?random=1",
        progressStatus: 3,
      },
      {
        dressID: "80976",
        pic: "https://picsum.photos/400/400?random=1",
        progressStatus: 3,
      },
    ],
  },
];

const OrderStatus: React.FC = () => {
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
          <Text style={styles.heading}>Order Status</Text>
          <Text style={styles.subHeading}>Track All your Active Orders</Text>
        </View>
        <View>
          <Text style={styles.orderCount}>Active Orders {orders.length}</Text>
        </View>
      </View>

      <FlatList
        data={orders}
        keyExtractor={(item) => item.orderId}
        renderItem={({ item }) => <PerOrder {...item} />}
        contentContainerStyle={{ paddingBottom: 140 }}
      />
    </SafeAreaView>
  );
};

export default OrderStatus;

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
