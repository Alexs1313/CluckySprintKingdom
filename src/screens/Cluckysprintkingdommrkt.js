import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import CluckySprintKingdomLayout from '../components/CluckySprintKingdomLayout';

const { height } = Dimensions.get('window');

const cluckySprintKingdomWallpapers = [
  {
    id: 0,
    price: 0,
    image: require('../../assets/images/cluckySprintbg.png'),
  },
  {
    id: 1,
    price: 3,
    image: require('../../assets/images/cluckySprintBg1.png'),
  },
  {
    id: 2,
    price: 3,
    image: require('../../assets/images/cluckySprintBg2.png'),
  },
];

const cluckySprintKingdomFruitKey = 'cluckySprintFruitBank';
const cluckySprintKingdomBoughtKey = 'cluckySprintKingdomWallpapersBought';
const cluckySprintKingdomSelectedKey = 'cluckySprintKingdomSelectedWallpaper';

const CluckysprintkingdomMarket = () => {
  const navigation = useNavigation();

  const [cluckySprintKingdomFruits, setCluckySprintKingdomFruits] = useState({
    orange: 0,
    grape: 0,
    lemon: 0,
    cherry: 0,
  });

  const [cluckySprintKingdomBought, setCluckySprintKingdomBought] = useState([
    0,
  ]);
  const [cluckySprintKingdomSelected, setCluckySprintKingdomSelected] =
    useState(0);
  const [cluckySprintKingdomIndex, setCluckySprintKingdomIndex] = useState(0);

  useEffect(() => {
    cluckySprintKingdomLoadData();
  }, []);

  const cluckySprintKingdomLoadData = async () => {
    const f = await AsyncStorage.getItem(cluckySprintKingdomFruitKey);
    const b = await AsyncStorage.getItem(cluckySprintKingdomBoughtKey);
    const s = await AsyncStorage.getItem(cluckySprintKingdomSelectedKey);

    if (f) setCluckySprintKingdomFruits(JSON.parse(f));
    if (b) setCluckySprintKingdomBought(JSON.parse(b));
    if (s) setCluckySprintKingdomSelected(parseInt(s, 10));
  };

  const cluckySprintKingdomSaveBought = async updated => {
    setCluckySprintKingdomBought(updated);
    await AsyncStorage.setItem(
      cluckySprintKingdomBoughtKey,
      JSON.stringify(updated),
    );
  };

  const cluckySprintKingdomSaveSelected = async id => {
    setCluckySprintKingdomSelected(id);
    await AsyncStorage.setItem(cluckySprintKingdomSelectedKey, String(id));
  };

  const cluckySprintKingdomSaveFruits = async updated => {
    setCluckySprintKingdomFruits(updated);
    await AsyncStorage.setItem(
      cluckySprintKingdomFruitKey,
      JSON.stringify(updated),
    );
  };

  const cluckySprintKingdomTryBuy = async wallpaper => {
    const cost = wallpaper.price;

    if (cluckySprintKingdomFruits.lemon < cost) return;

    const newFruits = {
      ...cluckySprintKingdomFruits,
      lemon: cluckySprintKingdomFruits.lemon - cost,
    };

    await cluckySprintKingdomSaveFruits(newFruits);

    const newBought = [...cluckySprintKingdomBought, wallpaper.id];
    await cluckySprintKingdomSaveBought(newBought);
  };

  const wp = cluckySprintKingdomWallpapers[cluckySprintKingdomIndex];
  const isBought = cluckySprintKingdomBought.includes(wp.id);
  const isSelected = cluckySprintKingdomSelected === wp.id;

  let cluckySprintKingdomState = 'blocked';

  if (isSelected) cluckySprintKingdomState = 'selected';
  else if (isBought) cluckySprintKingdomState = 'unlocked';

  return (
    <CluckySprintKingdomLayout>
      <View style={styles.cluckySprintKingdomContainer}>
        <TouchableOpacity
          style={styles.cluckySprintKingdomBackBtn}
          onPress={() => navigation.goBack()}
        >
          <Image source={require('../../assets/images/cluckySprintBack.png')} />
          <Text style={styles.cluckySprintKingdomHeaderText}>MARKET</Text>
        </TouchableOpacity>

        <Text style={styles.cluckySprintKingdomSubHeader}>
          Exchange fruits for new gameplay wallpapers
        </Text>

        <View style={styles.cluckySprintKingdomWallpaperBox}>
          <Image
            source={wp.image}
            style={styles.cluckySprintKingdomWallpaperImage}
          />

          {cluckySprintKingdomState === 'blocked' && (
            <View style={styles.cluckySprintKingdomBlockedOverlay}>
              <Text style={styles.cluckySprintKingdomBlockedText}>Blocked</Text>
            </View>
          )}

          {cluckySprintKingdomState === 'unlocked' && (
            <View style={styles.cluckySprintKingdomUnlockedOverlay}>
              <Text style={styles.cluckySprintKingdomUnlockedText}>
                Unlocked
              </Text>
            </View>
          )}

          {cluckySprintKingdomState === 'selected' && (
            <View style={styles.cluckySprintKingdomUnlockedOverlay}>
              <Text style={styles.cluckySprintKingdomUnlockedText}>Elect</Text>
            </View>
          )}
        </View>

        {cluckySprintKingdomState === 'blocked' && (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => cluckySprintKingdomTryBuy(wp)}
          >
            <ImageBackground
              source={require('../../assets/images/cluckySprintbtn.png')}
              style={styles.cluckySprintKingdomActionBtn}
            >
              <Text style={styles.cluckySprintKingdomActionBtnText}>
                Unlock for {wp.price} 🍋
              </Text>
            </ImageBackground>
          </TouchableOpacity>
        )}

        {cluckySprintKingdomState === 'unlocked' && (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => cluckySprintKingdomSaveSelected(wp.id)}
          >
            <ImageBackground
              source={require('../../assets/images/cluckySprintbtn.png')}
              style={styles.cluckySprintKingdomActionBtn}
            >
              <Text style={styles.cluckySprintKingdomActionBtnText}>
                Choose
              </Text>
            </ImageBackground>
          </TouchableOpacity>
        )}

        {cluckySprintKingdomState === 'selected' && (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() =>
              setCluckySprintKingdomIndex(
                prev => (prev + 1) % cluckySprintKingdomWallpapers.length,
              )
            }
          >
            <ImageBackground
              source={require('../../assets/images/cluckySprintbtn.png')}
              style={styles.cluckySprintKingdomActionBtn}
            >
              <Text style={styles.cluckySprintKingdomActionBtnText}>Next</Text>
            </ImageBackground>
          </TouchableOpacity>
        )}
      </View>
    </CluckySprintKingdomLayout>
  );
};

