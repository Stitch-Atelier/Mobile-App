import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { COLORS, FONTS } from "../theme";
import { Ionicons } from "@expo/vector-icons"; // you can change icon set

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

          // Optional: Map icons to route names
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

          return (
            <TouchableOpacity
              key={index}
              onPress={onPress}
              onLongPress={onLongPress}
              style={[
                styles.tabItem,
                route.name === "Stitch" && styles.stitchWrapper, // special style
              ]}
            >
              <View
                style={
                  route.name === "Stitch" ? styles.stitchButton : undefined
                }
              >
                <Ionicons
                  name={getIcon(route.name, isFocused) as any}
                  size={route.name === "Stitch" ? 28 : 22}
                  color={isFocused ? "white" : COLORS.textLight}
                />
              </View>
              {route.name !== "Stitch" && (
                <Text
                  style={[
                    styles.label,
                    { color: isFocused ? "white" : COLORS.textLight },
                  ]}
                >
                  {typeof label === "function"
                    ? label({
                        focused: isFocused,
                        color: isFocused ? "white" : COLORS.textLight,
                        position: "below-icon",
                        children: route.name,
                      })
                    : label}
                </Text>
              )}
            </TouchableOpacity>
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
    bottom: 35,
    left: 10,
    right: 10,
    alignItems: "center",
  },
  stitchWrapper: {
    marginTop: -25, // float above bar
  },
  stitchButton: {
    backgroundColor: COLORS.primary, // highlight color
    borderRadius: 35,
    borderWidth: 2,
    borderColor: "white",
    width: 60,
    height: 60,
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
    backgroundColor: "black",
    borderRadius: 16,
    paddingVertical: 12,
    paddingHorizontal: 15,
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
    marginTop: 4,
  },
});
