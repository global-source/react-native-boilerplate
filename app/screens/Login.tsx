import { Input, Button } from '@rneui/themed';
import React, { useState } from 'react';
import { View } from 'react-native';
import { Text } from '../common/components/text.component';

export default function LoginScreen({navigation}) {

  return (
    <View>
      <Text p2>Login</Text>
      <Button
        title="Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
}
