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

const CloudSix = () => {
  const widthSize = Dimensions.get("screen").width;

  const translateX = useSharedValue(-100);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  useEffect(() => {
    translateX.value = withRepeat(
      withTiming(widthSize, {
        duration: 50000,
        easing: Easing.linear,
        loop: -1,
        reset: true, // Reset the animation to the initial value when it's finished
      }),
      1000
    );
  }, []);

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <CloudSvg width={300} height={250} />
    </Animated.View>
  );
};

export default CloudSix;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: -100,
    left: 0,
    width: "100%",
  },
});
