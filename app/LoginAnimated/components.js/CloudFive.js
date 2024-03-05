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

const CloudFive = () => {
  const widthSize = Dimensions.get("screen").width;
  const heightSize = Dimensions.get("screen").height;

  const translateX = useSharedValue(-100);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value * 1.5 }],
    };
  });

  useEffect(() => {
    translateX.value = withRepeat(
      withTiming(widthSize, {
        duration: 15000,
        easing: Easing.linear,
        loop: -1,
        reset: true,
      }),
      1000
    );
  }, []);

  return (
    <Animated.View
      style={[
        styles.container,
        {
          bottom: heightSize * 1.2,
        },
        animatedStyle,
      ]}
    >
      <CloudSvg width={110} />
    </Animated.View>
  );
};

export default CloudFive;

const styles = StyleSheet.create({
  container: {
    position: "absolute",

    left: 0,
    width: "100%",
  },
});
