import { View, Text, StyleSheet } from "react-native";

import Colors from "../../util/Colors";

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    borderRadius: 8,
    padding: 24,
    margin: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  numberText: {
    fontFamily: "open-sans-bold",
    // fontWeight: "bold",
    fontSize: 32,
    color: Colors.accent500,
  },
});
