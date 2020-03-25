import React from "react";
import { View, TouchableOpacity } from "react-native";
import styles from "./index.style";

const Card = ({
  onPress,
  children,
  disabled,
  contentStyle,
  contentContainerStyle
}) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={[contentContainerStyle, styles.slideInnerContainer]}
      onPress={onPress}
      disabled={disabled}
    >
      <View style={styles.shadow} />
      <View style={[contentStyle, styles.content]}>{children}</View>
    </TouchableOpacity>
  );
};

export default Card;
