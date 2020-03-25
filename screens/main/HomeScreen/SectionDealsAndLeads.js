import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import InlineSectionTitle from "../../../components/InlineSectionTitle";
import { widthPercentage } from "../../../utils/size";
import Card from "../../../components/Card";
import ProgressBar from "../../../components/ProgressBar";

const mockData = [
  {
    id: 1,
    avatar_url:
      "https://media-exp1.licdn.com/dms/image/C560BAQHEreYpKCX6jQ/company-logo_200_200/0?e=2159024400&v=beta&t=js-rXTeV50XTxWosiHxs2sOVlTAm0AzzTM9UxFPxzPE",
    text: "Courts",
    percentage: 40,
    todos: [
      {
        id: 1,
        avatar_url:
          "https://pngimage.net/wp-content/uploads/2018/06/girl-avatar-png-3.png",
        dealsImage:
          "https://media-exp1.licdn.com/dms/image/C560BAQHEreYpKCX6jQ/company-logo_200_200/0?e=2159024400&v=beta&t=js-rXTeV50XTxWosiHxs2sOVlTAm0AzzTM9UxFPxzPE",
        text: "Allison from Courts hasn't responded in 3 Days. Follow up?"
      }
    ]
  },
  {
    id: 2,
    avatar_url:
      "https://i.pinimg.com/originals/cb/14/a4/cb14a4b97cc5ca03bbfa5a8b8e1bc5c0.jpg",
    text: "Singapore Airlines",
    percentage: 25,
    todos: [
      {
        id: 1,
        avatar_url:
          "https://icons-for-free.com/iconfiles/png/512/boy+guy+man+icon-1320166733913205010.png",
        dealsImage:
          "https://i.pinimg.com/originals/cb/14/a4/cb14a4b97cc5ca03bbfa5a8b8e1bc5c0.jpg",
        text:
          "Prepare for your meeting tomorrow with Carl from Singapore Airlines?"
      },
      {
        id: 2,
        avatar_url:
          "https://i.pinimg.com/originals/cb/14/a4/cb14a4b97cc5ca03bbfa5a8b8e1bc5c0.jpg",
        dealsImage: null,
        text: "Have you sent the signed NDA to Singapore Airlines?"
      }
    ]
  },
  {
    id: 3,
    avatar_url:
      "https://cdn.iconscout.com/icon/free/png-512/nestle-1-226275.png",
    text: "Nestle",
    percentage: 80,
    todos: [
      {
        id: 1,
        avatar_url:
          "https://cdn.iconscout.com/icon/free/png-512/nestle-1-226275.png",
        dealsImage: null,
        text: "Finish debrief for yesterday's meeting with Sam from Nestle"
      }
    ]
  }
];

const SectionDealsAndLeads = () => {
  const navigation = useNavigation();
  const [data, setData] = useState(null);
  useEffect(() => {
    setData(mockData);
  }, [data, mockData]);

  const VerticalProgress = ({ percentage = 0 }) => {
    return (
      <View
        style={{
          width: 50,
          transform: [{ rotate: "-90deg" }]
        }}
      >
        <ProgressBar style={{ marginTop: 16 }} percentage={percentage} />
      </View>
    );
  };

  const Item = ({ data }) => {
    return (
      <Card
        onPress={() => navigation.navigate("Detail", { data })}
        contentContainerStyle={styles.col}
        contentStyle={styles.itemContentWrapper}
      >
        <View style={styles.itemContentContainer}>
          <Image source={{ uri: data.avatar_url }} style={styles.image} />
          <Text style={{ fontSize: 16, paddingLeft: 10 }}>{data.text}</Text>
        </View>
        <VerticalProgress percentage={data.percentage} />
      </Card>
    );
  };

  return (
    <View style={styles.sectionContainer}>
      <InlineSectionTitle
        title="Deals and leads"
        contentSectionLengthTitle={data ? data.length : 0}
        style={{ marginBottom: 18 }}
      />
      <View style={styles.colContainer}>
        {data && data.map(item => <Item key={item.id} data={item} />)}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 18
  },
  itemContentWrapper: {
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 16
  },
  itemContentContainer: {
    flexDirection: "row",
    flexShrink: 1,
    alignItems: "center"
  },
  image: {
    height: 40,
    width: 40,
    borderRadius: 30,
    resizeMode: "stretch",
    backgroundColor: "#bebebe"
  },
  colContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  col: {
    marginBottom: 8,
    width: widthPercentage(49),
    justifyContent: "space-between"
  }
});

export default SectionDealsAndLeads;
