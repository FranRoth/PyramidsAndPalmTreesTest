import React, { useEffect, useState } from "react";
import { View, StyleSheet, TouchableHighlight } from "react-native";
import { FlatList } from "react-native-web";

import Card from "./Card";
import colors from "../config/colors";
import { shuffle } from "./../Helper";

export default function CardsSetTest ({mainCard, cardsOptions, numberOfColumns, isAnimated}) {
  const [shuffleCards, setShuffleCards] = useState(true);
  const [options, setOptions] = useState(cardsOptions);

  // useEffect( ()=> {
  //   if(shuffleCards){
  //     setShuffleCards(false)
  //     setOptions(shuffle(options))
  //   }
  // }, [])

  const getCardsOptions = ()=>{
    if(shuffleCards){
      setShuffleCards(false)
      setOptions(shuffle(options))
    }
    return options
  }

  const showOptionCards = () => {
    return (
      <FlatList style={styles.optionCards}
        data={getCardsOptions()}
        keyExtractor={(item) => item.id}
        numColumns={numberOfColumns}
        renderItem={({ item }) => {
          return <Card
            image={item.image}
            isMain={item.isMain}
            selected={item.selected}
            onPress={()=> onSelect(item)}
          />
        }
        }
      />
    );
  }

  const onSelect = (selectedCard) =>{
    const cardsOptionsWithSelectedCard = cardsOptions.map( (card)=> {
      card.id === selectedCard.id
        ? card.selected = true
        : card.selected = false
      return card;
    })
    setOptions(cardsOptionsWithSelectedCard);
    
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