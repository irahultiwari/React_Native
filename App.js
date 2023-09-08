import React from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const App = () => {
  const btnaction =()=>{
    console.warn('btn pressd ')
  }
  return (
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{
        headerStyle:{
          backgroundColor:'skyblue'
          
        },
        headerTintColor:'black',
        headerTitleStyle:{
          fontSize:30
        }
      }}
      
      >
        <Stack.Screen name="Login" component={Login}
        options={{
          headerTitle:()=><Button onPress={btnaction} title='left' />,
          headerRight:()=><Header />,

          title:'user login',
          headerStyle:{
            backgroundColor:'skyblue',

          },
          headerTintColor:'white',
          headerTitleStyle:{
            fontSize:30
          }
        }}
        
        />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Header=()=>{
  return(
    <TextInput placeholder='SEARCH'></TextInput>
  )
}

const Home = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 30}}>Home screen</Text>
    </View>
  );
};

const Login = (props) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 30}}>Login screen</Text>
      <Button
        title="go to home page"
        onPress={() => props.navigation.navigate('Home')}></Button>
    </View>
  );
};

export default App;
