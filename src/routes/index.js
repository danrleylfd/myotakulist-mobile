import { useTheme } from '@react-navigation/native';
import React from 'react';
import { ActivityIndicator, View } from 'react-native';

import { useAuth } from '../contexts/auth';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

export default function Routes() {
  const Theme = useTheme();
  const { signed, loading } = useAuth();
  if(loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color={Theme.colors.primary} />
      </View>
    );
  }
  if(signed && !loading) return <AppRoutes />;
  return <AuthRoutes />;
}
