import { View, Image, StyleSheet, Text, Dimensions } from "react-native";

import Colors from "../util/Colors";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{" "}
        rounds to guess the Number{" "}
        <Text style={styles.highlight}>{userNumber}</Text>
      </Text>
      <PrimaryButton onPressCustom={onStartNewGame}>
        Start New Game
      </PrimaryButton>
    </View>
  );
}

export default GameOverScreen;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    height: deviceWidth < 350 ? 200 : 300,
    width: deviceWidth < 350 ? 200 : 300,
    borderRadius: deviceWidth < 350 ? 100 : 150,
    borderWidth: 2,
    borderColor: Colors.primary500,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    height: "100%",
    width: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});
