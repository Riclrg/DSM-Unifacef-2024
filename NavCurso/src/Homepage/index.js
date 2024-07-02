//Importações utilizadas
import React from "react";
import { View, Text, Pressable } from "react-native";
import { styles } from "./style";

//Homepage com botões para About me, Course e Institution
export default function Homepage({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My App</Text>
      <Pressable
        title="About me"
        onPress={() => navigation.navigate("About")}
        style={styles.button}
      >
        <Text style={styles.text}>About me</Text>
      </Pressable>
      <Pressable
        title="Course"
        onPress={() => navigation.navigate("Course")}
        style={styles.button}
      >
        <Text style={styles.text}>Course</Text>
      </Pressable>
      <Pressable
        title="Institution"
        onPress={() => navigation.navigate("Institution")}
        style={styles.button}
      >
        <Text style={styles.text}>Institution</Text>
      </Pressable>
    </View>
  );
}
