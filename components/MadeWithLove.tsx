import { View, Text } from "react-native";
import React from "react";
import { COLORS, FONTS } from "../theme";

const MadeWithLove = () => {
  return (
    <View>
      <Text
        style={{
          color: COLORS.white,
          fontSize: 16,
          fontFamily: FONTS.boldItalic,
          textAlign: "center",
          margin: 20,
        }}
      >
        Made With ❤️ Love
      </Text>
    </View>
  );
};

export default MadeWithLove;
