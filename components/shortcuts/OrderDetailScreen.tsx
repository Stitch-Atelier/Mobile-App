import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  Platform,
  Image,
  FlatList,
  Modal,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "./OrderHistory";
import StitchHeader from "../StitchHeader";
import { COLORS, FONTS } from "../../theme";

type Props = {
  route: RouteProp<RootStackParamList, "OrderDetails">;
};

const dummyDresses = [
  {
    id: "1",
    pic: "https://picsum.photos/200/200?random=1",
    topMeasurements: {
      Neck: `10"`,
      Chest: `25"`,
      Waist: `22"`,
      Shoulder: `15"`,
      Armhole: `8"`,
      "Front Length": `36"`,
      "Back Length": `36"`,
      "Sleeve Length": `12"`,
      Hip: `28"`,
      "Cuff Width": `4"`,
    },
    bottomMeasurements: {
      Waist: `36"`,
      Hip: `36"`,
      Thigh: `36"`,
      Inseam: `36"`,
      Outseam: `36"`,
      Pauncha: `36"`,
      "Rise Front": `36"`,
      "Rise Back": `36"`,
    },
  },
  {
    id: "2",
    pic: "https://picsum.photos/200/200?random=2",
    topMeasurements: {
      Neck: `11"`,
      Chest: `26"`,
      Waist: `23"`,
      Shoulder: `16"`,
      Armhole: `9"`,
      "Front Length": `37"`,
      "Back Length": `37"`,
      "Sleeve Length": `13"`,
      Hip: `29"`,
      "Cuff Width": `5"`,
    },
    bottomMeasurements: {
      Waist: `37"`,
      Hip: `37"`,
      Thigh: `37"`,
      Inseam: `37"`,
      Outseam: `37"`,
      Pauncha: `37"`,
      "Rise Front": `37"`,
      "Rise Back": `37"`,
    },
  },
  {
    id: "3",
    pic: "https://picsum.photos/200/200?random=3",
    topMeasurements: {
      Neck: `12"`,
      Chest: `27"`,
      Waist: `24"`,
      Shoulder: `17"`,
      Armhole: `10"`,
      "Front Length": `38"`,
      "Back Length": `38"`,
      "Sleeve Length": `14"`,
      Hip: `30"`,
      "Cuff Width": `6"`,
    },
    bottomMeasurements: {
      Waist: `38"`,
      Hip: `38"`,
      Thigh: `38"`,
      Inseam: `38"`,
      Outseam: `38"`,
      Pauncha: `38"`,
      "Rise Front": `38"`,
      "Rise Back": `38"`,
    },
  },
];

const OrderDetailScreen: React.FC<Props> = ({ route }) => {
  const { orderId } = route.params;
  const [selectedDress, setSelectedDress] = useState<any | null>(null);

  const renderMeasurementTable = (
    title: string,
    data: Record<string, string>
  ) => (
    <View style={styles.measurementSection}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <View style={styles.table}>
        {Object.entries(data).map(([key, value], idx) => (
          <View style={styles.cell} key={idx}>
            <Text style={styles.cellLabel}>{key}</Text>
            <Text style={styles.cellValue}>{value}</Text>
          </View>
        ))}
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <StitchHeader />

      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.heading}>Order Details</Text>

        {/* Order Summary Section */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Order Summary</Text>
          <View style={styles.summaryRow}>
            <Text style={styles.label}>Order ID:</Text>
            <Text style={styles.value}>{orderId}</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.label}>Total Garments:</Text>
            <Text style={styles.value}>{dummyDresses.length}</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.label}>Total Price:</Text>
            <Text style={styles.value}>₹ 4500</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.label}>Payment Status:</Text>
            <Text style={styles.value}>Paid</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.label}>Delivery Date:</Text>
            <Text style={styles.value}>20 Sept, 2025</Text>
          </View>
        </View>

        {/* Dresses Section */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Garments / Dresses</Text>
          <FlatList
            data={dummyDresses}
            horizontal
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => setSelectedDress(item)}>
                <Image source={{ uri: item.pic }} style={styles.dressImage} />
              </TouchableOpacity>
            )}
            contentContainerStyle={{ marginTop: 12 }}
          />
        </View>
      </ScrollView>

      {/* ------- Modal Popup ------- */}
      <Modal
        visible={!!selectedDress}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setSelectedDress(null)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <Image
                source={{ uri: selectedDress?.pic }}
                style={styles.modalImage}
              />

              {renderMeasurementTable(
                "Top Measurements",
                selectedDress?.topMeasurements || {}
              )}
              {renderMeasurementTable(
                "Bottom Measurements",
                selectedDress?.bottomMeasurements || {}
              )}

              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setSelectedDress(null)}
              >
                <Text style={styles.closeText}>Close</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default OrderDetailScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.black,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  container: {
    paddingHorizontal: 20,
    paddingBottom: 30,
    backgroundColor: COLORS.black,
  },
  heading: {
    fontSize: 40,
    color: COLORS.white,
    fontFamily: FONTS.semiBoldItalic,
    textAlign: "center",
    marginBottom: 20,
  },
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 18,
    fontFamily: FONTS.latoB,
    marginBottom: 10,
    color: COLORS.black,
  },
  dressImage: {
    width: 90,
    height: 90,
    borderRadius: 10,
    marginRight: 10,
  },

  // Summary
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 6,
  },
  label: {
    fontFamily: FONTS.latoB,
    color: COLORS.black,
  },
  value: {
    fontFamily: FONTS.latoR,
    color: COLORS.black,
  },

  // Modal
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalCard: {
    backgroundColor: COLORS.white,
    borderRadius: 20,
    padding: 16,
    width: "90%",
    maxHeight: "85%",
  },
  modalImage: {
    width: "100%",
    height: 150,
    borderRadius: 12,
    marginBottom: 12,
  },
  measurementSection: {
    marginBottom: 16,
    backgroundColor: COLORS.lilac,
    padding: 10,
    borderRadius: 12,
  },
  sectionTitle: {
    fontFamily: FONTS.latoB,
    fontSize: 16,
    marginBottom: 8,
    color: COLORS.black,
  },
  table: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  cell: {
    width: "33%",
    marginBottom: 8,
  },
  cellLabel: {
    fontFamily: FONTS.latoB,
    fontSize: 12,
    color: COLORS.black,
  },
  cellValue: {
    fontFamily: FONTS.latoR,
    fontSize: 12,
    color: COLORS.black,
  },
  closeButton: {
    backgroundColor: COLORS.lilac,
    borderRadius: 12,
    paddingVertical: 10,
    alignItems: "center",
  },
  closeText: {
    fontFamily: FONTS.latoB,
    color: COLORS.black,
  },
});
