import { View, StyleSheet } from 'react-native';
import { BaidumapMarkerTestView } from 'react-native-baidumap-marker-test';

export default function App() {
  return (
    <View style={styles.container}>
      <BaidumapMarkerTestView color="#32a852" style={styles.box} />
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
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
