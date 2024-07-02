import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Homepage from "./src/Homepage";
import About from "./src/AboutPage";
import Course from "./src/CoursePage";
import Institution from "./src/InstitutionPage";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Homepage" component={Homepage} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Course" component={Course} />
        <Stack.Screen name="Institution" component={Institution} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
