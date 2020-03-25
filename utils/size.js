import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
export const viewportWidth = width;
export const viewportHeight = height;
export const widthPercentage = percentage => {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
};

export const itemHorizontalMargin = widthPercentage(0.5);
export const carouselSlideWidth = widthPercentage(75);
export const carouselSlideHeight = viewportHeight * 0.2;
export const carouselItemWidth = carouselSlideWidth + itemHorizontalMargin * 2;
