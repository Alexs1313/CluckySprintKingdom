import { NavigationContainer as CluckySprintNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import CluckySprintKingdomLoader from './src/components/CluckySprintKingdomLoader';

import { createStackNavigator } from '@react-navigation/stack';
import Cluckysprintkingdomwlcm from './src/screens/Cluckysprintkingdomwlcm';
import Cluckysprintkingdomhm from './src/screens/Cluckysprintkingdomhm';
import Cluckysprintkingdominf from './src/screens/Cluckysprintkingdominf';
import Cluckysprintkingdompl from './src/screens/Cluckysprintkingdompl';
import Cluckysprintkingdomgmpl from './src/screens/Cluckysprintkingdomgmpl';
import Cluckysprintkingdomcrwn from './src/screens/Cluckysprintkingdomcrwn';
import CluckysprintkingdomMarket from './src/screens/Cluckysprintkingdommrkt';

const Stack = createStackNavigator();

const App = () => {
  const [isLoadingCluckySprint, setIsLoadingCluckySprint] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoadingCluckySprint(false);
    }, 5500);
  }, []);

  return (
    <CluckySprintNavigation>
      {isLoadingCluckySprint ? (
        <CluckySprintKingdomLoader />
      ) : (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="Cluckysprintkingdomwlcm"
            component={Cluckysprintkingdomwlcm}
          />
          <Stack.Screen
            name="Cluckysprintkingdomhm"
            component={Cluckysprintkingdomhm}
          />
          <Stack.Screen
            name="Cluckysprintkingdominf"
            component={Cluckysprintkingdominf}
          />
          <Stack.Screen
            name="Cluckysprintkingdompl"
            component={Cluckysprintkingdompl}
          />
          <Stack.Screen
            name="Cluckysprintkingdomgmpl"
            component={Cluckysprintkingdomgmpl}
          />

          <Stack.Screen
            name="Cluckysprintkingdomcrwn"
            component={Cluckysprintkingdomcrwn}
          />
          <Stack.Screen
            name="Cluckysprintkingdommrkt"
            component={CluckysprintkingdomMarket}
          />
        </Stack.Navigator>
      )}
    </CluckySprintNavigation>
  );
};

export default App;
