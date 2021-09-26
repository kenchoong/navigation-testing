import React from "react";
import { View, Text, Button } from "react-native";
import { useRouting } from "expo-next-react-navigation";

//import { useNavigation } from '@react-navigation/native';

interface LoginProps {}

export const Login: React.FC<LoginProps> = ({}) => {
  const { navigate } = useRouting();

  const onPress = () =>
    navigate({
      routeName: "SignUp",
    });

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Login Screen</Text>

      <Button title="Press Me" onPress={() => onPress()}>
        Press Me
      </Button>
    </View>
  );
};
