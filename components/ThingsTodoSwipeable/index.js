import React, { useState, useEffect, memo } from "react";
import { Text, View, Image, Animated, LayoutAnimation } from "react-native";
import Card from "../Card";
import Swipeable from "../Swipeable";
import InlineSectionTitle from "../InlineSectionTitle";
import styles from "./index.style";
import { viewportWidth } from "../../utils/size";

const Item = memo(
  ({
    data,
    onSwipeableRightOpened,
    onSwipeableLeftOpened,
    disabled,
    setDisable
  }) => {
    const animatedValue = new Animated.Value(0);

    useEffect(() => {
      Animated.timing(animatedValue, {
        toValue: 0.5,
        duration: 500,
        useNativeDriver: true
      }).start(() => setDisable(false));

      return () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      };
    }, []);

    const onDismiss = (isOpened, data) => {
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true
      }).start(() => {
        setDisable(true);
        onSwipeableRightOpened(isOpened, data);
      });
    };

    const onArchive = (isOpened, data) => {
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true
      }).start(() => {
        setDisable(true);
        onSwipeableLeftOpened(isOpened, data);
      });
    };

    const translate_Animation = animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [-viewportWidth, 0, viewportWidth]
    });
    const opacity_Animation = animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 1, 0]
    });

    return (
      <Animated.View
        style={{
          transform: [{ translateX: translate_Animation }],
          opacity: opacity_Animation
        }}
      >
        <View style={styles.cardContainer}>
          <Swipeable
            style={styles.swipeable}
            onSwipeableRightOpened={isOpened => onDismiss(isOpened, data)}
            onSwipeableLeftOpened={isOpened => onArchive(isOpened, data)}
          >
            <Card disabled={disabled} contentStyle={styles.cardContent}>
              <View style={styles.thingsTodoCardContainer}>
                <View style={styles.imageContainer}>
                  <Image
                    style={styles.thingsTodoCardImage}
                    source={{ uri: data.avatar_url }}
                  />
                  {data.dealsImage && (
                    <Image
                      source={{ uri: data.dealsImage }}
                      style={styles.dealsImage}
                    />
                  )}
                </View>
                <Text style={styles.thingsTodoCardText}>{data.text}</Text>
              </View>
            </Card>
          </Swipeable>
        </View>
      </Animated.View>
    );
  }
);

const TodoCards = ({ data, onDismiss, onArchive }) => {
  const [disabled, setDisable] = useState(false);

  const onSwipeableRightOpened = (isOpened, item) => {
    if (isOpened) {
      onDismiss(item);
    }
  };

  const onSwipeableLeftOpened = (isOpened, item) => {
    if (isOpened) {
      onArchive(item);
    }
  };

  return data.map(item => (
    <Item
      key={item.id}
      data={item}
      disabled={disabled}
      setDisable={isDisable => setDisable(isDisable)}
      onSwipeableRightOpened={onSwipeableRightOpened}
      onSwipeableLeftOpened={onSwipeableLeftOpened}
    />
  ));
};

const ThingsTodoSwipeable = ({ data, onDismiss, onArchive }) => {
  return (
    <View style={{ marginTop: 18 }}>
      <InlineSectionTitle
        title="Things to do"
        contentSectionLengthTitle={data ? data.length : 0}
        style={{ marginBottom: 18 }}
      />
      {data && (
        <TodoCards data={data} onDismiss={onDismiss} onArchive={onArchive} />
      )}
    </View>
  );
};

export default ThingsTodoSwipeable;
