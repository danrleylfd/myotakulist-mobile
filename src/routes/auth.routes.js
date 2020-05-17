import Icon from '@expo/vector-icons/MaterialIcons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from '@react-navigation/native';
import React from 'react';

import Dev from '../pages/Dev';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const AuthStack = createBottomTabNavigator();

export default function AuthRoutes() {
  const Theme = useTheme();
  return (
    <AuthStack.Navigator tabBarOptions={{
      tabStyle: { backgroundColor: Theme.colors.background },
      style: { borderTopColor: Theme.colors.card },
      activeTintColor: Theme.colors.primary,
      inactiveTintColor: Theme.colors.secondaryText
    }}>
      <AuthStack.Screen name="Dev" component={Dev} />
      <AuthStack.Screen name="SignIn" component={SignIn}
        options={{
          tabBarIcon: ({color, focused}) => (
            <Icon
              name="person"
              focused={focused}
              color={color}
              size={24}
              style={{ marginBottom: -3 }}
            />
          )
        }}
      />
      <AuthStack.Screen name="SignUp" component={SignUp}
        options={{ tabBarIcon: ({color, focused}) =>(
            <Icon
              name="person-add"
              focused={focused}
              color={color}
              size={24}
            />
          )
        }}
      />
    </AuthStack.Navigator>
  );
}
