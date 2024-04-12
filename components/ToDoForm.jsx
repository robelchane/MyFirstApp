"use client";

import { useState, useEffect } from "react";
import tasksData from "./data/tasks.json";
import { 
  TextInput, 
  StyleSheet, 
  Button, 
  View,
  Text } from "react-native";

function ToDoForm({ addTask }) {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(tasksData.tasks);
  }, []);

  const handleAddTask = () => {
    const randomIndex = Math.floor(Math.random() * tasks.length);
    const randomTask = tasks[randomIndex];
    addTask(randomTask);
    setInput(randomTask);
  };

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        onChangeText={setInput}
        value={input}
      />
      <Button title="Generate Random Task" onPress={handleAddTask} />
    </View>

  );

}

const styles = StyleSheet.create({

  form: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
});

export default ToDoForm;
