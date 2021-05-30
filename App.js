import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [people, setPeople] = useState([
    { name: "Mun", key: "1" },
    { name: "Muntaha", key: "2" },
    { name: "Muntaha Naz", key: "3" },
    { name: "Muntaha Naz Monsur", key: "4" },
    { name: "Muntaha Naz Monsur Omi", key: "5" },
    { name: "Raihan", key: "6" },
    { name: "Raihan Uddin", key: "7" },
  ]);

  return (
    <View style={styles.container}>
      <ScrollView>
        {people.map(item =>  (
            <View key={item.key}>
              <Text style={styles.item}>{item.name}</Text>
            </View>
          )
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: "pink",
    fontSize: 24,
  },
});
