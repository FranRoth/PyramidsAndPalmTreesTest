import React from "react";
import { View, StyleSheet, TouchableHighlight } from "react-native";

import Card from "./Card";
import colors from "../config/colors";
import { shuffle } from "./../Helper";

export default function CardsSetTest ({mainCard, correctCard, wrongCards, isAnimated}) {
  let cardSet = [correctCard, ...wrongCards]
  // const [cards, setCards] = useState({cardSet: cardSet});

  const showOptionCards = () => {
    let optionCards = []
    
    cardSet.forEach(card => (
      optionCards.push(
        <Card image={card} isMain={true}/>
      )
    ))

    return (
      <View>
        <View style={styles.optionCards}>
          {optionCards[0]}
          {optionCards[1]}
        </View>
        <View style={styles.optionCards}>
          {optionCards[2]}
          {optionCards[3]}
        </View>
      </View>
    );
  }

  return (
    <View style={styles.cardSetContainer}>
      <View style={styles.mainCardContainer}>
        <Card image={mainCard} isMain={false}/>
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
      padding: 20,
    },
    mainCardContainer: {
      flex: 1,
      backgroundColor:"lightblue",
      alignContent:'center',
      alignItems:'center',
    },
    optionCardsContainer: {
      flex: 2,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:"lightgreen",
      position:'relative',
    },
    optionCards: {
      // flex: 1,
      flexDirection:'row',
      justifyContent:'center',
      backgroundColor:"lightgreen",
      // position:'relative',
      height:200,
    },
    subTitle: {
      color: colors.secondary,
      fontWeight: "bold",
    },
    title: {
      marginBottom: 7,
    },
  });