import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  SafeAreaView,
} from "react-native";
import React from "react";
import { COLORS, FONTS } from "../../theme";
import StitchHeader from "../StitchHeader";

const MyMeasurements = () => {
  const data1 = [
    { property: "Neck", value: `10"` },
    { property: "Chest", value: `38"` },
    { property: "Waist", value: `34"` },
    { property: "Sleeve", value: `24"` },
    { property: "Shoulder", value: `18"` },
    { property: "Length", value: `40"` },
  ];
  const data2 = [
    { property: "Neck", value: `10"` },
    { property: "Chest", value: `38"` },
    { property: "Waist", value: `34"` },
    { property: "Sleeve", value: `24"` },
  ];

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

          {/* Left top corner */}

          <Text style={styles.subHeading}>
            View your Latest Body Measurements
          </Text>
        </View>
      </View>

      <View style={styles.container2}>
        {/* Card 1 */}
        <View style={styles.card}>
          <Text style={styles.heading2}>Upper Body</Text>
          <View style={styles.container3}>
            {data1.map((item, index) => (
              <View key={index} style={styles.row}>
                <Text style={styles.property}>{item.property}</Text>
                <Text style={styles.value}>{item.value}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Card 2 */}
        <View style={styles.card}>
          <Text style={styles.heading2}>Lower Body</Text>
          <View style={styles.container3}>
            {data2.map((item, index) => (
              <View key={index} style={styles.row}>
                <Text style={styles.property}>{item.property}</Text>
                <Text style={styles.value}>{item.value}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MyMeasurements;

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
    fontSize: 16,
    color: COLORS.white,
    fontFamily: FONTS.boldItalic,
    textAlign: "center",
  },

  container2: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
    paddingHorizontal: 16,
    marginTop: 20,
  },
  card: {
    flex: 1,
    width: "50%",
    backgroundColor: COLORS.lilac,
    borderRadius: 12,
    padding: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  heading2: {
    fontSize: 16,
    fontFamily: FONTS.latoB,
  },
  emojiWrapper: {
    backgroundColor: "#fff",
    padding: 12,
    marginTop: 12,
    borderRadius: 12,
    marginBottom: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
    height: 120,
    width: "100%",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  emoji: {
    height: 60,
    width: 60,
  },
  subHeading2: {
    fontSize: 16,
    color: COLORS.black,
    textAlign: "center",
    marginTop: 10,
    fontFamily: FONTS.latoB,
  },

  container3: {
    marginTop: 10,
    backgroundColor: COLORS.white,
    minHeight: 240,
    borderRadius: 8,
    width: "100%",
    padding: 12,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  property: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
  },
  value: {
    fontSize: 14,
    color: "#555",
  },
});
