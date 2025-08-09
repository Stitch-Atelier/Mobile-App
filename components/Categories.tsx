import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { COLORS, FONTS } from "../theme";

type Category = {
  id: string;
  name: string;
  price: string;
  image: string;
};

const categories: Category[] = [
  {
    id: "1",
    name: "Formal Stitch",
    price: "₹499",
    image: "https://picsum.photos/200/200?random=1",
  },
  {
    id: "2",
    name: "Casual Wear",
    price: "₹399",
    image: "https://picsum.photos/200/200?random=2",
  },
  {
    id: "3",
    name: "Wedding Special",
    price: "₹999",
    image: "https://picsum.photos/200/200?random=3",
  },
  {
    id: "4",
    name: "Wedding Special",
    price: "₹999",
    image: "https://picsum.photos/200/200?random=4",
  },
  {
    id: "5",
    name: "Wedding Special",
    price: "₹999",
    image: "https://picsum.photos/200/200?random=5",
  },
];

const CategoryCard = ({ item }: { item: Category }) => {
  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.85}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default function Categories() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Stitch Categories</Text>
      <FlatList
        data={categories}
        renderItem={({ item }) => <CategoryCard item={item} />}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 10 }}
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
    marginBottom: 10,
  },
  card: {
    backgroundColor: COLORS.surface,
    borderRadius: 16,
    marginRight: 14,
    marginVertical: 10,
    width: 150,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 3,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 110,
  },
  info: {
    padding: 10,
  },
  name: {
    fontFamily: FONTS.semiBold,
    fontSize: 16,
    color: COLORS.text,
    marginBottom: 4,
  },
  price: {
    fontFamily: FONTS.medium,
    fontSize: 14,
    color: COLORS.primary,
  },
});
