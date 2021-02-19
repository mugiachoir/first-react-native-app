import React, { useState } from "react";
import { View, TextInput, Button, Modal } from "react-native";
import InputStyles from "./input-goal.style";

const InputGoal = ({ handleAdd, isAddMode, setIsAddMode }) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const handleAddGoal = () => {
    handleAdd(enteredGoal);
    setEnteredGoal("");
  };

  return (
    <Modal visible={isAddMode} animationType="slide">
      <View style={InputStyles.inputContainer}>
        <TextInput
          placeholder="Input your goal"
          style={InputStyles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={InputStyles.buttonContainer}>
          <View style={InputStyles.button}>
            <Button title="ADD" onPress={handleAddGoal} />
          </View>
          <View style={InputStyles.button}>
            <Button
              title="CANCEL"
              color="red"
              onPress={() => setIsAddMode(false)}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default InputGoal;
