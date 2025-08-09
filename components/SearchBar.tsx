import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { COLORS, FONTS } from "../theme";
import Ionicons from "@expo/vector-icons/Ionicons";

const SearchBar = ({ placeholder = "Search Stitch" }) => {
  return (
    <View style={styles.container}>
      <Ionicons name="search-outline" size={20} color={COLORS.textLight} />
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={COLORS.textLight}
        style={styles.input}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.background,
    marginHorizontal: 16,
    paddingHorizontal: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
    marginBottom: 10,
  },
  input: {
    flex: 1,
    fontFamily: FONTS.regular,
    fontSize: 14,
    color: COLORS.text,
    marginLeft: 8,
  },
});
