import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../theme";

export default function StitchScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Stitch Booking Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: "center",
    alignItems: "center",
  },
  text: { fontFamily: FONTS.bold, fontSize: 20, color: COLORS.text },
});
