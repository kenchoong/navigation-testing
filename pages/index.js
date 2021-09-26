// @generated: @expo/next-adapter@3.0.6
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { useRouting } from "expo-next-react-navigation";

export default function App() {
  const { navigate } = useRouting();

  const onPress = () =>
    navigate({
      routeName: "SignUp",
    });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Expo + Next.js 👋</Text>

      <Button title="Press Me" onPress={() => onPress()}>
        Press Me
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
  },
});
