import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  Image,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from "react-native";
import React from "react";
import StitchHeader from "../StitchHeader";
import { COLORS, FONTS } from "../../theme";

const StitchPoints = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />

      {/* Fixed Header */}
      <StitchHeader />

      <View style={styles.container}>
        {/* Top Heading */}
        <View style={styles.header}>
          <Text style={styles.heading}>Stitch Points </Text>

          {/* Left top corner */}
          <Text style={{ position: "absolute", top: 5, left: 5, fontSize: 18 }}>
            ✨
          </Text>

          {/* Slightly above heading */}
          <Text
            style={{
              position: "absolute",
              top: -10,
              left: "45%",
              fontSize: 22,
            }}
          >
            ✨
          </Text>

          {/* Right top corner */}
          <Text
            style={{ position: "absolute", top: 5, right: 5, fontSize: 18 }}
          >
            ✨
          </Text>

          {/* Floating at mid-left */}
          <Text
            style={{ position: "absolute", top: 90, left: 15, fontSize: 16 }}
          >
            ✨
          </Text>

          {/* Floating at mid-right */}
          <Text
            style={{ position: "absolute", top: 120, right: 15, fontSize: 24 }}
          >
            ✨
          </Text>

          <Text style={styles.subHeading}>
            Earn points and redeem free stitching on every purchase !
          </Text>
        </View>
      </View>

      <View style={styles.container2}>
        {/* Card 1 */}
        <View style={styles.card}>
          <Text style={styles.heading2}>Your Points</Text>
          <View style={styles.emojiWrapper}>
            {/* <Text style={styles.emoji}>🎁</Text>
             */}

            <Image
              style={styles.emoji}
              source={require("../../assets/gift.png")}
            />
            <Text style={styles.subHeading2}>400/600 Pts</Text>
          </View>
        </View>

        {/* Card 2 */}
        <View style={styles.card}>
          <Text style={styles.heading2}>Stitch Balance</Text>
          <View style={styles.emojiWrapper}>
            <Image
              style={styles.emoji}
              source={require("../../assets/rupee.png")}
            />
            <Text style={styles.subHeading2}>400/-</Text>
          </View>
        </View>
      </View>

      <View style={styles.container3}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>See Activity</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default StitchPoints;
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.black,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  container: {
    // flex: 1,
    paddingHorizontal: 20,
    backgroundColor: COLORS.black,
    // marginBottom: 100,
  },
  header: {
    marginBottom: 12,
  },
  heading: {
    fontSize: 60,
    color: COLORS.white,
    fontFamily: FONTS.semiBoldItalic,
    textAlign: "center",
  },
  subHeading: {
    fontSize: 20,
    color: COLORS.white,
    fontFamily: FONTS.boldItalic,
    textAlign: "center",
  },
  container2: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
    paddingHorizontal: 16,
    marginTop: 20,
  },
  card: {
    flex: 1,
    width: "50%",
    backgroundColor: COLORS.lilac,
    borderRadius: 12,
    padding: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  heading2: {
    fontSize: 16,
    fontFamily: FONTS.latoB,
  },
  emojiWrapper: {
    backgroundColor: "#fff",
    padding: 12,
    marginTop: 12,
    borderRadius: 12,
    marginBottom: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
    height: 120,
    width: 120,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  emoji: {
    height: 60,
    width: 60,
  },
  subHeading2: {
    fontSize: 16,
    color: COLORS.black,
    textAlign: "center",
    marginTop: 10,
    fontFamily: FONTS.latoB,
  },

  container3: {
    alignItems: "center",
    marginTop: 20,
  },
  button: {
    backgroundColor: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 28,
    borderWidth: 1,
    borderColor: "#000",
  },
  buttonText: {
    color: "#000",
    fontSize: 16,
    fontFamily: FONTS.latoB,
  },
});
