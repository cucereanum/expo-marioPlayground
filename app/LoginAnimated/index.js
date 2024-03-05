import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import SunSvg from "./SunSvg";
import * as AppleAuthentication from "expo-apple-authentication";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  withRepeat,
  withSpring,
  withDelay,
  interpolate,
  Extrapolation,
} from "react-native-reanimated";

import CloudOne from "./components.js/CloudOne";
import CloudTwo from "./components.js/CloudTwo";
import CloudThree from "./components.js/CloudThree";
import CloudFour from "./components.js/CloudFour";
import CloudSix from "./components.js/CloudSix";
import CloudFive from "./components.js/CloudFive";
import PlaneSvg from "./PlaneSvg";
import BackgroundImg from "../../assets/background.png";

const LoginAnimated = () => {
  const rotation = useSharedValue(0);
  const translateX = useSharedValue(-100);
  const opacityLogin = useSharedValue(0);
  const opacitySignInApple = useSharedValue(0);

  const [darkTheme, setDarkTheme] = useState(false);
  const [loading, setLoading] = useState(false);

  const widthSize = Dimensions.get("screen").width;
  const heightSize = Dimensions.get("screen").height;

  const translateY = useSharedValue(heightSize);

  const scrollRef = useRef();

  const heightStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${rotation.value}deg` }],
    };
  });

  const loginAnimateStyle = useAnimatedStyle(() => {
    return {
      opacity: opacityLogin.value,
    };
  });
  const signInAnimateStyle = useAnimatedStyle(() => {
    return {
      opacity: opacitySignInApple.value,
    };
  });

  useEffect(() => {
    translateY.value = withDelay(
      1000,
      withSpring(0, {
        damping: 12,
        stiffness: 100,
        overshootClamping: false,
        restDisplacementThreshold: 0.01,
        restSpeedThreshold: 2,
      })
    );

    rotation.value = withRepeat(
      withTiming(360, {
        duration: 40000,
        easing: Easing.linear,
        loop: -1,
      }),
      1000
    );
    translateX.value = withRepeat(
      withTiming(widthSize, {
        duration: 30000,
        easing: Easing.linear,
      }),
      1000
    );

    opacityLogin.value = withDelay(1200, withTiming(1, { duration: 500 }));
    opacitySignInApple.value = withDelay(
      1400,
      withTiming(1, { duration: 500 })
    );
  }, []);

  const planeTranslateX = useSharedValue(0);

  const planeAnimatedStyle = useAnimatedStyle(() => {
    const translateX = interpolate(
      planeTranslateX.value,
      [0, 25, 50, 100, 105, 150, 175, 200],
      [400, 200, 0, -300, -350, -100, 0, 120]
    );
    const translateY = interpolate(
      planeTranslateX.value,
      [0, 25, 50, 100, 105, 150, 175, 200],
      [-200, -200, -180, -150, -50, -25, 0, 0]
    );
    const scale = interpolate(
      planeTranslateX.value,
      [0, 50, 100, 105, 150, 200],
      [0.3, 0.3, 0.3, 0.5, 0.8, 1]
    );

    const scaleX = interpolate(
      planeTranslateX.value,
      [0, 50, 100, 105, 150, 200],
      [1, 1, 1, -1, -1, -1]
    );

    const rotateZ = interpolate(
      planeTranslateX.value,
      [0, 150, 200],
      [0, 30, 0]
    );

    return {
      transform: [
        { translateX },
        { translateY },
        { scale },
        { scaleX },
        { rotateZ: `${rotateZ}deg` },
      ],
    };
  });

  useEffect(() => {
    if (scrollRef.current) {
      setLoading(true);
      setTimeout(() => {
        scrollRef.current.scrollToEnd({ animated: true });
        setLoading(false);
      }, 1000);
    }
    setTimeout(() => {
      planeTranslateX.value = withTiming(200, {
        duration: 10000,
      });
    }, 5500);
  }, []);

  const handlePress = () => {
    planeTranslateX.value = withTiming(0);
    setTimeout(() => {
      planeTranslateX.value = withTiming(200, {
        duration: 10000,
      });
    }, 2000);

    translateY.value = withTiming(heightSize);
    translateX.value = withTiming(-100);
    rotation.value = withTiming(0);
    opacityLogin.value = withTiming(0);
    opacitySignInApple.value = withTiming(0);

    setTimeout(() => {
      translateY.value = withDelay(
        1000,
        withSpring(0, {
          damping: 12,
          stiffness: 100,
          overshootClamping: false,
          restDisplacementThreshold: 0.01,
          restSpeedThreshold: 2,
        })
      );

      rotation.value = withRepeat(
        withTiming(360, {
          duration: 40000,
          easing: Easing.linear,
          loop: -1,
        }),
        1000
      );
      translateX.value = withRepeat(
        withTiming(widthSize, {
          duration: 30000,
          easing: Easing.linear,
        }),
        1000
      );

      opacityLogin.value = withDelay(1200, withTiming(1, { duration: 500 }));
      opacitySignInApple.value = withDelay(
        1400,
        withTiming(1, { duration: 500 })
      );
    }, 1000);
  };

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: darkTheme ? "#001A5C" : "#CCF9FF",
      }}
    >
      <ScrollView
        ref={scrollRef}
        contentContainerStyle={{
          width: "100%",
          alignItems: "center",
          height: heightSize * 2,
        }}
        scrollEnabled={false}
      >
        {!loading && (
          <Animated.View
            style={[
              {
                marginTop: 100,
              },
              animatedStyle,
            ]}
          >
            <SunSvg width={200} height={200} />
          </Animated.View>
        )}
        <CloudOne />
        <CloudTwo />
        <CloudThree />
        <CloudFour />
        <CloudFive />
        <CloudSix />

        {!loading && (
          <>
            <Animated.View
              style={[
                {
                  width: "90%",
                  paddingVertical: 40,
                  alignItems: "center",
                  shadowColor: "#000",
                  borderRadius: 10,
                },
                heightStyle,
              ]}
            >
              <Animated.View
                style={[
                  {
                    position: "absolute",
                    top: -30,
                    zIndex: 100,
                  },
                  planeAnimatedStyle,
                ]}
              >
                <PlaneSvg width={100} height={100} />
              </Animated.View>
              <Text
                style={{
                  fontSize: 34,
                  fontFamily: "JosefinSlab_700Bold",
                  marginBottom: 20,
                }}
              >
                Sign in to your account
              </Text>
              <TextInput
                style={styles.textInput}
                placeholder="Email"
                placeholderTextColor="#000"
              />
              <TextInput
                style={styles.textInput}
                placeholder="Password"
                placeholderTextColor="#000"
                secureTextEntry
              />
            </Animated.View>
            <Animated.View
              style={[
                loginAnimateStyle,
                {
                  width: "100%",
                  alignItems: "center",
                },
              ]}
            >
              <TouchableOpacity
                style={{
                  width: "90%",
                  height: 50,
                  backgroundColor: "#00B4CC",
                  marginTop: 50,
                  borderRadius: 6,
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onPress={handlePress}
              >
                <Text
                  style={{
                    letterSpacing: 5,
                    color: "#fff",
                    fontSize: 20,
                    fontFamily: "JosefinSlab_700Bold",
                  }}
                >
                  LOGIN
                </Text>
              </TouchableOpacity>
            </Animated.View>
            <Animated.View
              style={[
                signInAnimateStyle,
                {
                  width: "100%",
                  alignItems: "center",
                },
              ]}
            >
              <Text
                style={{
                  fontFamily: "JosefinSlab_700Bold",
                  fontSize: 25,
                  color: "#000",
                  marginVertical: 10,
                }}
              >
                or
              </Text>
              <AppleAuthentication.AppleAuthenticationButton
                buttonType={
                  AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN
                }
                buttonStyle={
                  AppleAuthentication.AppleAuthenticationButtonStyle.BLACK
                }
                cornerRadius={5}
                style={{
                  width: "90%",
                  height: 50,
                }}
              />
            </Animated.View>
          </>
        )}
        <View
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
          }}
        >
          <Image
            source={BackgroundImg}
            style={{
              width: "100%",
            }}
            resizeMode="cover"
          />
          <TouchableOpacity
            style={{
              width: "90%",
              height: 50,
              backgroundColor: "rgba(35,90,48,0.7)",
              marginTop: 30,
              borderRadius: 6,
              alignItems: "center",
              justifyContent: "center",
              position: "absolute",
              bottom: 150,
              alignSelf: "center",
            }}
            onPress={() => {
              scrollRef.current.scrollTo({
                y: 0,
                animated: true,
              });
            }}
          >
            <Text
              style={{
                letterSpacing: 5,
                color: "#fff",
                fontSize: 20,
                fontFamily: "JosefinSlab_700Bold",
              }}
            >
              LET'S GET STARTED
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#BEF7FF",
  },
  textInput: {
    width: "100%",
    borderWidth: 1,
    height: 40,
    borderRadius: 4,
    fontFamily: "JosefinSlab_600SemiBold",
    backgroundColor: "#BEF7FF",
    paddingHorizontal: 15,
    fontSize: 18,
    marginTop: 30,
  },
});

export default LoginAnimated;
