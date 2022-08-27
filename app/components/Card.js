import React from "react";
import { View, StyleSheet, Image } from "react-native";

import colors from "../config/colors";

function Card({ image, isMain }) {
  return (
    <View style={isMain? styles.cardMain: styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailsContainer}/>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  mainCard: {
    borderRadius: 20,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
  title: {
    marginBottom: 7,
  },
});

export default Card;
