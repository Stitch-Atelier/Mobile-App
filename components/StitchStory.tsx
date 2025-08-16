import { View, Text, Image } from "react-native";
import React from "react";
import { COLORS, FONTS } from "../theme";
const podcastImage = require("../assets/podcast.jpg"); // Adjust the path as necessary
const StitchStory = () => {
  return (
    <View
      style={{
        padding: 16,
        backgroundColor: COLORS.primaryDark,
        margin: 10,
        borderRadius: 24,
      }}
    >
      <Text
        style={{
          fontFamily: FONTS.semiBoldItalic,
          textAlign: "center",
          color: COLORS.surface,
          fontSize: 24,
        }}
      >
        Stitch Story
      </Text>

      <View style={{ padding: 4 }}>
        <Image
          source={podcastImage} // Directly use the require() variable
          style={{
            borderRadius: 12,
            width: "100%",
            height: 300,
          }}
        />
      </View>
    </View>
  );
};

export default StitchStory;
