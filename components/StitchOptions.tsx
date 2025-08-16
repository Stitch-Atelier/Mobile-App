import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { COLORS } from "../theme";

const buttons = [
  { label: "Stitch Story", onPress: () => console.log("Button 1 Pressed") },
  {
    label: "The Stitch Promise",
    onPress: () => console.log("Button 2 Pressed"),
  },
  {
    label: "The Price Promise",
    onPress: () => console.log("Button 3 Pressed"),
  },
  { label: "Rewards", onPress: () => console.log("Button 4 Pressed") },
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
    paddingHorizontal: 10,
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 12,
    marginRight: 10,
    borderWidth: 1,
  },
  selectedButton: {
    backgroundColor: COLORS.primaryDark,
    borderColor: COLORS.primaryDark,
  },
  unselectedButton: {
    backgroundColor: "#fff",
    borderColor: COLORS.primaryDark,
  },
  buttonText: {
    fontSize: 14,
    fontFamily: "PlaySemiBold",
  },
  selectedText: {
    color: "#fff",
  },
  unselectedText: {
    color: COLORS.primaryDark,
  },
});
