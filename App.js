import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [people, setPeople] = useState([
    { name: "Mun", id: "1" },
    { name: "Muntaha", id: "2" },
    { name: "Muntaha Naz", id: "3" },
    { name: "Muntaha Naz Monsur", id: "4" },
    { name: "Muntaha Naz Monsur Omi", id: "5" },
    { name: "Raihan", id: "6" },
    { name: "Raihan Uddin", id: "7" },
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        // numColumns={2}
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
      />

      {/* <ScrollView>
        {people.map(item =>  (
            <View key={item.key}>
              <Text style={styles.item}>{item.name}</Text>
            </View>
          )
        )}
      </ScrollView> */}
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
    marginHorizontal: 10,
    marginTop: 24,
  },
});
