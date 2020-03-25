import React from "react";
import { Text } from "react-native";
import styles from "./index.style";
import ProgressBar from "../ProgressBar";
import Card from "../Card";
import { itemHorizontalMargin } from "../../utils/size";

const SliderCarouselItem = ({ text, progress = 0 }) => {
  return (
    <Card
      onPress={() => {
        alert(`You've clicked '${text}'`);
      }}
      contentContainerStyle={styles.cardContainer}
      contentStyle={{
        paddingHorizontal: itemHorizontalMargin + 15
      }}
    >
      <Text style={styles.text}>{text}</Text>
      <ProgressBar percentage={progress} />
    </Card>
  );
};

export default SliderCarouselItem;
