import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { COLORS, FONTS } from "../theme";

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
    // backgroundColor: COLORS.black,
    borderRadius: 40,
    marginHorizontal: 16,
    marginVertical: 16,
    alignItems: "center",
  },
  heading: {
    fontSize: 28,
    fontFamily: FONTS.boldItalic,
    color: COLORS.white,
    marginBottom: 16,
  },
  image: {
    width: "100%",
    height: 400,
    borderRadius: 12,
  },
});
