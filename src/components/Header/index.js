import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import { useAuth } from '../../contexts/auth';
import getStyles from '../../global/styles/feed';

export default function Header({size = { width: 48, height: 48 }, radius = 24}) {
  const auth = useAuth();
  const styles = getStyles();
  return (
    <View style={styles.header}>
      <View style={styles.header}>
        <Image source={{ uri: auth.user.avatar }} style={{ width: size.width || 48, height: size.height || 48, borderRadius: radius }} />
        <Text style={[styles.headerText, { marginLeft: 8 }]}>{auth.user.name}</Text>
      </View>
    </View>
  );
}
