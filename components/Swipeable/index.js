import React, { useRef } from "react";
import { Animated, StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/Swipeable";
import Icons from "react-native-vector-icons/MaterialIcons";

const AnimatedIcon = Animated.createAnimatedComponent(Icons);

export default ({ children, style, onSwipeableRightOpened, onSwipeableLeftOpened }) => {
  const swipeableRef = useRef(null);

  const onClose = () => {
    swipeableRef.current.close();
  };

  const renderLeftActions = (progress, dragX) => {
    const scale = dragX.interpolate({
      inputRange: [0, 80],
      outputRange: [0, 1],
      extrapolate: "clamp"
    });

    return (
      <RectButton style={styles.leftAction} onPress={onClose}>
        <AnimatedIcon
          name="archive"
          size={30}
          color="#fff"
          style={[styles.actionIcon, { transform: [{ scale }] }]}
        />
      </RectButton>
    );
  };

  const renderRightActions = (progress, dragX) => {
    const scale = dragX.interpolate({
      inputRange: [-80, 0],
      outputRange: [1, 0],
      extrapolate: "clamp"
    });
    return (
      <RectButton style={styles.rightAction} onPress={onClose}>
        <AnimatedIcon
          name="delete-forever"
          size={30}
          color="#fff"
          style={[styles.actionIcon, { transform: [{ scale }] }]}
        />
      </RectButton>
    );
  };

  const onSwipeableRightOpen = () => {
    onSwipeableRightOpened(true)
  }

  const onSwipeableLeftOpen = () => {
    onSwipeableLeftOpened(true)
  }

  return (
    <Swipeable
      ref={ref => (swipeableRef.current = ref)}
      friction={3}
      leftThreshold={80}
      rightThreshold={80}
      onSwipeableRightOpen={onSwipeableRightOpen}
      onSwipeableLeftOpen={onSwipeableLeftOpen}
      renderLeftActions={renderLeftActions}
      renderRightActions={renderRightActions}
      containerStyle={style}
    >
      {children}
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  leftAction: {
    flex: 1,
    backgroundColor: "#388e3c",
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row-reverse"
  },
  actionIcon: {
    width: 30,
    marginHorizontal: 10
  },
  rightAction: {
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#dd2c00",
    flex: 1,
    justifyContent: "flex-end"
  }
});
