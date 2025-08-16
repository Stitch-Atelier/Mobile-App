import React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Platform,
} from "react-native";
import { COLORS } from "../../theme";
import StitchHeader from "../../components/StitchHeader";
import CarouselBanner from "../../components/CarouselBanner";
import StitchOptions from "../../components/StitchOptions";
import StitchStory from "../../components/StitchStory";

export default function StitchScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* StatusBar Config */}
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content" // change to "light-content" if needed
      />

      {/* Fixed Header & Search */}
      <StitchHeader />

      {/* Scrollable Content */}
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.section}>
          <CarouselBanner />
        </View>
        <View style={styles.section}>
          <StitchOptions />
        </View>
        <View style={styles.section}>
          <StitchStory />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.surface,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0, // 👈 Fix for Android
  },
  scrollContent: {
    paddingBottom: 20,
  },
  section: {
    marginTop: 4,
  },
});
