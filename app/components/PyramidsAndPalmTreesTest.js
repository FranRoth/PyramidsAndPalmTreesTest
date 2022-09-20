import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

import Text from "./Text";
import colors from "../config/colors";
import CardSetTest from "./CardsSetTest";
import { TouchableOpacity } from "react-native-web";
import tests from "./tests/Tests";

function PyramidAndPalmTreesTest(props) {
  const [testNumber, setTestNumber] = useState(0)

  const showTest = ()=> {
    const currentTest = tests[testNumber]
    return(
      <CardSetTest
        cards={currentTest.cards}
        numberOfColumns={2}
        // hanldeSelect={hanldeSelect}
      />
    )
  }

  return (
    <View style={styles.detailsContainer}>
      {showTest()}
      <View style={styles.navigation}>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button} Text={"BACK"} disable={true}>
            <Text style={styles.buttonText}>BACK</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} Text={"NEXT"}>
            <Text style={styles.buttonText}>NEXT</Text>
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
    justifyContent:"space-between",
    alignItems:"flex-end",
  },
  button: {
    backgroundColor: colors.primary,
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