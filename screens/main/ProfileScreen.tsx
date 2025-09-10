import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Platform,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, FONTS } from "../../theme";
import StitchHeader from "../../components/StitchHeader";
import MadeWithLove from "../../components/MadeWithLove";

export default function ProfileScreen({ navigation }: any) {
  const handleNavigate = (screen: string) => {
    navigation.navigate(screen);
  };

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

      {/* Scrollable Content */}
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* User Info Section */}
        <View style={[styles.section, styles.userInfo]}>
          <Ionicons
            name="person-circle-outline"
            size={60}
            color={COLORS.white}
          />
          <View style={{ marginLeft: 12 }}>
            <Text style={styles.userName}>Sofia Qureshi</Text>
            <View style={styles.rewardRow}>
              <Ionicons name="star" size={16} color={COLORS.yellow} />
              <Text style={styles.rewardText}> 420 Stitch Points </Text>
            </View>
          </View>
        </View>

        {/* 4 Grid Options */}
        <View style={styles.gridContainer}>
          <TouchableOpacity
            style={styles.gridItem}
            onPress={() => handleNavigate("OrderStatus")}
          >
            <Ionicons name="receipt-outline" size={28} color={COLORS.white} />
            <Text style={styles.gridText}>Order Status</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.gridItem}
            onPress={() => handleNavigate("Measurements")}
          >
            <Ionicons name="body-outline" size={28} color={COLORS.white} />
            <Text style={styles.gridText}>My Measurements</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.gridItem}
            onPress={() => handleNavigate("OrderHistory")}
          >
            <Ionicons name="time-outline" size={28} color={COLORS.white} />
            <Text style={styles.gridText}>Order History</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.gridItem}
            onPress={() => handleNavigate("StitchPoints")}
          >
            <Ionicons name="ribbon-outline" size={28} color={COLORS.white} />
            <Text style={styles.gridText}>Stitch Points</Text>
          </TouchableOpacity>
        </View>

        {/* Account Settings */}
        <View style={styles.settingsSection}>
          <Text style={styles.sectionTitle}>Account Settings</Text>
          <TouchableOpacity
            style={styles.settingsItem}
            onPress={() => handleNavigate("EditProfile")}
          >
            <Ionicons name="create-outline" size={22} color={COLORS.white} />
            <Text style={styles.settingsText}>Edit Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.settingsItem}
            onPress={() => handleNavigate("SavedAddresses")}
          >
            <Ionicons name="location-outline" size={22} color={COLORS.white} />
            <Text style={styles.settingsText}>Saved Addresses</Text>
          </TouchableOpacity>
        </View>

        {/* Info Settings */}
        <View style={styles.settingsSection}>
          <Text style={styles.sectionTitle}>Information</Text>
          <TouchableOpacity
            style={styles.settingsItem}
            onPress={() => handleNavigate("PrivacyPolicy")}
          >
            <Ionicons
              name="shield-checkmark-outline"
              size={22}
              color={COLORS.white}
            />
            <Text style={styles.settingsText}>Privacy Policy</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.settingsItem}
            onPress={() => handleNavigate("TermsConditions")}
          >
            <Ionicons
              name="document-text-outline"
              size={22}
              color={COLORS.white}
            />
            <Text style={styles.settingsText}>Terms & Conditions</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.settingsItem}
            onPress={() => handleNavigate("TermsConditions")}
          >
            <Ionicons name="star" size={22} color={COLORS.white} />
            <Text style={styles.settingsText}>Stitch Points</Text>
          </TouchableOpacity>
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
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  section: {
    marginVertical: 10,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 16,
    marginTop: 20,
  },
  userName: {
    color: COLORS.white,
    fontSize: 24,
    fontFamily: FONTS.semiBold,
  },
  rewardRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  rewardText: {
    color: COLORS.white,
    fontSize: 14,
    fontFamily: FONTS.medium,
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginHorizontal: 16,
    marginTop: 20,
  },
  gridItem: {
    width: "48%",
    backgroundColor: COLORS.black,
    paddingVertical: 24,
    borderRadius: 16,
    alignItems: "center",
    marginBottom: 14,
    borderWidth: 0.1,
    borderColor: COLORS.white,
  },
  gridText: {
    color: COLORS.white,
    marginTop: 8,
    fontSize: 15,
    fontFamily: FONTS.latoB,
  },
  settingsSection: {
    marginTop: 10,
    marginHorizontal: 16,
  },
  sectionTitle: {
    color: COLORS.white,
    fontSize: 20,
    marginBottom: 8,
    fontFamily: FONTS.extraBold,
  },
  settingsItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: COLORS.black,
  },
  settingsText: {
    color: COLORS.white,
    fontSize: 16,
    marginLeft: 12,
    fontFamily: FONTS.latoR,
  },
});
