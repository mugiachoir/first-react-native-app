import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import GoalStyles from "./goal-item.style";

const GoalItem = ({ props, handleDelete }) => {
  return (
    <TouchableOpacity onPress={() => handleDelete(props.id)}>
      <View style={GoalStyles.goalContainer}>
        <Text>{props.value}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default GoalItem;
