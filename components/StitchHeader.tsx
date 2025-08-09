import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { COLORS, FONTS } from "../theme";
import Ionicons from "@expo/vector-icons/Ionicons";

const StitchHeader = () => {
  return (
    <View style={styles.container}>
      {/* Profile Picture */}
      <TouchableOpacity activeOpacity={0.7}>
        <Image
          source={{ uri: "https://i.pravatar.cc/100" }} // placeholder image
          style={styles.profileImage}
        />
      </TouchableOpacity>

      {/* Right side icons */}
      <View style={styles.rightContainer}>
        {/* Rewards */}
        <TouchableOpacity style={styles.rewards} activeOpacity={0.7}>
          <FontAwesome5 name="coins" size={20} color="#FFBF00" />
          <Text style={styles.rewardText}>120</Text>
        </TouchableOpacity>

        {/* Notifications */}
        <TouchableOpacity style={styles.notification} activeOpacity={0.7}>
          <Ionicons
            name="notifications-outline"
            size={22}
            color={COLORS.text}
          />
          <View style={styles.badge} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default StitchHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 35,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "white",
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 60,
  },
  rightContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  rewards: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.background,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    marginRight: 14,
  },
  rewardText: {
    fontFamily: FONTS.medium,
    fontSize: 14,
    color: COLORS.text,
    marginLeft: 6,
  },
  notification: {
    backgroundColor: COLORS.background,
    position: "relative",
    borderRadius: 20,
    padding: 6,
  },
  badge: {
    position: "absolute",
    top: 4,
    right: 4,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.danger,
  },
});
