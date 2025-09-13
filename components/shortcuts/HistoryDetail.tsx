import React, { FC } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { OrderHistoryI } from "../../types";
import { COLORS, FONTS } from "../../theme";
import type { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "./OrderHistory";

type NavigationProp = StackNavigationProp<RootStackParamList, "History">;

const HistoryDetail: FC<OrderHistoryI> = ({
  TAmount,
  deliveredOn,
  orderId,
  placedOn,
}) => {
  const navigation = useNavigation<NavigationProp>();
  return (
    <View style={styles.wrapper}>
      <View style={styles.card}>
        {/* Left side: Order Info */}
        <View style={styles.left}>
          <Text style={styles.orderId}>Order ID: {orderId}</Text>
          <Text style={styles.info}>Placed: {placedOn}</Text>
          <Text style={styles.info}>Delivered: {deliveredOn}</Text>
          <Text style={styles.amount}>Total Amount: {TAmount}/-</Text>
        </View>

        {/* Right side: Actions */}
        <View style={styles.right}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("OrderDetails", { orderId })}
          >
            <Text style={styles.buttonText}>Order Details</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HistoryDetail;

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 20,
    // padding: 12,
    marginBottom: 16,
  },
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  left: {
    flex: 1,
  },
  orderId: {
    fontFamily: FONTS.latoB,
    fontSize: 14,
    color: COLORS.black,
    marginBottom: 4,
  },
  info: {
    fontFamily: FONTS.latoR,
    fontSize: 12,
    color: COLORS.black,
    marginBottom: 2,
  },
  amount: {
    fontFamily: FONTS.latoB,
    fontSize: 14,
    color: COLORS.black,
    marginTop: 6,
  },
  right: {
    marginLeft: 12,
    justifyContent: "center",
  },
  button: {
    backgroundColor: COLORS.lilac,
    borderRadius: 12,
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginBottom: 8,
  },
  buttonText: {
    fontSize: 14,
    fontFamily: FONTS.latoB,
    color: COLORS.black,
  },
});
