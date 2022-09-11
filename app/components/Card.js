import React, { useState } from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";

import colors from "../config/colors";

function Card({ image, isMain, onPress }) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={isMain? styles.mainCard : styles.card}>
      {isMain
      ? <Image style={styles.image} source={image} />
      : <TouchableOpacity onPress={onPress}>
          <Image style={styles.image} source={image} />
        </TouchableOpacity>
    }
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 150,
    width: "200",
    borderRadius: 15,
    marginBottom: 20,
    overflow: "hidden",
    backgroundColor: colors.white,
    margin: 20,
    flex: 1,
    flexDirection: "row",
    overflow: "hidden",
    alignContent:'center',
    justifyContent:'center',
    position:'relative',
  },
  mainCard: {
    borderRadius: 15,
    backgroundColor: colors.white,
    margin: 20,
    flex: 1,
    flexDirection: "row", 
    overflow: "hidden",
    // alignContent:'center',
    // justifyContent:'center',
  },
  image: {
    width: 150,
    height: '100%',
    overflow: 'visible',
    margin: 10,
    backgroundColor: '000',
    position: 'relative',
  },
});

export default Card;
