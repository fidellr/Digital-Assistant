import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { colors } from "../../utils/theme";

const InlineSectionTitle = ({
  title,
  contentSectionLengthTitle = "",
  style
}) => {
  return (
    <View style={[styles.titleContainer, style]}>
      <Text style={styles.title}>{title}</Text>
      {typeof contentSectionLengthTitle !== "undefined" && (
        <View style={styles.contentSectionLengthTitleContainer}>
          <Text style={styles.contentSectionLengthTitle}>
            {contentSectionLengthTitle}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center"
  },
  title: { fontSize: 16, fontWeight: "300", paddingLeft: 20 },
  contentSectionLengthTitleContainer: {
    backgroundColor: "#fafafa",
    borderRadius: 6,
    marginLeft: 5
  },
  contentSectionLengthTitle: {
    fontSize: 11,
    color: colors.black,
    fontWeight: "600",
    alignItems: "center"
  }
});

export default InlineSectionTitle;
