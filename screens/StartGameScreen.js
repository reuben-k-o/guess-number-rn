import { useState } from "react";
import { TextInput, View, StyleSheet, Alert, Text } from "react-native";

import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../util/Colors";
import Title from "../components/ui/Title";

function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  function numberInputHandler(enteredText) {
    // console.log(enteredText);
    setEnteredNumber(enteredText);
  }

  function resetInputHandler() {
    setEnteredNumber("");
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      //show alert ...
      Alert.alert("Invalid Number", "Number has to be between 1 and 99", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }
    // console.log("Valid number!");
    onPickNumber(chosenNumber);
  }
  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <View style={styles.inputContainer}>
        <Text style={styles.instructionText}>Enter a Number</Text>
        <TextInput
          style={styles.textInput}
          maxLength={2}
          keyboardType="number-pad"
          value={enteredNumber}
          onChangeText={numberInputHandler}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPressCustom={resetInputHandler}>
              Reset
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPressCustom={confirmInputHandler}>
              Confirm
            </PrimaryButton>
          </View>
        </View>
      </View>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
  inputContainer: {
    marginTop: 40,
    padding: 16,
    marginHorizontal: 25,
    borderRadius: 10,
    backgroundColor: Colors.primary500,
    elevation: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  instructionText: {
    fontSize: 24,
    color: Colors.accent500,
  },
  textInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    marginVertical: 8,
    color: Colors.accent500,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
