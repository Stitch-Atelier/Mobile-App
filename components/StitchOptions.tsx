import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";
import { COLORS } from "../theme";

const { width } = Dimensions.get("window");

const buttons = [
  { label: "Stitch", onPress: () => console.log("Button 1 Pressed") },
  { label: "Offers", onPress: () => console.log("Button 2 Pressed") },
  { label: "Pricing", onPress: () => console.log("Button 3 Pressed") },
  { label: "Shortcuts", onPress: () => console.log("Button 4 Pressed") },
];

const StitchOptions = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {buttons.map((btn, index) => {
          const isSelected = selectedIndex === index;
          return (
            <TouchableOpacity
              key={index}
              style={[
                styles.button,
                { width: width / buttons.length - 20 }, // 👈 dynamic width
                isSelected ? styles.selectedButton : styles.unselectedButton,
              ]}
              onPress={() => {
                setSelectedIndex(index);
                btn.onPress();
              }}
            >
              <Text
                style={[
                  styles.buttonText,
                  isSelected ? styles.selectedText : styles.unselectedText,
                ]}
              >
                {btn.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default StitchOptions;

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
  },
  scrollContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly", // 👈 distribute evenly
    alignItems: "stretch",
    paddingHorizontal: 10,
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 4,
    borderRadius: 20,
    marginRight: 10,
    borderWidth: 0.5,
    alignItems: "center", // center text
  },
  selectedButton: {
    backgroundColor: COLORS.white,
    borderColor: COLORS.white,
  },
  unselectedButton: {
    backgroundColor: COLORS.black,
    borderColor: COLORS.white,
  },
  buttonText: {
    fontSize: 14,
    fontFamily: "latoB",
  },
  selectedText: {
    color: COLORS.black,
  },
  unselectedText: {
    color: COLORS.white,
  },
});
