import React, { FC } from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import { OrderI, DressI } from "../../types";
import { COLORS } from "../../theme";

const steps = ["Cutting", "Top Stitch", "Bottom Stitch", "Hemming", "Stitched"];

const PerOrder: FC<OrderI> = ({ dressesCnt, orderId, dressesList, tDate }) => {
  const renderDress = ({ item }: { item: DressI }) => {
    return (
      <View style={styles.dressContainer}>
        {/* Dress Image */}
        <Image source={{ uri: item.pic }} style={styles.dressImage} />

        {/* Progress Steps */}
        <View style={styles.progressContainer}>
          {/* <View style={styles.progressLine} /> */}
          {steps.map((label, idx) => {
            const active = idx <= item.progressStatus;

            return idx % 2 === 0 ? (
              <View key={idx} style={styles.stepWrapper}>
                <View
                  style={[
                    styles.stepDot,
                    active && { backgroundColor: "#5E17EB" },
                  ]}
                />
                <Text style={styles.stepLabel}>{label}</Text>
              </View>
            ) : (
              <View key={idx} style={styles.stepWrapper}>
                <Text style={styles.stepLabel}>{label}</Text>
                <View
                  style={[
                    styles.stepDot,
                    active && { backgroundColor: "#5E17EB" },
                  ]}
                />
              </View>
            );
          })}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.card}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Order ID: {orderId}</Text>
        <Text style={styles.headerText}>Placed: {tDate}</Text>
      </View>
      <Text style={styles.subHeader}>Garments/Dresses: {dressesCnt}</Text>

      {/* Dresses List */}
      <FlatList
        data={dressesList}
        renderItem={renderDress}
        keyExtractor={(item, index) => `${item.dressID}-${index}`}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

export default PerOrder;

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.lilac, // light purple like screenshot
    padding: 12,
    borderRadius: 12,
    margin: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },
  headerText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#000",
  },
  subHeader: {
    fontSize: 13,
    fontWeight: "500",
    marginBottom: 8,
    color: "#000",
  },
  dressContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 8,
  },
  dressImage: {
    width: 80,
    height: 80,
    borderRadius: 6,
    marginRight: 10,
  },
  progressContainer: {
    // borderWidth: 1,
    // borderColor: "black",
    width: "70%",
    flexDirection: "row",
  },
  //   progressLine: {
  //     position: "absolute",
  //     top: 18,
  //     left: 0,
  //     right: 0,
  //     height: 4,
  //     backgroundColor: "#E0C6FF", // light lavender line
  //     borderRadius: 2,
  //   },
  stepWrapper: {
    // borderWidth: 2,
    // borderColor: "red",
    flex: 1,
  },
  stepDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#E0C6FF",
    marginBottom: 4,
    margin: "auto",
  },
  stepLabel: {
    fontSize: 10,
    textAlign: "center",
    color: "#000",
  },
  separator: {
    height: 1,
    backgroundColor: "#ccc",
    marginVertical: 8,
  },
});
