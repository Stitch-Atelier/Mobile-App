import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { COLORS, FONTS } from "../theme";
import { Ionicons } from "@expo/vector-icons";

type Testimonial = {
  id: string;
  name: string;
  role: string;
  review: string;
  rating: number;
  avatar: string;
};

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Aarav Mehta",
    role: "Regular Customer",
    review:
      "Excellent stitching service! My suit fits perfectly and the fabric quality is amazing. Highly recommended!",
    rating: 5,
    avatar: "https://i.pravatar.cc/100?img=1",
  },
  {
    id: "2",
    name: "Priya Sharma",
    role: "Fashion Designer",
    review:
      "I loved the detailing and precision in the stitching. Definitely going to be a returning customer.",
    rating: 4,
    avatar: "https://i.pravatar.cc/100?img=2",
  },
  {
    id: "3",
    name: "Rahul Verma",
    role: "Wedding Client",
    review:
      "Great experience! My wedding outfit was delivered on time with perfect measurements.",
    rating: 5,
    avatar: "https://i.pravatar.cc/100?img=3",
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <View style={{ flexDirection: "row" }}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Ionicons
          key={index}
          name={index < rating ? "star" : "star-outline"}
          size={12}
          color="#facc15"
        />
      ))}
    </View>
  );
};

export default function Testimonials() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>What Our Clients Say</Text>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={testimonials}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.header}>
              <Image source={{ uri: item.avatar }} style={styles.avatar} />
              <View>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.role}>{item.role}</Text>
              </View>
            </View>

            <Text style={styles.review} numberOfLines={3}>
              "{item.review}"
            </Text>

            <StarRating rating={item.rating} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginTop: 10, marginHorizontal: 10 },
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
    width: 250,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 3,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  avatar: { width: 45, height: 45, borderRadius: 25, marginRight: 10 },
  name: { fontFamily: FONTS.semiBold, fontSize: 16, color: COLORS.text },
  role: { fontFamily: FONTS.light, fontSize: 13, color: COLORS.textLight },
  review: {
    fontFamily: FONTS.regular,
    fontSize: 14,
    color: COLORS.textLight,
    marginBottom: 10,
  },
});
