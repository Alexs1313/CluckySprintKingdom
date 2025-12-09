import React, { useCallback, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { cluckysprintlevels } from '../data/cluckysprintlevels';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CluckySprintKingdomLayout from '../components/CluckySprintKingdomLayout';

const CLUCKY_LEVEL_KEY = 'cluckySprintLevel';

const cluckySprintKingdomFruitImages = {
  orange: require('../../assets/images/cluckySprintFruit1.png'),
  grape: require('../../assets/images/cluckySprintFruit2.png'),
  lemon: require('../../assets/images/cluckySprintFruit3.png'),
  cherry: require('../../assets/images/cluckySprintFruit4.png'),
};

const Cluckysprintkingdomhm = () => {
  const cluckySprintKingdomNavigation = useNavigation();

  const [cluckySprintKingdomCurrentLevel, setCluckySprintKingdomCurrentLevel] =
    useState(1);

  useFocusEffect(
    useCallback(() => {
      const cluckySprintKingdomLoadLevel = async () => {
        try {
          const lvl = await AsyncStorage.getItem(CLUCKY_LEVEL_KEY);
          if (lvl) setCluckySprintKingdomCurrentLevel(parseInt(lvl, 10));
        } catch (e) {}
      };
      cluckySprintKingdomLoadLevel();
    }, []),
  );

  const cluckySprintKingdomLevelData =
    cluckysprintlevels[cluckySprintKingdomCurrentLevel - 1];
  const cluckySprintKingdomLevelNeeds = cluckySprintKingdomLevelData.needs;

  return (
    <CluckySprintKingdomLayout>
      <View style={styles.cluckySprintKingdomWelcomeWrap}>
        <Image
          source={require('../../assets/images/cluckySprintHomeLogo.png')}
        />

        <View style={styles.cluckySprintKingdomFruitsWrapper}>
          {Object.keys(cluckySprintKingdomLevelNeeds).map(key => (
            <View style={styles.cluckySprintKingdomFruitContainer} key={key}>
              <Image source={cluckySprintKingdomFruitImages[key]} />
              <Text style={styles.cluckySprintKingdomFruitQuantity}>
                {cluckySprintKingdomLevelNeeds[key]}
              </Text>
            </View>
          ))}
        </View>

        <View style={styles.cluckySprintKingdomLevelCont}>
          <Image source={require('../../assets/images/cluckySprintLvl.png')} />
          <Text style={styles.cluckySprintKingdomLevelText}>
            LEVEL {cluckySprintKingdomCurrentLevel}
          </Text>
        </View>

        <View>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() =>
              cluckySprintKingdomNavigation.navigate(
                'Cluckysprintkingdomgmpl',
                {
                  level: cluckySprintKingdomCurrentLevel,
                },
              )
            }
          >
            <ImageBackground
              source={require('../../assets/images/cluckySprintbtn.png')}
              style={styles.cluckySprintKingdomBtn}
            >
              <Text style={styles.cluckySprintKingdomBtnText}>START PLAY</Text>
            </ImageBackground>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() =>
              cluckySprintKingdomNavigation.navigate('Cluckysprintkingdomcrwn')
            }
          >
            <ImageBackground
              source={require('../../assets/images/cluckySprintbtn.png')}
              style={styles.cluckySprintKingdomBtn}
            >
              <Text style={styles.cluckySprintKingdomBtnText}>CROWNS</Text>
            </ImageBackground>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() =>
              cluckySprintKingdomNavigation.navigate('Cluckysprintkingdommrkt')
            }
          >
            <ImageBackground
              source={require('../../assets/images/cluckySprintbtn.png')}
              style={styles.cluckySprintKingdomBtn}
            >
              <Text style={styles.cluckySprintKingdomBtnText}>MARKET</Text>
            </ImageBackground>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() =>
              cluckySprintKingdomNavigation.navigate('Cluckysprintkingdominf')
            }
          >
            <ImageBackground
              source={require('../../assets/images/cluckySprintbtn.png')}
              style={styles.cluckySprintKingdomBtn}
            >
              <Text style={styles.cluckySprintKingdomBtnText}>INFO</Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
      </View>
    </CluckySprintKingdomLayout>
  );
};

const styles = StyleSheet.create({
  cluckySprintKingdomWelcomeWrap: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 30,
  },
  cluckySprintKingdomBtnText: {
    color: '#6D1300',
    fontSize: 24,
    fontWeight: '900',
    textAlign: 'center',
  },
  cluckySprintKingdomBtn: {
    marginTop: 13,
    width: 242,
    height: 103,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cluckySprintKingdomFruitQuantity: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '900',
  },
  cluckySprintKingdomFruitContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  cluckySprintKingdomFruitsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginVertical: 20,
  },
  cluckySprintKingdomLevelCont: {
    width: '90%',
    height: 34,
    backgroundColor: '#6D1300',
    borderRadius: 12,
    marginBottom: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 15,
  },
  cluckySprintKingdomLevelText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '900',
  },
});

export default Cluckysprintkingdomhm;
