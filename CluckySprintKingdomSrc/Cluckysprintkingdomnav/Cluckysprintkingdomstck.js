import { createStackNavigator } from '@react-navigation/stack';
import Cluckysprintkingdomhm from '../Cluckysprintkingdomscrns/Cluckysprintkingdomhm';
import Cluckysprintkingdomwlcm from '../Cluckysprintkingdomscrns/Cluckysprintkingdomwlcm';
import Cluckysprintkingdominf from '../Cluckysprintkingdomscrns/Cluckysprintkingdominf';
import Cluckysprintkingdompl from '../Cluckysprintkingdomscrns/Cluckysprintkingdompl';
import Cluckysprintkingdomgmpl from '../Cluckysprintkingdomscrns/Cluckysprintkingdomgmpl';
import Cluckysprintkingdomcrwn from '../Cluckysprintkingdomscrns/Cluckysprintkingdomcrwn';
import Cluckysprintkingdommrkt from '../Cluckysprintkingdomscrns/Cluckysprintkingdommrkt';

const Stack = createStackNavigator();

const Cluckysprintkingdomstck = () => {
  return (
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
        component={Cluckysprintkingdommrkt}
      />
    </Stack.Navigator>
  );
};

export default Cluckysprintkingdomstck;
