import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";

import Text from "../components/Text";
import colors from "../config/colors";
import CardSetTest from "../components/CardsSetTest";
import { TouchableOpacity } from "react-native-web";
import tests from "../components/evaluation_tests/Tests";

function PyramidAndPalmTreesTest(props) {
  const [testId, setTestId] = useState(0);
  const [backButtonDisable, setbackButtonDisable] = useState(false);
  const [nextButtonDisable, setnextButtonDisable] = useState(false);
  const [start, setStart] = useState(Date.now());
  //TODO: enable and disable back and next buttons

  const showTest = ()=> {
    return(
      <CardSetTest
        cards={tests[testId].cards}
        numberOfColumns={tests[testId].columns}
        handleOnSelect={handleOnSelect}
      />
    )
  }

  const hadleNextButton = () =>{
    if( tests.length === (testId + 1) ){ //check if you are in the last test
      //TODO: END TEST.
    } else {
      setTestId(testId+1)
      setStart(Date.now())
    }
  }

  const hadleBackButton = () =>{
    if( testId > 0){
      setTestId(testId-1)
    } else {
      //TODO: disable back button
    }
  }

  const handleOnSelect = (card) =>{
    const now = Date.now()
    const timeSpend = tests[testId]?.results?.timeSpend
    const totalTimeSpend = (now - start) + (timeSpend? timeSpend : 0)

    tests[testId].results = {timeSpend: totalTimeSpend, isCorrect: card.isCorrect, isAnimated: tests[testId].isAnimated}
    console.log("TEST NUM "+ testId + ": ", tests[testId].results)
  }

  const isTheLastTest = ()=> (tests.length === testId + 1)
  
  return (
    <View style={styles.detailsContainer}>
      {showTest()}
      <View style={styles.navigation}>
        <View style={styles.buttonsContainer}>
          {(testId > 0) && <TouchableOpacity style={styles.button} Text={"BACK"} onPress={hadleBackButton} disabled={backButtonDisable}>
                <Text style={styles.buttonText}>BACK</Text>
              </TouchableOpacity>
          }
          <TouchableOpacity style={styles.button} Text={"NEXT"} onPress={hadleNextButton} disabled={nextButtonDisable}>
            <Text style={styles.buttonText}>{isTheLastTest()? 'FINISH':'NEXT'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    flex: 1,
    margin: 10
  },
  navigation: {
    position:"absolute",
    bottom:0,
    height:50,
    width:"100%"
  },
  buttonsContainer:{
    flex: 1,
    flexDirection: 'row',
    justifyContent:"space-evenly",
    alignItems:"flex-end",
  },
  button: {
    backgroundColor: colors.button,
    height: 50,
    width: 200,
    borderRadius: 15,
  },
  buttonText: {
    flex: 1,
    textAlign: "center",
    margin:15,
    fontWeight:"bold",
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
  title: {
    marginBottom: 7,
  },
});

export default PyramidAndPalmTreesTest;