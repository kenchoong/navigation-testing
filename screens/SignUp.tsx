import React from 'react'
import { View, Text } from 'react-native'
import { useRouting } from 'expo-next-react-navigation'

//import { useNavigation } from '@react-navigation/native';


interface SignUpProps {

}

export const SignUp: React.FC<SignUpProps> = () => {
    return (
        <View>
            <Text>Sign up Screen</Text>
        </View>
    );
}