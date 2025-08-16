import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";
import { COLORS } from "../theme";

const { width } = Dimensions.get("window");

const images = [
  "https://picsum.photos/800/400?random=1",
  "https://picsum.photos/800/400?random=2",
  "https://picsum.photos/800/400?random=3",
];

export default function CarouselBanner() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<ScrollView>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  // Handle swipe scroll end
  const handleMomentumEnd = (
    event: NativeSyntheticEvent<NativeScrollEvent>
  ) => {
    const slide = Math.round(event.nativeEvent.contentOffset.x / width);
    setActiveIndex(slide);
  };

  // Autoplay effect
  useEffect(() => {
    startAutoPlay();
    return stopAutoPlay; // Cleanup on unmount
  }, [activeIndex]);

  const startAutoPlay = () => {
    stopAutoPlay(); // clear existing before starting new
    autoPlayRef.current = setInterval(() => {
      const nextIndex = (activeIndex + 1) % images.length;
      scrollRef.current?.scrollTo({
        x: nextIndex * width,
        animated: true,
      });
      setActiveIndex(nextIndex);
    }, 3000);
  };

  const stopAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
  };

  return (
    <View>
      <ScrollView
        ref={scrollRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleMomentumEnd}
        onTouchStart={stopAutoPlay} // Pause autoplay when user interacts
        onTouchEnd={startAutoPlay} // Resume autoplay after interaction
      >
        {images.map((img, index) => (
          <View key={index} style={styles.imageWrapper}>
            <Image source={{ uri: img }} style={styles.image} />
          </View>
        ))}
      </ScrollView>

      {/* Pagination Dots */}
      {/* <View style={styles.pagination}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[styles.dot, activeIndex === index && styles.activeDot]}
          />
        ))}
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  imageWrapper: {
    width: width - 20,
    height: 200,
    marginHorizontal: 10,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: COLORS.border,
  },
  image: { width: "100%", height: "100%" },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.border,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: COLORS.primary,
    width: 16,
  },
});
