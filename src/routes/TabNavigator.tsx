import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import PokemonList from '@Containers/Pokemon/List';
import PokemonDetails from '@Containers/Pokemon/Details';
import PokemonTypes from '@Containers/Pokemon/Types';
import {Home, Bug, Settings} from 'lucide-react-native';

const Tab = createBottomTabNavigator();

const ROUTES = [
  {
    name: 'List',
    component: PokemonList,
  },
  {
    name: 'Details',
    component: PokemonDetails,
  },
  {
    name: 'Types',
    component: PokemonTypes,
  },
];

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: true,
        tabBarIcon: ({focused, color, size}) => {
          let iconName = <Home color="black" size={24} />;

          if (route.name === ROUTES[0].name)
            iconName = focused ? (
              <Home color="blue" size={24} />
            ) : (
              <Home color="black" size={24} />
            );
          else if (route.name === ROUTES[1].name)
            iconName = focused ? (
              <Bug color="blue" size={24} />
            ) : (
              <Bug color="black" size={24} />
            );
          else if (route.name === ROUTES[2].name)
            iconName = focused ? (
              <Settings color="blue" size={24} />
            ) : (
              <Settings color="black" size={24} />
            );

          return iconName;
        },
        tabBarActiveTintColor: '#e91e63',
        tabBarInactiveTintColor: 'gray',
      })}>
      {ROUTES.map(({name, component}) => (
        <Tab.Screen key={name} name={name} component={component} />
      ))}
    </Tab.Navigator>
  );
};
