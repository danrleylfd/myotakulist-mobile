import { Feather } from '@expo/vector-icons';
import { useNavigation, useTheme } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';

import Header from '../../components/Header';
import getStyles from '../../global/styles/feed';
import api from '../../services/api';

export default function Mangas() {
  const [pageInfo,setPageInfo] = useState({ total: 0, limit: 10, prev: -1, page: 0, next: 1, pages: 0 });
  const [loading,setLoading] = useState(false);
  const [mangas, setMangas] = useState([]);
  async function loadMangas() {
    if(loading) return;
    if(pageInfo.total > 0 && pageInfo.page === pageInfo.pages) return;
    setLoading(true);
    const { data } = await api.get('/mangas', { params: { page: pageInfo.next } });
    const { docs, total, limit, page, pages } = data;
    setMangas([...mangas, ...docs]);
    setPageInfo({ docs, total, limit, prev: page-1, page, next: page+1, pages });
    setLoading(false);
  }
  useEffect(() => {
    loadMangas();
  }, []);
  const Theme = useTheme();
  const styles = getStyles();
  const navigation = useNavigation();
  function navigateToDetail(data) {
    navigation.navigate('Detail', { data });
  }
  return (
    <View style={[styles.container]}>
      <Header />
      <FlatList
        data={mangas}
        style={styles.cardList}
        keyExtractor={item => item._id}
        showsVerticalScrollIndicator={false}
        onEndReached={() => loadMangas()}
        onEndReachedThreshold={0.3}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={[styles.cardTitle, { marginTop: 8 }]}>Autor:</Text>
            <Text style={styles.cardDescription}>{item.author}</Text>
            <TouchableOpacity
              style={styles.cardAction}
              onPress={() => navigateToDetail(item)}
            >
              <Text style={styles.cardActionLabel}>Detalhes</Text>
              <Feather name='arrow-right' size={16} color={Theme.colors.primary} />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
