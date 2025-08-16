import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { FONTS } from "../theme"; // Ensure this has the correct mappings for your fonts

const LogoText = () => {
  return <Text style={styles.title}>STITCH</Text>;
};

export default LogoText;

const styles = StyleSheet.create({
  title: {
    color: "#fff",
    fontSize: 30,
    fontFamily: FONTS?.extraBold || "System",
    letterSpacing: 2,
  },
});
