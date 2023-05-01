import {Alert, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import messaging from '@react-native-firebase/messaging';

export default function App() {
  useEffect(() => {
    getDeviceToken();
  }, []);

  const getDeviceToken = async () => {
    const token = await messaging().getToken();
    console.log('device token ==>', token);
  };

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert(
        'A new FCM message arrived! in foreground mode.',
        JSON.stringify(remoteMessage),
      );
    });

    return unsubscribe;
  }, []);

  return (
    <View style={styles.container}>
      <Text>Push Notification Demo !!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
