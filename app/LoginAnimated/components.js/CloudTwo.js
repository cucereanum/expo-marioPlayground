import { Dimensions, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  withRepeat,
} from "react-native-reanimated";

import CloudSvg from "./../CloudSvg";

const CloudTwo = () => {
  const widthSize = Dimensions.get("screen").width;

  const translateX = useSharedValue(-150);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value * 2 }],
    };
  });

  useEffect(() => {
    translateX.value = withRepeat(
      withTiming(widthSize, {
        duration: 20000,
        easing: Easing.linear,
        loop: -1,
        reset: true,
      }),
      1000
    );
  }, []);

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <CloudSvg width={90} />
    </Animated.View>
  );
};

export default CloudTwo;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 150,
    left: 0,
    width: "100%",
  },
});
