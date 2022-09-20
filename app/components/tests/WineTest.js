
import React, { useState } from "react";
import { StyleSheet } from "react-native";

import CardSetTest from "../CardsSetTest";
import wineImage from "../../assets/set1_wine/test_1_main.PNG"
import option1 from "../../assets/set1_wine/test_1_option_1.PNG"
import option2 from "../../assets/set1_wine/test_1_option_2.PNG"
import option3 from "../../assets/set1_wine/test_1_option_3.PNG"
import option4 from "../../assets/set1_wine/test_1_option_4.PNG"

export default function WineTest(){
    const correctCard = option1
    
    const mainCard = {
        image: wineImage,
        isMain: true,
        key: 0
    }
    const testOptions = [
        {
            image: wineImage,
            isMain: true,
            id: 0
        },
        {
            image: option1,
            isCorrect: true,
            isMain: false,
            selected: false,
            id: 1,
        },
        {
            image: option2,
            isCorrect: false,
            isMain: false,
            selected: false,
            id: 2,
        },
        {
            image: option3,
            isCorrect: false,
            isMain: false,
            selected: false,
            id: 3,
        },
        {
            image: option4,
            isCorrect: false,
            isMain: false,
            selected: false,
            id: 4,
        },
    ]

    const [cardsOptions, setCardsOptions] = useState(testOptions)

    return (
        <CardSetTest
            mainCard={mainCard}
            cards={cardsOptions}
            correctCard={correctCard}
            isAnimated={false}
            numberOfColumns={2}
        />
    )
}