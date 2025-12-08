import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Cluckysprintkingdomwlcm = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={
        currentIndex === 0
          ? require('../../assets/images/cluckySprintbgonb.png')
          : require('../../assets/images/cluckySprintbg.png')
      }
      style={{ flex: 1, resizeMode: 'cover' }}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.wlcmwrap}>
          {currentIndex === 1 && (
            <>
              <Image
                source={require('../../assets/images/cluckySprintonb1.png')}
                style={{ left: -60, top: 20 }}
              />
              <Image
                source={require('../../assets/images/cluckySprintonb2.png')}
                style={{ left: 60 }}
              />
            </>
          )}
          {currentIndex === 2 && (
            <Image
              source={require('../../assets/images/cluckySprintonb3.png')}
              style={{ marginBottom: 40 }}
            />
          )}

          <LinearGradient
            colors={['#40A6FF', '#720022']}
            style={styles.cluckySprintGradient}
          >
            <View style={styles.cluckySprintWelcomeContainer}>
              <Text style={styles.cluckySprintWelcomeText}>
                {currentIndex === 0
                  ? `Welcome to Clucky Sprint Kingdom! Get ready for an egg-citing adventure filled with fun challenges and`
                  : currentIndex === 1
                  ? `During the game you get different fruits.
With them, additional backgrounds for decoration become available.`
                  : `After a certain number of levels, special crowns appear.
Collect them to personalize your space in the game.`}
              </Text>

              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() =>
                  currentIndex === 2
                    ? navigation.navigate('Cluckysprintkingdomhm')
                    : setCurrentIndex(currentIndex + 1)
                }
              >
                <ImageBackground
                  source={require('../../assets/images/cluckySprintbtn.png')}
                  style={{
                    marginTop: 55,
                    width: 242,
                    height: 103,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Text style={styles.cluckySprintBtnText}>
                    {currentIndex === 0
                      ? `HELLO`
                      : currentIndex === 1
                      ? `GOOD`
                      : `START`}
                  </Text>
                </ImageBackground>
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  wlcmwrap: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  cluckySprintGradient: {
    borderTopRightRadius: 22,
    borderTopLeftRadius: 22,
    width: '100%',
  },
  cluckySprintWelcomeContainer: {
    padding: 20,
    borderTopRightRadius: 22,
    borderTopLeftRadius: 22,
    alignItems: 'center',
    backgroundColor: '#720022',
    margin: 2,
    paddingVertical: 40,
  },
  cluckySprintWelcomeText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  cluckySprintBtnText: {
    color: '#6D1300',
    fontSize: 24,
    fontWeight: '900',
    textAlign: 'center',
  },
});

export default Cluckysprintkingdomwlcm;
