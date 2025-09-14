import React from "react";
import StitchHeader from "../StitchHeader";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Platform,
  ScrollView,
  FlatList,
  Image,
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

const EmptyOrderStatus: React.FC = () => {
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
          <Text style={[styles.subHeading, { marginTop: 10 }]}>
            No Active Orders Yet
          </Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignContent: "center",
          marginVertical: 20,
        }}
      >
        <Image
          style={{ height: 300, width: 300, borderRadius: 20 }}
          source={require("../../assets/emptyOrderStatus.png")}
        />
      </View>

      <View style={styles.container}>
        <View>
          <Text style={styles.subHeading}>
            Book your stitching order and track every stage as it progresses
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EmptyOrderStatus;

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
    fontFamily: FONTS.bold,
    textAlign: "center",
  },
  orderCount: {
    fontSize: 20,
    color: COLORS.white,
    fontFamily: FONTS.boldItalic,
    textAlign: "left",
  },
});
