import { createStackNavigator } from '@react-navigation/stack';
import Cluckysprintkingdomwlcm from '../CluckySprintKingdomScreens/Cluckysprintkingdomwlcm';
import Cluckysprintkingdomhm from '../CluckySprintKingdomScreens/Cluckysprintkingdomhm';
import Cluckysprintkingdominf from '../CluckySprintKingdomScreens/Cluckysprintkingdominf';
import Cluckysprintkingdompl from '../CluckySprintKingdomScreens/Cluckysprintkingdompl';
import Cluckysprintkingdomgmpl from '../CluckySprintKingdomScreens/Cluckysprintkingdomgmpl';
import Cluckysprintkingdomcrwn from '../CluckySprintKingdomScreens/Cluckysprintkingdomcrwn';
import CluckysprintkingdomMarket from '../CluckySprintKingdomScreens/Cluckysprintkingdommrkt';
import CluckySprintKingdomCustomLoader from '../CustomComponents/CluckySprintKingdomCustomLoader';

const Stack = createStackNavigator();
const CluckySprintKingdomNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="CluckySprintKingdomCustomLoader"
        component={CluckySprintKingdomCustomLoader}
      />
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
  );
};

export default CluckySprintKingdomNavigation;
