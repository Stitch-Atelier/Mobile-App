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

const EmptyMyMeasurements: React.FC = () => {
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
          <Text style={styles.heading}>My Measurements</Text>
          <Text style={styles.subHeading}>
            View your latest Body Measurements
          </Text>
        </View>
        <View>
          <Text style={[styles.subHeading, { marginTop: 10 }]}>
            No Measurements found yet
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
          source={require("../../assets/EmptyMesurement.jpg")}
        />
      </View>

      <View style={styles.container}>
        <View>
          <Text style={styles.subHeading}>Book Stitch to get Started</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EmptyMyMeasurements;

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
    fontSize: 40,
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
