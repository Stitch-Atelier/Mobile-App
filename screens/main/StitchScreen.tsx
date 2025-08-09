import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { COLORS, FONTS } from "../../theme";
import StitchHeader from "../../components/StitchHeader";

export default function StitchScreen() {
  return (
    <>
      <SafeAreaView style={styles.safeArea}>
        <StitchHeader />
        <View style={styles.container}>
          <Text style={styles.text}>Stitch Booking Screen</Text>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.surface, // Matches header background so safe area blends
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: FONTS.bold,
    fontSize: 20,
    color: COLORS.text,
  },
});
