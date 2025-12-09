import { useNavigation } from '@react-navigation/native';
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CluckySprintKingdomLayout from '../components/CluckySprintKingdomLayout';

const { height } = Dimensions.get('window');

const Cluckysprintkingdompl = () => {
  const navigation = useNavigation();

  return (
    <CluckySprintKingdomLayout>
      <View style={styles.wlcmwrap}>
        <TouchableOpacity
          style={styles.cluckySprintHeader}
          activeOpacity={0.6}
          onPress={() => navigation.goBack()}
        >
          <Image source={require('../../assets/images/cluckySprintBack.png')} />
          <Text style={styles.cluckySprintBackText}>START PLAY</Text>
        </TouchableOpacity>

        <Text style={styles.cluckySprintFruitInfoText}>
          {`Fruits appear in each level.

Click only the ones you need for that level.

Complete the tasks within the allotted time.

After completing the levels, you get different fruits.

The fruits can be used to unlock new backgrounds in the corresponding section.`}
        </Text>

        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => navigation.navigate('Cluckysprintkingdomgmpl')}
        >
          <ImageBackground
            source={require('../../assets/images/cluckySprintbtn.png')}
            style={styles.cluckySprintBtn}
          >
            <Text style={styles.cluckySprintBtnText}>START PLAY</Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    </CluckySprintKingdomLayout>
  );
};

const styles = StyleSheet.create({
  wlcmwrap: {
    flex: 1,
    alignItems: 'center',
    paddingTop: height * 0.08,
    justifyContent: 'space-between',
    padding: 17,
    paddingBottom: 70,
  },
  cluckySprintBtnText: {
    color: '#6D1300',
    fontSize: 24,
    fontWeight: '900',
    textAlign: 'center',
  },
  cluckySprintBtn: {
    marginTop: 67,
    width: 242,
    height: 103,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cluckySprintFruitInfoText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '500',
    marginTop: 21,
    lineHeight: 26,
    textAlign: 'center',
  },
  cluckySprintBackText: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: '900',
  },
  cluckySprintHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 18,
    alignSelf: 'flex-start',
  },
});

export default Cluckysprintkingdompl;
