import { StyleSheet } from "react-native";
import { itemHorizontalMargin, widthPercentage } from "../../utils/size";
import { colors } from "../../utils/theme";

const entryBorderRadius = 3;

export default StyleSheet.create({
  slideInnerContainer: {
    // paddingHorizontal: itemHorizontalMargin,
  },
  content: {
    justifyContent: "space-between",
    paddingTop: 20 - entryBorderRadius,
    paddingBottom: 20,
    backgroundColor: "white",
    borderTopRightRadius: entryBorderRadius,
    borderTopLeftRadius: entryBorderRadius,
    borderBottomLeftRadius: entryBorderRadius,
    borderBottomRightRadius: entryBorderRadius
  },
  shadow: {
    position: "absolute",
    top: 0,
    left: itemHorizontalMargin,
    right: itemHorizontalMargin,
    bottom: 18,
    shadowColor: colors.black,
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 10,
    borderRadius: entryBorderRadius
  }
});
