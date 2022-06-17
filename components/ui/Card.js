import { StyleSheet, View, Dimensions } from "react-native";
import Colors from "../../util/Colors";

function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

export default Card;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  card: {
    marginTop: deviceWidth < 370 ? 20 : 40,
    padding: 16,
    marginHorizontal: 25,
    borderRadius: 10,
    backgroundColor: Colors.primary500,
    elevation: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});
