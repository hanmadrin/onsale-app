// import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../../app/auth/login/Login';
import Welcome from '../../app/welcome';


const Stack = createNativeStackNavigator();

function AuthNavigateStack() {
    return (

        <Stack.Navigator initialRouteName="Welcome">
            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="LoginStack"
                component={Login}
                options={{ headerShown: false }}
            />


        </Stack.Navigator>
    );
}

export default AuthNavigateStack;