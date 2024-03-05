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

const CloudThree = () => {
  const widthSize = Dimensions.get("screen").width;

  const translateX = useSharedValue(-100);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value * 2.5 }],
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
      <CloudSvg width={120} />
    </Animated.View>
  );
};

export default CloudThree;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 300,
    left: 0,
    width: "100%",
  },
});
