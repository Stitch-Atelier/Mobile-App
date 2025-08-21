import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons"; // icon set
import { COLORS, FONTS } from "../theme";

const AddressName = () => {
  const notificationCount = 3; // can come from props or state

  return (
    <View style={styles.container}>
      {/* Address + Name */}
      <View>
        <Text style={styles.addressText}>#221B, Baker Street</Text>
        <Text style={styles.nameText}>John Watson</Text>
      </View>

      {/* Notification Icon with Badge */}
      <View style={{ position: "relative" }}>
        <Ionicons name="notifications-outline" size={28} color={COLORS.white} />
        {notificationCount > 0 && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{notificationCount}</Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default AddressName;

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    paddingBottom: 12,
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  addressText: {
    color: COLORS.white,
    fontSize: 16,
    fontFamily: FONTS.regular,
    marginBottom: 4,
  },
  nameText: {
    color: COLORS.white,
    fontSize: 24,
    fontFamily: FONTS.bold,
  },
  badge: {
    position: "absolute",
    right: -6,
    top: -4,
    backgroundColor: "red",
    borderRadius: 10,
    width: 18,
    height: 18,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 4,
  },
  badgeText: {
    color: COLORS.white,
    margin: "auto",
    fontSize: 12,
    height: "100%",
    fontFamily: FONTS.extraBold,
    textAlign: "center",
  },
});
