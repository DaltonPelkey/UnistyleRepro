import './unistyles';
//
import { StyleSheet, View } from 'react-native';
import {useStyles} from 'react-native-unistyles';

export default function App() {
  const {theme} = useStyles();

  return (
    <View style={styles.container} />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
