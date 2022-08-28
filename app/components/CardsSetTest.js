import { View, StyleSheet } from "react-native";

import Card from "./Card"

function CardsSetTest ({mainCard, correctCard, wrongCards, isAnimated}) {
    
    return (
        <View style={styles.detailsContainer}>
            <Card style={styles.mainCard} soure={mainCard} isMain={true}/>

        </View>
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