import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS, FONTS } from "../../../theme"; // adjust if needed

const dressesData = [
  { name: "Evening Gown", price: 2500 },
  { name: "Lehenga", price: 4000 },
  { name: "Kurta", price: 800 },
  { name: "Saree Blouse", price: 1200 },
];

const liningData = [
  { name: "Cotton Lining", price: 300 },
  { name: "Silk Lining", price: 700 },
  { name: "Satin Lining", price: 500 },
];

const PricingList = () => {
  const [selected, setSelected] = useState<"dresses" | "lining">("dresses");

  const data = selected === "dresses" ? dressesData : liningData;

  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: COLORS.white,
        borderRadius: 32,
        padding: 16,
        marginHorizontal: 16,
        backgroundColor: COLORS.lilac,
      }}
    >
      {/* Heading */}
      <Text style={styles.mainHeading}>The Price Promise</Text>
      <Text style={styles.subHeading}>We know what you're thinking -</Text>
      <Text style={styles.subHeading}>"All this must cost more"</Text>
      <Text style={styles.subHeading}>
        Our premium services comes with no extra cost. Just extra care
      </Text>
      {/* Toggle */}
      <View style={styles.toggleWrapper}>
        <TouchableOpacity
          style={[
            styles.toggleButton,
            selected === "dresses" && styles.activeButton,
          ]}
          onPress={() => setSelected("dresses")}
        >
          <Text
            style={[
              styles.toggleText,
              selected === "dresses" && styles.activeText,
            ]}
          >
            Dresses
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.toggleButton,
            selected === "lining" && styles.activeButton,
          ]}
          onPress={() => setSelected("lining")}
        >
          <Text
            style={[
              styles.toggleText,
              selected === "lining" && styles.activeText,
            ]}
          >
            Lining
          </Text>
        </TouchableOpacity>
      </View>
      {/* List without FlatList */}
      <View style={styles.listContainer}>
        {data.map((item, index) => (
          <View key={index} style={styles.itemRow}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemPrice}>₹{item.price}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default PricingList;

const styles = StyleSheet.create({
  mainHeading: {
    fontSize: 40,
    fontFamily: FONTS.boldItalic,
    color: COLORS.black,
    textAlign: "center",
    marginBottom: 6,
  },
  subHeading: {
    fontSize: 16,
    color: COLORS.black,
    fontFamily: FONTS.semiBold,
    textAlign: "center",
    marginBottom: 4,
  },

  toggleWrapper: {
    flexDirection: "row",
    alignSelf: "center",
    backgroundColor: COLORS.lightViolet,
    borderRadius: 30,
    overflow: "hidden",
    borderColor: COLORS.white,
    borderWidth: 1,
    padding: 2,
  },
  toggleButton: {
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
  activeButton: {
    borderRadius: 30,
    backgroundColor: COLORS.black,
  },
  toggleText: {
    fontSize: 14,
    color: COLORS.white,
  },
  activeText: {
    fontFamily: FONTS.latoB,
    color: COLORS.white,
  },
  listContainer: {
    marginTop: 16,
    backgroundColor: COLORS.lightViolet,
    borderRadius: 16,
    padding: 16,
  },
  itemRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.black,
  },
  itemName: {
    fontSize: 16,
    fontFamily: FONTS.latoB,
    color: COLORS.black,
  },
  itemPrice: {
    fontSize: 16,
    fontFamily: FONTS.latoB,
    color: COLORS.black,
  },
});
