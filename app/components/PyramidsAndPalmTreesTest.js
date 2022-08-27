import React from "react";
import { View, StyleSheet } from "react-native";

import Text from "./Text";
import colors from "../config/colors";
import CardsSetTest from "./CardsSetTest";

function PyramidAndPalmTreesTest(props) {
  return (
    <View style={styles.detailsContainer}>
      <CardsSetTest></CardsSetTest>
      <Text style={styles.title} numberOfLines={1}>
        {title}
      </Text>
      <Text style={styles.subTitle} numberOfLines={2}>
        {subTitle}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
  title: {
    marginBottom: 7,
  },
});

export default PyramidAndPalmTreesTest;