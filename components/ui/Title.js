import { Text, StyleSheet } from "react-native";

import Colors from "../../util/Colors";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    borderWidth: 2,
    borderRadius: 8,
    borderColor: "white",
    padding: 16,
    marginTop: 30,
  },
});
