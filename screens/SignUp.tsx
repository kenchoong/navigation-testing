import React from "react";
import { View, Text, Button } from "react-native";
import { useRouting } from "expo-next-react-navigation";

//import { useNavigation } from '@react-navigation/native';

interface SignUpProps {}

export const SignUp: React.FC<SignUpProps> = () => {
  const { navigate } = useRouting();

  const onPress = () =>
    navigate({
      routeName: "Login",
    });

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Sign up Screen</Text>

      <Button title="Press Me" onPress={() => onPress()}>
        go to login
      </Button>
    </View>
  );
};
