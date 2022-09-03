import React from "react";
import { View, StyleSheet, Image } from "react-native";

import colors from "../config/colors";

function Card({ image, isMain }) {
  console.log("IS MAIN CARD: ", isMain)
  return (
    <View style={isMain? styles.mainCard: styles.card}>
      <Image style={styles.image} source={image} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
    backgroundColor: colors.white,
    margin: 20,
    flex: 1,
    overflow: "hidden",
    alignContent:'center',
    justifyContent:'center',
    position:'relative',
  },
  mainCard: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    margin: 20,
    flex: 1,
    overflow: "hidden",
    alignContent:'center',
    justifyContent:'center',
  },
  image: {
    width: 150,
    height: '100%',
    overflow: 'visible',
    margin: 10,
    backgroundColor: '000',
    position: 'relative',
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
