import { useTheme } from '@react-navigation/native';
import Constants from 'expo-constants';
import { StyleSheet } from 'react-native';

export default function getStyles() {
  const Theme = useTheme();
  return StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 24,
      paddingTop: Constants.statusBarHeight + 20,
      backgroundColor: Theme.colors.background,
      justifyContent: 'center',
      alignContent: 'center',
    },
    logo: {
      marginBottom: 64,
      width: 100,
      height: 100,
      alignSelf: 'center',
    },
    input: {
      fontFamily: 'Rubik-Regular',
      marginVertical: 2,
      minWidth: '100%'
    },
    submit: {
      fontFamily: 'Rubik-Regular',
      marginVertical: 2,
      paddingVertical: 8,
    }
  });
}