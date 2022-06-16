import { View, Text, StyleSheet } from "react-native";
import Colors from "../../util/Colors";

function GuessLogItem({ roundNumber, guess }) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}>Opponent's Guess : {guess}</Text>
    </View>
  );
}

export default GuessLogItem;

const styles = StyleSheet.create({
  listItem: {
    borderColor: Colors.primary500,
    borderRadius: 40,
    backgroundColor: Colors.accent500,
    marginVertical: 8,
    padding: 12,
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    elevation: 4,
    width: "100%",
  },
  itemText: {
    fontFamily: "open-sans",
  },
});
