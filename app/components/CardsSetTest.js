import React from "react";
import { View, StyleSheet, TouchableHighlight } from "react-native";
import { FlatList } from "react-native-web";

import Card from "./Card";
import colors from "../config/colors";
import { shuffle } from "./../Helper";

export default function CardsSetTest ({mainCard, correctCard, wrongCards, cardsOptions, numberOfColumns, isAnimated}) {
  let cardSet = [correctCard, ...wrongCards]
  // const [cards, setCards] = useState({cardSet: cardSet});

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
      // justifyContent:'center',
      alignItems:'center',
      backgroundColor:"lightgreen",
      position:'relative',
    },
    optionCards: {
      flexDirection:'row',
      // justifyContent:'center',
      backgroundColor:"lightgreen",
      height:200, //TODO: Set to a responsive card height resoluction.
    },
    subTitle: {
      color: colors.secondary,
      fontWeight: "bold",
    },
    title: {
      marginBottom: 7,
    },
  });