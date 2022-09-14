import React from "react";
import { View, StyleSheet, TouchableHighlight } from "react-native";
import { FlatList } from "react-native-web";

import Card from "./Card";
import colors from "../config/colors";
import { shuffle } from "./../Helper";

export default function CardsSetTest ({mainCard, cardsOptions, numberOfColumns, isAnimated}) {

  const showOptionCards = () => {

    return (
      <FlatList style={styles.optionCards}
        data={cardsOptions}
        keyExtractor={(item) => item.key}
        numColumns={numberOfColumns}
        renderItem={({ item }) => {
          console.log(item)
          return <Card
            image={item.image}
            isMain={item.isMain}
            onPress={() => {
              console.log("**do the magic**");
            }}
          />
        }
        }
      />
    );
  }

  return (
    <View style={styles.cardSetContainer}>
      <View style={styles.mainCardContainer}>
        <Card image={mainCard.image} isMain={mainCard.isMain}/>
      </View>
      <View style={styles.optionCardsContainer}>
        {showOptionCards()}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    cardSetContainer: {
      flex: 1,
    },
    mainCardContainer: {
      flex: 1,
      backgroundColor:"lightblue",
      alignItems:'center',
    },
    optionCardsContainer: {
      flex: 2,
      alignItems:'center',
      backgroundColor:"lightgreen",
    },
    optionCards: {
      backgroundColor:"lightgreen",
    },
    subTitle: {
      color: colors.secondary,
      fontWeight: "bold",
    },
    title: {
      marginBottom: 7,
    },
  });