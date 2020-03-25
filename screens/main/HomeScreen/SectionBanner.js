import React, { useRef } from "react";
import { Text, View } from "react-native";
import Carousel from "react-native-snap-carousel";
import SliderCarouselItem from "../../../components/SliderCarouselItem";
import { viewportWidth, carouselItemWidth } from "../../../utils/size";
import styles from "./styles";

const mockData = [
  {
    text:
      "Your commissions this quarter total $200. You could make $1,100 more from your pipeline",
    progress: 20.0
  },
  {
    text:
      "Your commissions this quarter total $32,400. You could make $14,200 more from your pipeline",
    progress: 70.0
  },
  {
    text:
      "Your commissions this quarter total $42,000. You could make $10,200 more from your pipeline",
    progress: 84.05
  }
];

const SectionBanner = () => {
  const carouselRef = useRef(null);

  const _renderCarouselItem = ({ item, i }) => {
    return <SliderCarouselItem text={item.text} progress={item.progress} />;
  };

  return (
    <View style={{ height: 150, marginTop: 30 }}>
      <Text style={[styles.title, { paddingBottom: 16 }]}>
        How you're doing?
      </Text>
      <Carousel
        ref={c => {
          carouselRef.current = c;
        }}
        firstItem={1}
        data={mockData}
        renderItem={_renderCarouselItem}
        sliderWidth={viewportWidth}
        itemWidth={carouselItemWidth}
        layout="default"
      />
    </View>
  );
};

export default SectionBanner;
