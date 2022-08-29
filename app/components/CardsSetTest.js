import { View, StyleSheet } from "react-native";

import Card from "./Card";
import { shuffle } from "./../Helper";

function CardsSetTest ({mainCard, correctCard, wrongCards, isAnimated}) {

  const [modalVisible, setModalVisible] = useState({});

    return (
        <View style={styles.detailsContainer}>
            <Card style={styles.mainCard} soure={mainCard} isMain={true}/>
            <View>
              {}
            </View>
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