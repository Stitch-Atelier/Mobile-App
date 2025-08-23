import React from "react";
import {
  View,
  Text,
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
import DiscountList from "../../components/stitchscreen/discounts/DiscountList";

export default function StitchScreen() {
  const [optionSelected, setOptionSelected] = React.useState(0);

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

      {/* Address block just below header */}
      <View style={styles.addressWrapper}>
        <AddressName />
      </View>

      {/* Scrollable Content */}
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Carousel */}
        <View style={styles.section}>
          <CarouselBanner />
        </View>

        {/* Options */}
        <View style={styles.section}>
          <StitchOptions
            selectedIndex={optionSelected}
            onSelect={setOptionSelected}
          />
        </View>

        {/* Content based on tab selection */}
        <View style={styles.section}>
          {optionSelected === 0 && (
            <>
              <View style={styles.section}>
                <StitchStory />
              </View>
              <View style={styles.section}>
                <OurNumbers />
              </View>
            </>
          )}

          {optionSelected === 1 && (
            <View style={styles.centerContent}>
              <Text style={styles.textWhite}>Shortcuts Content</Text>
            </View>
          )}

          {optionSelected === 2 && (
            <View style={styles.centerContent}>
              <Text style={styles.textWhite}>Pricing Content</Text>
            </View>
          )}

          {optionSelected === 3 && (
            <View style={styles.section}>
              <DiscountList />
            </View>
          )}
        </View>

        {/* Bottom Spacer */}
        <View style={styles.section}>
          <MadeWithLove />
        </View>
        <View style={{ height: 80 }} />
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
  addressWrapper: {
    marginHorizontal: 12,
    marginTop: 8,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  section: {
    marginVertical: 10,
  },
  centerContent: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
  },
  textWhite: {
    color: COLORS.white,
    fontSize: 16,
  },
});
