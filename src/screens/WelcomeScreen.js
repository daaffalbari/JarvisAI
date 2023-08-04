import {View, Text, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';

export default function WelcomeScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1 flex justify-around bg-white">
      <View className="space-y-2">
        <Text
          style={{fontSize: wp(10)}}
          className="text-center font-bold text-gray-700">
          JarvisAI
        </Text>
        <Text
          style={{fontSize: wp(4)}}
          className="text-center tracking-wider font-semibold text-gray-600">
          The future is here, powerd by AI.
        </Text>
      </View>

      {/* assistant image */}
      <View className="flex-row justify-center">
        <Image
          source={require('../../assets/images/welcome.png')}
          style={{height: wp(75), width: wp(75)}}
        />
      </View>

      {/* start button */}
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        className="bg-emerald-500 mx-5 p-4 rounded-2xl">
        <Text
          style={{fontSize: wp(6)}}
          className="text-center font-bold text-white tracking-wider">
          Get Started
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
