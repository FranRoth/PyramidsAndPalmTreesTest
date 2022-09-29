import React, { useEffect, useState } from "react";
import { View, StyleSheet, TouchableHighlight } from "react-native";
import { FlatList } from "react-native-web";

import Card from "./Card";
import colors from "../config/colors";
import { shuffle } from "./../Helper";

export default function CardsSetTest ({cards, numberOfColumns, handleOnSelect}) {
  const [shuffleCards, setShuffleCards] = useState(true);
  const [options, setOptions] = useState(cards.filter((card)=> !card.isMain));

  useEffect( ()=>{
    setShuffleCards(true)
    setOptions(cards.filter((card)=> !card.isMain))
  },[cards])

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

  const showMainCard = () => {
    const [mainCard] = cards.filter( (card)=> card.isMain)
    return <Card image={mainCard.image} isMain={mainCard.isMain}/>
  }

  const onSelect = (selectedCard) =>{
    if(selectedCard.selected){
      return //if the card is already selected do nothing.
    }

    const cardsOptionsWithSelectedCard = options.map( (card)=> {
      card.id === selectedCard.id
        ? card.selected = true
        : card.selected = false
      return card;
    })
  
    handleOnSelect(selectedCard);
    setOptions(cardsOptionsWithSelectedCard);
  }

  return (
    <View style={styles.cardSetContainer}>
      <View style={styles.mainCardContainer}>
        {showMainCard()}
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