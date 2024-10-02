import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons'; 

import Home from './pages/Home';
import Voting from './pages/Voting';
import Location from './pages/Location';
import Config from './pages/Config';
import ButtonNew from './components/ButtonNew';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            backgroundColor: 'black',
            borderTopColor: 'transparent',
          },
          headerStyle: {
            backgroundColor: '#171717',
            shadowColor: 'transparent', 
            elevation: 0,             
            borderBottomWidth: 0,      
            height: 100,               
          },
          headerTintColor: '#fff',     
          headerTitleStyle: {
            fontWeight: 'bold',         
            fontSize: 18,                
          },
          headerRight: () => (           
            <Feather 
              name="bell" 
              size={24} 
              color="white" 
              style={{ marginRight: 15 }} 
              onPress={() => alert('Configurações')} 
            />
          ),
        }}
      >
        <Tab.Screen 
          name="Inicio" 
          component={Home}  
          options={{
            tabBarIcon: ({ size, color }) => (
              <Feather name="home" size={size} color={color} />
            ),
            headerTitle: "Página Inicial", 
          }}
        />
        
        <Tab.Screen 
          name="Localização" 
          component={Location} 
          options={{
            tabBarIcon: ({ size, color }) => (
              <Feather name="map-pin" size={size} color={color} />
            ),
            headerTitle: "Localização", 
          }}
        />
        
        <Tab.Screen 
          name="Novo" 
          component={ButtonNew}
          options={{
            tabBarIcon: ({ focused, size, color }) => (
              <ButtonNew size={size} color={color} focused={focused} />
            ),
            tabBarLabel: () => null,
            headerTitle: "Novo", 
          }} 
        />
        
        <Tab.Screen 
          name="Votação" 
          component={Voting} 
          options={{
            tabBarIcon: ({ size, color }) => (
              <Feather name="list" size={size} color={color} />
            ),
            headerTitle: "Votação", 
          }}
        />
        
        <Tab.Screen 
          name="Configurações" 
          component={Config} 
          options={{
            tabBarIcon: ({ size, color }) => (
              <Feather name="settings" size={size} color={color} />
            ),
            headerTitle: "Configurações", 
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  Text: {
    fontSize: 20,
  },
});
