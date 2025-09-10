import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { COLORS, FONTS } from "../../../theme";

const data = [
  {
    heading: "Order Status",
    description: "Fast fixes in minutes",
    icon: require("../../../assets/orderStatus.png"),
  },
  {
    heading: "My Measurements",
    description: "Gentle on all materials",
    icon: require("../../../assets/body.png"),
  },
  {
    heading: "Order History",
    description: "Tailored adjustments",
    icon: require("../../../assets/clock.png"),
  },
  {
    heading: "Stitch Points",
    description: "Best price guaranteed",
    icon: require("../../../assets/token.png"),
  },
];

const Shortcuts = () => {
  return (
    <View style={styles.container}>
      {data.map((item, index) => (
        <View
          key={index}
          style={index === 1 || index === 2 ? styles.card1 : styles.card2}
        >
          {/* Heading */}
          <Text style={styles.heading}>{item.heading}</Text>

          <View style={styles.content}>
            <Text
              style={
                index === 1 || index === 2
                  ? styles.description2
                  : styles.description1
              }
            >
              {item.description}
            </Text>

            {/* Replace Ionicons with PNG */}
            <Image
              source={item.icon}
              style={[styles.icon]}
              resizeMode="contain"
            />
          </View>
        </View>
      ))}
    </View>
  );
};

export default Shortcuts;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 10,
  },
  card2: {
    width: "48%",
    backgroundColor: COLORS.lightViolet,
    borderRadius: 24,
    padding: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  card1: {
    width: "48%",
    backgroundColor: COLORS.bgGry,
    borderRadius: 24,
    padding: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  heading: {
    backgroundColor: COLORS.yellow,
    color: COLORS.black,
    padding: 6,
    borderRadius: 16,
    fontFamily: FONTS.latoB,
    fontSize: 14,
    marginBottom: 6,
    textAlign: "center",
  },
  content: {
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between", // space text on left, icon on right
  },
  icon: {
    width: 50,
    height: 50,
    marginLeft: 8,
  },

  description1: {
    fontSize: 12,
    color: COLORS.black,
    fontFamily: FONTS.latoB,
    flex: 1,
  },
  description2: {
    fontSize: 12,
    color: COLORS.white,
    fontFamily: FONTS.latoB,
    flex: 1,
  },
});
