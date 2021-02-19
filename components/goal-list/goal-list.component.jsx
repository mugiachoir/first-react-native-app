import React from "react";
import { Text, View, FlatList } from "react-native";

import GoalItem from "../goal-item/goal-item.component";

const GoalList = ({ goals, handleDelete }) => (
  <FlatList
    keyExtractor={(item, index) => item.id}
    data={goals}
    renderItem={(goal) => (
      <GoalItem props={goal.item} handleDelete={handleDelete} />
    )}
  />
);

export default GoalList;
