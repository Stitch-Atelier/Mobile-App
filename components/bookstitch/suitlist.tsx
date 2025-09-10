import React, { useState, useRef, useEffect } from "react";
import StitchHeader from "../StitchHeader";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Platform,
  ScrollView,
  Modal,
  TextInput,
  Animated,
} from "react-native";
import { COLORS, FONTS } from "../../theme";

type Suit = {
  id: number;
  name: string;
  garment?: string;
};

type Quantities = Record<number, number>;

const SuitList: React.FC = () => {
  const [step, setStep] = useState<"list" | "address" | "summary" | "success">(
    "list"
  );

  // Address State
  const [savedAddress, setSavedAddress] = useState<string | null>(
    "P-145, Garden Colony, Ropar"
  );
  const [isNewAddress, setIsNewAddress] = useState(false);
  const [newAddress, setNewAddress] = useState("");

  const [suits, setSuits] = useState<Suit[]>([
    { id: 1, name: "Classic Black Suit" },
    { id: 2, name: "Navy Blue Suit" },
    { id: 3, name: "Grey Formal Suit" },
    { id: 4, name: "Royal Tuxedo" },
    { id: 5, name: "Slim Fit Suit" },
    { id: 6, name: "Italian Linen Suit" },
    { id: 7, name: "Velvet Party Suit" },
    { id: 8, name: "Checked Formal Suit" },
    { id: 9, name: "Wedding Designer Suit" },
    { id: 10, name: "Luxury Tuxedo" },
  ]);

  const [quantities, setQuantities] = useState<Quantities>(
    suits.reduce<Quantities>((acc, suit) => ({ ...acc, [suit.id]: 0 }), {})
  );

  const [modalVisible, setModalVisible] = useState(false);
  const [suitType, setSuitType] = useState("");
  const [garmentType, setGarmentType] = useState("");

  // Animation
  const scaleAnim = useRef(new Animated.Value(0.8)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;

  const updateQuantity = (id: number, change: number): void => {
    setQuantities((prev) => {
      const newQty = Math.max(0, (prev[id] || 0) + change);
      return { ...prev, [id]: newQty };
    });
  };

  const totalItems: number = Object.values(quantities).reduce(
    (a, b) => a + b,
    0
  );

  const handleAddSuit = () => {
    if (suitType.trim()) {
      const newSuit: Suit = {
        id: suits.length + 1,
        name: suitType,
        garment: garmentType,
      };
      setSuits((prev) => [...prev, newSuit]);
      setQuantities((prev) => ({ ...prev, [newSuit.id]: 0 }));
      setSuitType("");
      setGarmentType("");
      setModalVisible(false);
    }
  };

  // Pricing (example: assume each suit = 1000)
  const pricePerItem = 1000;
  const orderTotal = totalItems * pricePerItem;

  useEffect(() => {
    if (step === "success") {
      Animated.parallel([
        Animated.spring(scaleAnim, {
          toValue: 1,
          useNativeDriver: true,
        }),
        Animated.timing(opacityAnim, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      scaleAnim.setValue(0.8);
      opacityAnim.setValue(0);
    }
  }, [step]);

  useEffect(() => {
    if (modalVisible) {
      Animated.parallel([
        Animated.spring(scaleAnim, {
          toValue: 1,
          useNativeDriver: true,
        }),
        Animated.timing(opacityAnim, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      scaleAnim.setValue(0.8);
      opacityAnim.setValue(0);
    }
  }, [modalVisible]);

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
          <Text style={styles.heading}>Stitch</Text>
          <Text style={styles.subHeading}>Pick your choice</Text>
        </View>

        {/* List Container */}
        <View style={styles.listBox}>
          {/* Scrollable Only List Items */}
          <ScrollView
            style={styles.scrollView}
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
          >
            {suits.map((suit) => (
              <View key={suit.id} style={styles.suitRow}>
                <Text style={styles.suitName}>
                  {suit.name} {suit.garment ? `(${suit.garment})` : ""}
                </Text>

                <View style={styles.qtyControl}>
                  <TouchableOpacity
                    onPress={() => updateQuantity(suit.id, -1)}
                    style={styles.qtyButton}
                  >
                    <Text style={styles.qtyButtonText}>-</Text>
                  </TouchableOpacity>

                  <Text style={styles.qtyText}>{quantities[suit.id] || 0}</Text>

                  <TouchableOpacity
                    onPress={() => updateQuantity(suit.id, 1)}
                    style={styles.qtyButton}
                  >
                    <Text style={styles.qtyButtonText}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </ScrollView>

          {/* Fixed Footer */}
          <View style={styles.footer}>
            {/* <TouchableOpacity
              style={styles.customButton}
              onPress={() => setModalVisible(true)}
            >
              <Text style={styles.customButtonText}>Custom</Text>
            </TouchableOpacity> */}

            <View style={styles.totalBox}>
              <Text style={styles.totalText}>Total: {totalItems}</Text>
            </View>

            <TouchableOpacity
              style={styles.nextButton}
              onPress={() => setStep("address")}
            >
              <Text style={styles.nextButtonText}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {step === "address" && (
        <Modal transparent animationType="fade" visible>
          <View style={styles.modalOverlay}>
            <View style={styles.modalBox}>
              <Text style={styles.modalTitle}>Choose Address</Text>

              {/* Already saved address */}
              <Text
                style={{
                  fontFamily: FONTS.latoB,
                  padding: 12,
                  backgroundColor: COLORS.white,
                  borderRadius: 12,
                  marginBottom: 10,
                }}
              >
                Saved Address:-
                <Text style={{ fontFamily: FONTS.latoR }}>{savedAddress}</Text>
              </Text>

              {/* Add New Address */}
              {isNewAddress && (
                <TextInput
                  placeholder="New Address"
                  value={newAddress || ""}
                  onChangeText={setNewAddress}
                  style={styles.input}
                />
              )}

              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  alignItems: "flex-start",
                  marginBottom: 10,
                  width: "100%",
                  backgroundColor: COLORS.black,
                  borderRadius: 12,
                }}
                onPress={() => setIsNewAddress(!isNewAddress)}
              >
                <Text
                  style={{
                    color: COLORS.white,
                    fontFamily: FONTS.latoB,
                    padding: 10,
                  }}
                >
                  {isNewAddress ? "+ Add New" : "Go with Saved"} Address
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.nextButton}
                onPress={() => {
                  if (!newAddress && !savedAddress) {
                    alert("Address is incomplete");
                    return;
                  }
                  setStep("summary");
                }}
              >
                <Text style={styles.nextButtonText}>Next</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}

      {step === "summary" && (
        <Modal transparent animationType="fade" visible>
          <View style={styles.modalOverlay}>
            <View style={styles.modalBox}>
              <Text style={styles.modalTitle}>Booking Summary</Text>

              <Text
                style={{
                  fontFamily: FONTS.latoB,
                  fontSize: 16,
                  textAlign: "left",
                  width: "100%",
                }}
              >
                Review and confirm your Stitch booking details
              </Text>

              <View
                style={{
                  padding: 12,
                  borderRadius: 20,
                  backgroundColor: COLORS.white,
                  marginVertical: 10,
                }}
              >
                <Text
                  style={{
                    fontFamily: FONTS.latoB,
                    fontSize: 16,
                  }}
                >
                  {" "}
                  👗 Dresses:
                </Text>
                <View
                  style={{
                    height: 1,
                    width: "auto",
                    backgroundColor: COLORS.black,
                    borderWidth: 0.5,
                    marginVertical: 4,
                  }}
                ></View>
                <View>
                  {/* Order Items */}
                  {suits.map(
                    (suit) =>
                      quantities[suit.id] > 0 && (
                        <Text
                          key={suit.id}
                          style={{ fontFamily: FONTS.latoR, marginVertical: 2 }}
                        >
                          {suit.name} x {quantities[suit.id]} = ₹
                          {quantities[suit.id] * pricePerItem}
                        </Text>
                      )
                  )}
                </View>

                <Text
                  style={{
                    fontFamily: FONTS.latoB,
                    fontSize: 16,
                    marginTop: 8,
                  }}
                >
                  {" "}
                  🏠 Address:
                </Text>

                <View
                  style={{
                    height: 1,
                    width: "auto",
                    backgroundColor: COLORS.black,
                    borderWidth: 0.8,
                    marginVertical: 4,
                  }}
                ></View>
                <Text style={{ paddingVertical: 4, fontFamily: FONTS.latoR }}>
                  {newAddress || savedAddress}
                </Text>

                <Text
                  style={{
                    fontFamily: FONTS.latoB,
                    fontSize: 16,
                    marginTop: 8,
                  }}
                >
                  {" "}
                  💳 Payments:
                </Text>

                <View
                  style={{
                    height: 1,
                    width: "auto",
                    backgroundColor: COLORS.black,
                    borderWidth: 0.5,
                    marginVertical: 4,
                  }}
                ></View>
                <Text style={{ paddingVertical: 4, fontFamily: FONTS.latoR }}>
                  You'll pay after the stitching is delivered and checked
                </Text>

                <Text style={{ fontFamily: FONTS.latoB, marginTop: 10 }}>
                  Total: ₹{orderTotal}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  marginTop: 20,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <TouchableOpacity
                  style={[styles.cancelButton, { marginRight: 10 }]}
                  onPress={() => setStep("list")}
                >
                  <Text style={styles.cancelButtonText}>Cancel</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.addButton}
                  onPress={() => setStep("success")}
                >
                  <Text style={styles.addButtonText}>Confirm Order</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      )}

      {step === "success" && (
        <Modal transparent animationType="fade" visible>
          <View style={styles.modalOverlay}>
            <Animated.View
              style={[
                styles.modalBox,
                { transform: [{ scale: scaleAnim }], opacity: opacityAnim },
              ]}
            >
              <Text style={styles.modalTitle}>
                ✅ Visit Successfully Booked!
              </Text>
              <Text style={{ fontFamily: FONTS.latoR }}>
                ThankYou. Your visit has been scheduled.
              </Text>
              <Text>We'll contact you shortly.</Text>

              <TouchableOpacity
                style={styles.addButton}
                onPress={() => setStep("list")}
              >
                <Text style={styles.addButtonText}>Go Back</Text>
              </TouchableOpacity>
            </Animated.View>
          </View>
        </Modal>
      )}
    </SafeAreaView>
  );
};

export default SuitList;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.black,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: COLORS.black,
    marginBottom: 100,
  },
  header: {
    marginBottom: 32,
  },
  heading: {
    fontSize: 100,
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
  listBox: {
    backgroundColor: COLORS.lilac,
    padding: 16,
    borderRadius: 20,
  },
  scrollView: {
    flexGrow: 0,
    maxHeight: 320,
  },
  scrollContent: {
    paddingBottom: 10,
  },
  suitRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: COLORS.white,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    marginVertical: 4,
  },
  suitName: {
    fontSize: 16,
    color: COLORS.black,
    fontFamily: FONTS.latoB,
  },
  qtyControl: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.lilac,
    padding: 8,
    borderRadius: 20,
  },
  qtyButton: {
    backgroundColor: COLORS.white,
    borderRadius: 20,
    height: 24,
    width: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  qtyButtonText: {
    fontSize: 18,
    color: COLORS.black,
    fontFamily: FONTS.latoB,
  },
  qtyText: {
    fontSize: 16,
    minWidth: 20,
    textAlign: "center",
    marginHorizontal: 10,
    fontFamily: FONTS.latoR,
    color: COLORS.black,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  customButton: {
    backgroundColor: COLORS.black,
    paddingVertical: 12,
    paddingHorizontal: 22,
    borderRadius: 30,
    elevation: 6,
  },
  customButtonText: {
    fontSize: 16,
    color: COLORS.white,
    fontFamily: FONTS.latoB,
    letterSpacing: 0.5,
  },
  totalBox: {
    backgroundColor: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 24,
    elevation: 4,
  },
  totalText: {
    fontSize: 16,
    fontFamily: FONTS.latoB,
    color: COLORS.black,
  },
  nextButton: {
    backgroundColor: COLORS.black,
    paddingVertical: 12,
    paddingHorizontal: 22,
    borderRadius: 30,
    elevation: 6,
  },
  nextButtonText: {
    fontSize: 16,
    color: COLORS.white,
    fontFamily: FONTS.latoB,
    letterSpacing: 0.5,
  },

  // Modal styles
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalBox: {
    width: "80%",
    backgroundColor: COLORS.lilac,
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
    fontFamily: FONTS.latoB,
    marginBottom: 8,
    color: COLORS.black,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    backgroundColor: COLORS.white,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    fontFamily: FONTS.latoR,
    color: COLORS.black,
  },
  addButton: {
    backgroundColor: COLORS.black,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 12,
    marginVertical: 10,
  },
  addButtonText: {
    color: COLORS.white,
    fontSize: 16,
    fontFamily: FONTS.latoB,
  },
  cancelButton: {
    paddingVertical: 8,
  },
  cancelButtonText: {
    fontSize: 14,
    color: COLORS.black,
    fontFamily: FONTS.latoR,
  },
});
