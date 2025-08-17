import React, { useEffect, useRef } from "react";
import { View, StyleSheet, Animated, Text } from "react-native";
import { COLORS, FONTS } from "../theme"; // make sure this has correct mappings

const SplashScreen = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // opacity
  const scaleAnim = useRef(new Animated.Value(0.8)).current; // scale

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 5,
        tension: 100,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Text
        style={[
          styles.title,
          {
            opacity: fadeAnim,
            transform: [{ scale: scaleAnim }],
          },
        ]}
      >
        STITCH
      </Animated.Text>

      <Animated.Text
        style={[
          styles.subtitle,
          {
            opacity: fadeAnim,
            transform: [{ scale: scaleAnim }],
          },
        ]}
      >
        BUILT AROUND YOU
      </Animated.Text>
      <Text style={styles.loading}>Loading...</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: COLORS.white,
    fontSize: 42,
    fontFamily: FONTS?.extraBold || "System",
    letterSpacing: 2,
  },
  subtitle: {
    color: COLORS.white,
    fontSize: 16,
    marginTop: 4,
    fontFamily: FONTS?.regular || "System",
    letterSpacing: 1.5,
  },
  loading: {
    color: COLORS.white,
    fontSize: 12,
    marginTop: 8,
    fontFamily: FONTS?.regular || "System",
    letterSpacing: 1.5,
  },
});
