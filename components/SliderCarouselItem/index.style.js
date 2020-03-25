import { StyleSheet } from "react-native";
import { itemHorizontalMargin } from "../../utils/size";

export default StyleSheet.create({
  text: {
    fontSize: 13,
    fontWeight: "bold",
    letterSpacing: 0.5,
    marginBottom: itemHorizontalMargin + 15
  },
  cardContainer: {
    shadowOffset: { width: 2, height: 2 },
    shadowColor: "#bebebe",
    shadowOpacity: 0.3
  }
});
