import React from "react";
import { View, StyleSheet } from "react-native";

import Card from "./Card";
import colors from "../config/colors";
import { shuffle } from "./../Helper";

export default function CardsSetTest ({mainCard, correctCard, wrongCards, isAnimated}) {
  let cardSet = [correctCard, ...wrongCards]
  // const [cards, setCards] = useState({cardSet: cardSet});

    return (
            <Card image={mainCard} isMain={true}/>
        // <View style={styles.detailsContainer}>
        //   <p>HOLIS</p>
        //     <View>
        //       {cardSet.forEach(card => (<Card style={styles.card} source={card}/>))}
        //     </View>
        // </View>
    )
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