import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View, Button } from "react-native";

import GoalList from "./components/goal-list/goal-list.component";
import InputGoal from "./components/input-goal/input-goal.component";

const App = () => {
  const [goals, setGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const handleAdd = (goalValue) => {
    setGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalValue },
    ]);
    setIsAddMode(false);
  };

  const handleDelete = (goalId) => {
    setGoals((currentGoals) =>
      currentGoals.filter((goal) => goal.id !== goalId)
    );
  };

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <InputGoal
        handleAdd={handleAdd}
        isAddMode={isAddMode}
        setIsAddMode={setIsAddMode}
      />
      <GoalList goals={goals} handleDelete={handleDelete} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 56,
    fontSize: 16,
    backgroundColor: "white",
  },
});

export default App;
