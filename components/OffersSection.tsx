// components/OffersSection.tsx
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { COLORS, FONTS } from "../theme";

const offers = [
  {
    id: "1",
    title: "Summer Sale",
    discount: "20% OFF",
    description: "On all alterations",

    bgColor: "#ECFDF5",
  },
  {
    id: "2",
    title: "Festive Offer",
    discount: "15% OFF",
    description: "On wedding outfits",
    bgColor: "#E0F2FE",
  },
  {
    id: "3",
    title: "Student Discount",
    discount: "10% OFF",
    description: "Valid with student ID",
    bgColor: "#FCE7F3",
  },
];

export default function OffersSection() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Ongoing Offers & Discounts</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16 }}
      >
        {offers.map((offer) => (
          <TouchableOpacity
            key={offer.id}
            style={[styles.card, { backgroundColor: offer.bgColor }]}
          >
            <Text style={styles.discount}>{offer.discount}</Text>
            <Text style={styles.title}>{offer.title}</Text>
            <Text style={styles.description}>{offer.description}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  heading: {
    fontFamily: FONTS.bold,
    fontSize: 20,
    color: COLORS.text,
    marginLeft: 16,
    marginBottom: 12,
  },
  card: {
    backgroundColor: COLORS.surface,
    marginVertical: 10,
    padding: 14,
    borderRadius: 16,
    marginHorizontal: 10,
    marginRight: 14,
    width: 200,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 3,
  },
  discount: {
    fontFamily: FONTS.extraBold,
    fontSize: 20,
    color: COLORS.primaryDark,
    marginBottom: 4,
  },
  title: {
    fontFamily: FONTS.bold,
    fontSize: 16,
    color: COLORS.text,
    marginBottom: 2,
  },
  description: {
    fontFamily: FONTS.light,
    fontSize: 14,
    color: COLORS.textLight,
  },
});
