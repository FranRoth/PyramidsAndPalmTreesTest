
import React from "react";
import { StyleSheet } from "react-native";

import CardSetTest from "../CardsSetTest";
import wineImage from "../../assets/set1_wine/test_1_main.PNG"
import option1 from "../../assets/set1_wine/test_1_option_1.PNG"
import option2 from "../../assets/set1_wine/test_1_option_2.PNG"
import option3 from "../../assets/set1_wine/test_1_option_3.PNG"
import option4 from "../../assets/set1_wine/test_1_option_4.PNG"
import Screen from "../../components/Screen";


export default function WineTest(){
    const correctCard = option1
    const wrongCard1 = option2
    const wrongCard2 = option3
    const wrongCard3 = option4
    
    const mainCard = {
        image: wineImage,
        isMain: true,
        key: 0
    }
    const cardsOptions = [
        {
            image: option1,
            isCorrect: true,
            isMain: false,
            key: 1,
        },
        {
            image: option2,
            isCorrect: false,
            isMain: false,
            key: 2,
        },
        {
            image: option3,
            isCorrect: false,
            isMain: false,
            key: 3,
        },
        {
            image: option4,
            isCorrect: false,
            isMain: false,
            key: 4,
        },
    ]

    return (
        <Screen style={styles.container}>
            <CardSetTest
                mainCard={mainCard}
                cardsOptions={cardsOptions}
                correctCard={correctCard}
                wrongCards={[wrongCard1, wrongCard2, wrongCard3]}
                isAnimated={false}
                numberOfColumns={2}
            />
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
      padding: 10,
    },
});