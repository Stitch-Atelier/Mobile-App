import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { COLORS, FONTS } from "../../theme";
import StitchHeader from "../../components/StitchHeader";
import SearchBar from "../../components/SearchBar";
import CarouselBanner from "../../components/CarouselBanner";
export default function StitchScreen() {
  return (
    <>
      <SafeAreaView style={styles.safeArea}>
        <StitchHeader />
        <SearchBar />
        <CarouselBanner />
        <View style={styles.container}>
          <Text style={styles.text}>Stitch Booking Screen</Text>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: FONTS.bold,
    fontSize: 20,
    color: COLORS.text,
  },
});
