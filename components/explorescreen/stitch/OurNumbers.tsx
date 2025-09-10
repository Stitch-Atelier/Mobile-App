import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { COLORS, FONTS } from "../../../theme"; // Assuming COLORS has lilac, black, and white

const OurNumbers = () => {
  return (
    <View style={styles.container}>
      {/* Heading */}
      <Text style={styles.heading}>Our Numbers</Text>

      {/* Stats Container */}
      <View style={styles.statsContainer}>
        {/* Box 1 */}
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>100%</Text>
          <Text style={styles.statLabel}>On Time Delivery - Every Time</Text>
        </View>

        {/* Box 2 */}
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>10+</Text>
          <Text style={styles.statLabel}>Outfits Stitched with Precision</Text>
        </View>

        {/* Box 3 */}
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>99+</Text>
          <Text style={styles.statLabel}>5 Star for Service & Quality</Text>
        </View>
      </View>
    </View>
  );
};

export default OurNumbers;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  heading: {
    fontSize: 32,
    fontFamily: FONTS.boldItalic,
    color: COLORS.white,
    marginBottom: 12,
    textAlign: "center",
  },
  statsContainer: {
    backgroundColor: COLORS.lilac, // Lilac container
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    borderRadius: 32,
  },
  statBox: {
    flex: 1,
    height: 100,
    backgroundColor: COLORS.black,
    paddingVertical: 20,
    marginHorizontal: 4,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 24,
    paddingHorizontal: 6,
  },
  statNumber: {
    fontSize: 36,
    fontFamily: FONTS.bold,
    color: COLORS.white,
    marginBottom: 6,
  },
  statLabel: {
    fontSize: 12,
    fontFamily: FONTS.semiBold,
    color: COLORS.white,
    textAlign: "center",
  },
});
