//Importações utilizadas
import React from "react";
import { View, Text, Pressable, Image } from "react-native";
import { styles } from "./style";

//Aboutpage com botão de voltar para a tela inicial
export default function Course({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Me</Text>
      <Image
        source={require("../../assets/foto-Ricardo.jpg")}
        style={styles.image}
      />
      <Text style={styles.text}>Ricardo de Lima Rosa Gomes</Text>
      <Text style={styles.text}>(16) 9 9159-2225</Text>
      <Text style={styles.text}>ricardolimarg44@gmail.com</Text>
      <Pressable onPress={() => navigation.goBack()} style={styles.button}>
        <Text style={styles.buttonText}>Back</Text>
      </Pressable>
    </View>
  );
}
