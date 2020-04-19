import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconProfile from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native';
import Dashboard from './pages/Dashboard';
import SignIn from './pages/SignIn';
import Profile from './pages/Profile';
import Detail from './pages/Detail';
import Foto from './pages/Foto';

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

function NewStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        // headerTransparent: true,
        headerTintColor: '#FFF',
        headerLeftContainerStyle: {
          marginLeft: 20,
        },
      }}
    >
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={({ navigation }) => ({
          title: '',
          headerTransparent: true,
          cardStyle: { backgroundColor: '#FFFFFF' },
        })}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={({ navigation }) => ({
          title: 'Detalhes da encomenda',
          headerLeftContainerStyle: {
            margin: 'auto',
            paddingLeft: 30,
          },
          headerStyle: {
            backgroundColor: '#7D40E7',
            borderBottomColor: 'white',
            elevation: 0,
            shadowOpacity: 0,
          },
          cardStyle: { backgroundColor: '#FFFFFF' },
          headerTitleAlign: 'center',

          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Dashboard');
              }}
            >
              <Icon name="chevron-left" size={30} color="#FFF" />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="Detail"
        component={Foto}
        options={({ navigation }) => ({
          title: 'Confirmar entrega',
          headerLeftContainerStyle: {
            margin: 'auto',
            paddingLeft: 30,
          },
          headerStyle: {
            backgroundColor: '#7D40E7',
            borderBottomColor: 'white',
            elevation: 0,
            shadowOpacity: 0,
          },
          cardStyle: { backgroundColor: '#FFFFFF' },
          headerTitleAlign: 'center',

          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Detalhes da encomenda');
              }}
            >
              <Icon name="chevron-left" size={30} color="#FFF" />
            </TouchableOpacity>
          ),
        })}
      />
    </Stack.Navigator>
  );
}

export default function createRouter(isSigned = false) {
  return !isSigned ? (
    <Stack.Navigator
      headerBackTitleVisible={false}
      headerLayoutPreset="center"
      headerMode="none"
    >
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  ) : (
    <Tabs.Navigator
      tabBarOptions={{
        activeTintColor: '#7D40E7',
        inactiveTintColor: '#999999',
        style: {
          backgroundColor: '#FFFFFF',
          height: 70,
          paddingBottom: 5,
          paddingTop: 8,
          justifyContent: 'space-between',
          shadowColor: '#000000',
        },
        labelStyle: {
          marginTop: 0,
          marginBottom: 5,
        },
        keyboardHidesTabBar: true,
      }}
    >
      <Tabs.Screen
        name="Dashboard"
        component={NewStack}
        options={{
          tabBarLabel: 'Entregas',

          tabBarIcon: ({ color }) => (
            <Icon name="reorder" size={30} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Meu Perfil"
        component={gestureHandlerRootHOC(Profile)}
        options={{
          tabBarLabel: 'Meu Perfil',
          tabBarIcon: ({ color }) => (
            <IconProfile name="account-circle" size={30} color={color} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}
