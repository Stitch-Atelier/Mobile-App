import React from "react";
import StitchHeader from "../StitchHeader";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Platform,
  Image,
} from "react-native";
import { COLORS, FONTS } from "../../theme";

const EmptyOrderHistory: React.FC = () => {
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
        <View>
          <Text style={[styles.subHeading, { marginTop: 10 }]}>
            No Order Placed Yet
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
          source={require("../../assets/EmptyOrderHistory.png")}
        />
      </View>

      <View style={styles.container}>
        <View>
          <Text style={styles.subHeading}>Book your first Stitch NOW!</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EmptyOrderHistory;

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
