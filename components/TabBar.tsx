import React from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { COLORS, FONTS } from "../theme";
import { Ionicons } from "@expo/vector-icons";

const TabBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.tabBar}>
        {state.routes.map((route, index) => {
          // ⛔ Skip "OrderStatus" tab
          if (route.name === "OrderStatus") {
            return null;
          }
          if (route.name === "MyMeasurements") {
            return null;
          }
          if (route.name === "OrderHistory") {
            return null;
          }
          if (route.name === "StitchPoints") {
            return null;
          }
          if (route.name === "EmptyOrderStatus") {
            return null;
          }
          if (route.name === "EmptyOrderHistory") {
            return null;
          }
          if (route.name === "EmptyMyMeasurements") {
            return null;
          }
          if (route.name === "EmptyStitchPoints") {
            return null;
          }

          // const { options } = descriptors[route.key];
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          const isStitch = route.name === "Stitch";

          return (
            <Pressable
              key={index}
              onPress={onPress}
              onLongPress={onLongPress}
              style={({ pressed }) => [
                styles.tabItem,
                isStitch && [
                  styles.stitchButton,
                  {
                    backgroundColor: pressed
                      ? COLORS.lightViolet
                      : COLORS.lilac,
                  },
                ],
              ]}
            >
              {route.name === "Explore" && <Ionicons name="home" size={28} />}

              {route.name === "Stitch" && (
                <View style={styles.stitchInner}>
                  <Text style={styles.stitchLabel}>BOOK STITCH</Text>
                </View>
              )}

              {route.name === "Profile" && (
                <Image
                  source={{ uri: "https://i.pravatar.cc/150?img=12" }}
                  style={[
                    styles.profileImage,
                    { borderColor: isFocused ? COLORS.black : COLORS.bgGry },
                  ]}
                />
              )}
            </Pressable>
          );
        })}
      </View>
    </View>
  );
};

export default TabBar;

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    bottom: 65,
    left: 70,
    right: 70,
    alignItems: "center",
  },
  tabBar: {
    flexDirection: "row",
    backgroundColor: COLORS.white,
    borderRadius: 40,
    height: 70,
    justifyContent: "space-around",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 6,
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontSize: 12,
    fontFamily: FONTS.extraBold,
    marginTop: 2,
  },
  stitchButton: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 8,
    borderColor: COLORS.lightViolet,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 8,
  },
  stitchInner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  stitchLabel: {
    fontSize: 16,
    fontFamily: FONTS.latoB,
    color: COLORS.black,
    textAlign: "center",
  },
  profileImage: {
    width: 44,
    height: 44,
    borderRadius: 21,
  },
});
