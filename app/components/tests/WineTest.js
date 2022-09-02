
import React from "react";

import CardSetTest from "../CardsSetTest";
import wineImage from "../../assets/set1_wine/test_1_main.PNG"
import option1 from "../../assets/set1_wine/test_1_option_1.PNG"
import option2 from "../../assets/set1_wine/test_1_option_2.PNG"
import option3 from "../../assets/set1_wine/test_1_option_3.PNG"
import option4 from "../../assets/set1_wine/test_1_option_4.PNG"


export default function WineTest(){
    const mainCard = wineImage
    const correctCard = option1
    const wrongCard1 = option2
    const wrongCard2 = option3
    const wrongCard3 = option4

    return (
        <CardSetTest
            mainCard={mainCard}
            correctCard
            wrongCards={[wrongCard1, wrongCard2, wrongCard3]}
            isAnimated={false}
        />
    )
}