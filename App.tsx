import { NavigationContainer as CluckySprintNavigation } from '@react-navigation/native';
import { ContextProvider } from './CluckySprintKingdomSrc/CluckySprintKingdomStorage/cluckySprintKingdomContext';
import CluckySprintKingdomNavigation from './CluckySprintKingdomSrc/CluckySprintKingdomRoute/CluckySprintKingdomNavigation';

const App = () => {
  return (
    <CluckySprintNavigation>
      <ContextProvider>
        <CluckySprintKingdomNavigation />
      </ContextProvider>
    </CluckySprintNavigation>
  );
};

export default App;
