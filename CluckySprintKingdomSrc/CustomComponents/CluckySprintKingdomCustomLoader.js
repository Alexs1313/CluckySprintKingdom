import React, { useEffect } from 'react';
import { WebView } from 'react-native-webview';
import { View, StyleSheet } from 'react-native';
import CluckySprintKingdomLayout from './CluckySprintKingdomLayout';
import { useNavigation } from '@react-navigation/native';
import { htmlLoader } from '../CluckySprintKingdomConsts/cluckySprintKingdomAssets';

const CluckySprintKingdomCustomLoader = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Cluckysprintkingdomwlcm');
    }, 5500);
  }, []);

  return (
    <CluckySprintKingdomLayout>
      <View style={styles.loader}>
        <WebView
          originWhitelist={['*']}
          source={{ html: htmlLoader }}
          style={{ width: 220, height: 200, backgroundColor: 'transparent' }}
          scrollEnabled={false}
        />
      </View>
    </CluckySprintKingdomLayout>
  );
};

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CluckySprintKingdomCustomLoader;
