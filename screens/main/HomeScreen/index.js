import React from "react";
import { View, ScrollView } from "react-native";
import withErrorBoundary from "../../../components/hoc/withErrorBoundary";
import SectionBanner from "./SectionBanner";
import styles from "./styles/index";
import SectionThingsTodo from "./SectionThingsTodo";
import SectionDealsAndLeads from "./SectionDealsAndLeads";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
        <SectionBanner />
        <SectionThingsTodo />
        <SectionDealsAndLeads />
      </ScrollView>
    </View>
  );
};

export default withErrorBoundary(HomeScreen);
