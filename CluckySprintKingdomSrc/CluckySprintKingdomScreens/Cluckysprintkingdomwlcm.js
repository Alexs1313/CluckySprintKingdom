import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Cluckysprintkingdomwlcm = () => {
  const [currentCluckySprintIndex, setCurrentCluckySprintIndex] = useState(0);
  const nav = useNavigation();

  return (
    <ImageBackground
      source={
        currentCluckySprintIndex === 0
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
          {currentCluckySprintIndex === 1 && (
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
          {currentCluckySprintIndex === 2 && (
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
                {currentCluckySprintIndex === 0
                  ? `Welcome to Clucky Sprint Kingdom! Get ready for an egg-citing adventure filled with fun challenges and`
                  : currentCluckySprintIndex === 1
                  ? `During the game you get different fruits.
With them, additional backgrounds for decoration become available.`
                  : `After a certain number of levels, special crowns appear.
Collect them to personalize your space in the game.`}
              </Text>

              <View
                activeOpacity={0.6}
                onPress={() =>
                  currentCluckySprintIndex === 2
                    ? nav.navigate('Cluckysprintkingdomhm')
                    : setCurrentCluckySprintIndex(currentCluckySprintIndex + 1)
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
                    {currentCluckySprintIndex === 0
                      ? `HELLO`
                      : currentCluckySprintIndex === 1
                      ? `GOOD`
                      : `START`}
                  </Text>
                </ImageBackground>
              </View>
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
    minHeight: 340,
  },
  cluckySprintWelcomeText: {
    color: '#FFFFFF',
    fontSize: 18,
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
