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
import CarouselBanner from "../../components/stitchscreen/stitch/CarouselBanner";
import StitchOptions from "../../components/StitchOptions";
import AddressName from "../../components/AddressName";
import StitchStory from "../../components/stitchscreen/stitch/StitchStory";
import OurNumbers from "../../components/stitchscreen/stitch/OurNumbers";
import MadeWithLove from "../../components/MadeWithLove";
export default function StitchScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* StatusBar Config */}
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />

      {/* Fixed Header */}
      <StitchHeader />
      <AddressName />

      {/* Scrollable Content */}
      <ScrollView
        style={styles.scrollView}
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
        <View style={styles.section}>
          <OurNumbers />
        </View>
        <View style={styles.section}>
          <MadeWithLove />
        </View>
        <View style={{ height: 100 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.black,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  scrollView: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  section: {
    marginVertical: 8,
  },
});
