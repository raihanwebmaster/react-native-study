import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

export default function AddTodo({ submitHandler }) {
  const [text, setText] = useState("");
  const changeHandler = (val) => {
    setText(val);
  };
  const addTodos = () => {
    submitHandler(text);
    setText("");
  };
  return (
    <View>
      <TextInput
        value={text}
        style={styles.input}
        placeholder="new todo..."
        onChangeText={changeHandler}
      />
      <Button onPress={addTodos} title="Add Todo" color="coral" />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});
