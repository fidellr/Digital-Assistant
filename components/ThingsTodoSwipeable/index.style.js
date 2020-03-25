import { StyleSheet } from "react-native";
import { widthPercentage, itemHorizontalMargin } from "../../utils/size";

export default StyleSheet.create({
  thingsTodoCardContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  thingsTodoCardImage: {
    height: 40,
    width: 40,
    borderRadius: 30,
    resizeMode: "stretch",
    backgroundColor: "#bebebe"
  },
  thingsTodoCardText: {
    flexWrap: "wrap",
    flex: 1,
    fontSize: 15,
    marginLeft: 10
  },
  imageContainer: {
    height: widthPercentage(12),
    width: widthPercentage(12),
    position: "relative"
  },
  dealsImage: {
    position: "absolute",
    right: 0,
    bottom: 0,
    width: widthPercentage(6),
    height: widthPercentage(6),
    borderRadius: 30,
    resizeMode: "stretch"
  },
  cardContainer: {
    shadowOffset: { width: 2, height: 2 },
    shadowColor: "#bebebe",
    shadowOpacity: 0.3,
    height: 90,
    borderRadius: 8
  },
  cardContent: {
    paddingHorizontal: itemHorizontalMargin + 5
  },
  swipeable: {
    height: 80
  }
});
