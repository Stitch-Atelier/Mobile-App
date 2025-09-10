import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import { COLORS, FONTS } from "../theme";
import LogoText from "./LogoText";

const StitchHeader = () => {
  return (
    <View style={styles.container}>
      <LogoText />
    </View>
  );
};

export default StitchHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.black,
    margin: 10,
    borderRadius: 12,
    // marginTop: 10,
  },
});
