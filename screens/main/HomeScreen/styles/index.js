import { StyleSheet } from "react-native";

const homeScreenStyles = {
  container: {
    flex: 1,
    backgroundColor: "#ddeefd"
  }
};

const bannerStyles = {
  title: { fontSize: 16, fontWeight: "300", paddingLeft: 20 }
};

export default StyleSheet.create({
  ...homeScreenStyles,
  ...bannerStyles
});
