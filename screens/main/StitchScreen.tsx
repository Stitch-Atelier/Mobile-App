import React from "react";
import { View, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { COLORS } from "../../theme";
import StitchHeader from "../../components/StitchHeader";
import SearchBar from "../../components/SearchBar";
import CarouselBanner from "../../components/CarouselBanner";
import Categories from "../../components/Categories";
import Testimonials from "../../components/Testimonials";
import OffersSection from "../../components/OffersSection";

export default function StitchScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Fixed Header & Search */}
      <StitchHeader />
      <SearchBar />

      {/* Scrollable Content */}
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.section}>
          <CarouselBanner />
        </View>
        <View style={styles.section}>
          <OffersSection />
        </View>
        <View style={styles.section}>
          <Categories />
        </View>
        <View style={styles.section}>
          <Testimonials />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.surface,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  section: {
    marginTop: 16,
  },
});
