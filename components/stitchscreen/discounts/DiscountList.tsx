import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS, FONTS } from "../../../theme";

const { width } = Dimensions.get("window");

const discounts = [
  {
    id: 1,
    text: "50% Off on Anniversary",
    image: "https://picsum.photos/500/300",
  },
  {
    id: 2,
    text: "Flat 30% Off on Alterations",
    image: "https://picsum.photos/501/300",
  },
  { id: 3, text: "Buy 1 Get 1 Free", image: "https://picsum.photos/502/300" },
  {
    id: 4,
    text: "25% Off on Stitching",
    image: "https://picsum.photos/503/300",
  },
  { id: 5, text: "Mega Summer Sale", image: "https://picsum.photos/504/300" },
];

const DiscountList = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingVertical: 10 }}
      >
        {discounts.map((item) => (
          <View key={item.id} style={styles.card}>
            <ImageBackground
              source={{ uri: item.image }}
              style={styles.image}
              imageStyle={{ borderRadius: 12 }}
            >
              {/* Gradient Overlay */}
              <LinearGradient
                colors={["rgba(0,0,0,0.6)", "transparent"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.gradient}
              >
                <Text style={styles.text}>{item.text}</Text>
              </LinearGradient>
            </ImageBackground>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default DiscountList;

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    flex: 1,
  },
  card: {
    marginBottom: 16,
    borderRadius: 12,
    overflow: "hidden",
  },
  image: {
    width: width * 0.9,
    height: 180,
    alignSelf: "center",
    justifyContent: "flex-start",
  },
  gradient: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 15,
    borderRadius: 12,
  },
  text: {
    color: COLORS.white,
    fontSize: 18,
    fontFamily: FONTS.bold,
  },
});
