import { useNavigation, useRoute, useTheme } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';

import Header from '../../components/DetailHeader';
import getStyles from '../../global/styles/feed';

export default function Detail() {
  const styles = getStyles();
  const route = useRoute();
  const { data } = route.params;
  const navigation = useNavigation();
  function navigateBack() {
    navigation.goBack();
  }
  return (
    <View style={styles.container}>
      <Header data={data} onPress={navigateBack} />
      <View style={[styles.card,styles.cardList]}>
        <Text style={[styles.cardTitle,{ marginTop: 0 }]}>{data.title}</Text>
        <Text style={styles.cardDescription}>{data.sinopse}</Text>
        <Text style={styles.cardTitle}>Autor:</Text>
        <Text style={styles.cardDescription}>{data.author}</Text>
      </View>
    </View>
  );
}