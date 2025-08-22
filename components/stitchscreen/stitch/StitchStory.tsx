import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { COLORS, FONTS } from "../../../theme";

const StitchStory = () => {
  return (
    <View style={styles.container}>
      {/* Heading */}
      <Text style={styles.heading}>About Stitch</Text>

      {/* Image */}
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1503160865267-af4660ce7bf2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }}
        style={styles.image}
        resizeMode="cover"
      />
    </View>
  );
};

export default StitchStory;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.lilac,
    padding: 12,
    borderWidth: 1,
    borderRadius: 32,
    marginHorizontal: 16,
    marginTop: 16,
    alignItems: "center",
  },
  heading: {
    fontSize: 30,
    fontFamily: FONTS.boldItalic,
    color: COLORS.black,
    marginBottom: 12,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 28,
  },
});
