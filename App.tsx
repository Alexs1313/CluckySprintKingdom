import { NavigationContainer } from '@react-navigation/native';
import { useEffect, useState } from 'react';

import CluckySprintKingdomLoader from './CluckySprintKingdomSrc/Cluckysprintkingdomcmpnts/CluckySprintKingdomLoader';
import Cluckysprintkingdomstck from './CluckySprintKingdomSrc/Cluckysprintkingdomnav/Cluckysprintkingdomstck';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  return (
    <NavigationContainer>
      {isLoading ? <CluckySprintKingdomLoader /> : <Cluckysprintkingdomstck />}
    </NavigationContainer>
  );
};

export default App;
