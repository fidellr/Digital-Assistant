import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView, Image, Text } from "react-native";
import ThingsTodoSwipeable from "../../../components/ThingsTodoSwipeable";
import withErrorBoundary from "../../../components/hoc/withErrorBoundary";
import { widthPercentage } from "../../../utils/size";

const DetailScreen = ({ route, navigation }) => {
  const { data: passedData } = route.params;
  const [data, setData] = useState(null);

  const renderHeaderTitle = (logo, title) => {
    return (
      <View
        style={{
          flexWrap: "wrap",
          flexDirection: "row",
          width: 140,
          alignItems: "center"
        }}
      >
        <Image
          source={{ uri: logo }}
          style={{
            width: widthPercentage(10),
            height: widthPercentage(10),
            borderRadius: 8
          }}
        />
        <Text
          style={{
            fontWeight: "300",
            paddingLeft: 20,
            flex: 1,
            flexWrap: "wrap",
            fontSize: 16
          }}
        >
          {title}
        </Text>
      </View>
    );
  };
  useEffect(() => {
    navigation.setOptions({
      headerTitle: () =>
        renderHeaderTitle(passedData.avatar_url, passedData.text)
    });
  }, [passedData]);

  useEffect(() => {
    if (!data && passedData) {
      setData(passedData.todos);
    }
  }, [data, passedData]);

  const onDeleteTodo = item => {
    setData(state => {
      const newData = state.filter(data => item.id !== data.id);
      return newData;
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
        <ThingsTodoSwipeable
          data={data}
          onDismiss={onDeleteTodo}
          onArchive={onDeleteTodo}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ddeefd",
    flex: 1
  }
});

export default withErrorBoundary(DetailScreen);
