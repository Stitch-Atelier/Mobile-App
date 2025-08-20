import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { COLORS, FONTS } from "../theme";
import { Ionicons } from "@expo/vector-icons"; // icon set

const TabBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.tabBar}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

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

          // Map icons to route names
          const getIcon = (name: string, isFocused: boolean) => {
            switch (name) {
              case "Home":
                return "home";
              case "Stitch":
                return isFocused ? "cut-outline" : "cut";
              case "Profile":
                return "person";
              default:
                return "earth-outline";
            }
          };

          // For stitch button we give custom styling with pressed effect
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
                      ? COLORS.lightViolet // Sweet pressed color
                      : COLORS.lilac, // Default color
                  },
                ],
              ]}
            >
              <Ionicons
                name={getIcon(route.name, isFocused) as any}
                size={isStitch ? 36 : 30}
                style={{ marginBottom: isStitch ? 0 : 4 }}
                color={isFocused ? COLORS.black : COLORS.bgGry}
              />
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

  stitchButton: {
    borderRadius: 65,
    borderWidth: 5,
    borderColor: COLORS.lightViolet,
    position: "absolute",
    width: 80,
    height: 80,
    bottom: -5,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 8,
  },
  tabBar: {
    flexDirection: "row",
    backgroundColor: COLORS.white,
    borderRadius: 40,
    paddingVertical: 16,
    paddingHorizontal: 15,
    justifyContent: "space-around",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 6,
    gap: 60,
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontSize: 12,
    fontFamily: FONTS.extraBold,
    marginTop: 4,
  },
});
