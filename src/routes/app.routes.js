import Icon from '@expo/vector-icons/MaterialIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import Animes from '../pages/Animes';
import Detail from '../pages/Detail';
import Mangas from '../pages/Mangas';

const AppStack = createStackNavigator();
const AppTab = createBottomTabNavigator();

function TabScreen() {
  const Theme = useTheme();
  return (
    <AppTab.Navigator tabBarOptions={{
      tabStyle: { backgroundColor: Theme.colors.background },
      style: { borderTopColor: Theme.colors.card },
      activeTintColor: Theme.colors.primary,
      inactiveTintColor: Theme.colors.secondaryText
    }}>
      <AppTab.Screen name="Animes" component={Animes}
        options={{
          tabBarIcon: ({focused, color}) => (
            <Icon
              name="movie"
              focused={focused}
              color={color}
              size={24}
              style={{ marginBottom: -3 }}
            />
          )
        }}
      />
      <AppTab.Screen name="Mangás" component={Mangas}
        options={{
          tabBarIcon: ({focused, color}) => (
            <Icon
              name="book"
              focused={focused}
              color={color}
              size={24}
              style={{ marginBottom: -3 }}
            />
          )
        }}
      />
    </AppTab.Navigator>
  );
}

export default function AppRoutes() {
  return (
    <AppStack.Navigator screenOptions={{ headerShown: false }}>
      <AppStack.Screen name="Tabs" component={TabScreen} />
      <AppStack.Screen name="Detail" component={Detail} />
    </AppStack.Navigator>
  );
}