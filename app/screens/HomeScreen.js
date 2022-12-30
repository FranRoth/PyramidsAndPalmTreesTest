import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image
} from 'react-native';

export default class HomeScreen extends React.Component {
  
    render(){
    return (
        <SafeAreaView style={styles.main}>
            <View style={styles.main}>
            <Image style={styles.logo} source={require('../assets/ucaLogo.png')}/>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('HanoiTest')} delayPressIn={0}>
                <View style={styles.button}>
                <Text>Start Test</Text>
                </View>
            </TouchableOpacity>
            </View>
        </SafeAreaView>
      );
  }
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    width: 300,
    marginTop: 25,
    borderRadius: 5
  },
  logo: {
    width: 390,
    height: 120
  },
  main:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 100
  }
});

