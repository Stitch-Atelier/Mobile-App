import React, { Dispatch, FC, SetStateAction } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";
import { COLORS, FONTS } from "../theme";

const { width } = Dimensions.get("window");

const buttons = [
  { label: "Stitch" },
  { label: "Shortcuts" },
  { label: "Pricing" },
  { label: "Discounts" },
];

type StitchOptionsProps = {
  selectedIndex: number;
  onSelect: any;
};

const StitchOptions: React.FC<StitchOptionsProps> = ({
  selectedIndex,
  onSelect,
}) => {
  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {buttons.map((btn, index) => {
          const isSelected = selectedIndex === index;
          return (
            <TouchableOpacity
              key={btn.label}
              style={[
                styles.button,
                { minWidth: 80 }, // ensures space but flexible
                isSelected ? styles.selectedButton : styles.unselectedButton,
              ]}
              onPress={() => onSelect(index)}
            >
              <Text
                style={[
                  styles.buttonText,
                  isSelected ? styles.selectedText : styles.unselectedText,
                ]}
                ellipsizeMode="tail"
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
  scrollContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    marginHorizontal: "auto",
  },
  button: {
    padding: 10,
    borderRadius: 20,
    borderWidth: 0.5,
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },

  selectedButton: {
    backgroundColor: COLORS.lilac,
    borderColor: COLORS.lightViolet,
    borderWidth: 1,
  },
  unselectedButton: {
    backgroundColor: COLORS.black,
    borderColor: COLORS.lightViolet,
    borderWidth: 1,
  },
  buttonText: {
    fontSize: 14,
    fontFamily: FONTS.latoB,
  },
  selectedText: {
    color: COLORS.black,
  },
  unselectedText: {
    color: COLORS.white,
  },
});
