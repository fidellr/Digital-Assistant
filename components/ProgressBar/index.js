import React from "react";
import { View } from "react-native";
import styles from "./index.styles";

const ProgressBar = ({ percentage, style }) => {
  const progressPercentage = percentage / 100;
  return (
    <View style={[styles.progressBar, style]}>
      <View style={[styles.innerProgressBar, { flex: progressPercentage }]} />
    </View>
  );
};

export default ProgressBar;
