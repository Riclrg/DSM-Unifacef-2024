import React from "react";
import { View, Text, Pressable, Image } from "react-native";
import { styles } from "./style";

export default function Course({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Course</Text>
      <Image
        source={require("../../assets/foto-Ilustrativa.jpeg")}
        style={styles.image}
      />
      <Text style={styles.text}>Software Engineering</Text>
      <Text style={styles.text}>Scheduled to end: December/2025</Text>
      <Pressable onPress={() => navigation.goBack()} style={styles.button}>
        <Text style={styles.buttonText}>Back</Text>
      </Pressable>
    </View>
  );
}
