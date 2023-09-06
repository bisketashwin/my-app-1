// HomeScreen.js

import React from 'react';
import { View, Text, Button } from 'react-native';
import { useSelector } from 'react-redux';

const HomeScreen = ({ navigation }) => {
  // Example: Accessing data from Redux store
  const users = useSelector((state) => state.data.users);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to the Home Screen</Text>
      <Button
        title="Add User"
        onPress={() => navigation.navigate('AddUser')}
      />
      <Text>List of Users:</Text>
      <View>
        {users.map((user, index) => (
          <Text key={index}>{user.name}</Text>
        ))}
      </View>
    </View>
  );
};

export default HomeScreen;


