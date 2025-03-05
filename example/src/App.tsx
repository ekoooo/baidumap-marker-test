import { View, StyleSheet } from 'react-native';
import { BaidumapMarkerTestView } from 'react-native-baidumap-marker-test';

export default function App() {
  return (
    <View style={styles.container}>
      <BaidumapMarkerTestView style={styles.box} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: '90%',
    height: '90%',
    marginVertical: 20,
    backgroundColor: 'pink'
  },
});