const styles = StyleSheet.create({
  cluckySprintKingdomContainer: {
    flex: 1,
    paddingTop: height * 0.08,
    alignItems: 'center',
    padding: 17,
    paddingBottom: 30,
  },
  cluckySprintKingdomBackBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 18,
    marginBottom: 20,
    alignSelf: 'flex-start',
  },
  cluckySprintKingdomHeaderText: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: '900',
  },
  cluckySprintKingdomSubHeader: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '900',
    marginBottom: 30,
    marginTop: 10,
  },
  cluckySprintKingdomWallpaperBox: {
    width: 330,
    height: 420,
    borderRadius: 20,
    overflow: 'hidden',
    position: 'relative',
    borderWidth: 2,
    borderColor: '#40a6ffc3',
  },
  cluckySprintKingdomWallpaperImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  cluckySprintKingdomBlockedOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  cluckySprintKingdomBlockedText: {
    color: '#FFFFFF',
    fontSize: 26,
    fontWeight: '900',
    marginBottom: 20,
  },
  cluckySprintKingdomUnlockedOverlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    paddingBottom: 20,
    alignItems: 'center',
  },
  cluckySprintKingdomUnlockedText: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '900',
  },
  cluckySprintKingdomActionBtn: {
    width: 240,
    height: 102,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  cluckySprintKingdomActionBtnText: {
    color: '#6D1300',
    fontSize: 24,
    fontWeight: '900',
  },
});

export default CluckysprintkingdomMarket;
