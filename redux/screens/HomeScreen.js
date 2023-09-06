import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, TextInput, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import { addUser, editUser, deleteUser } from '../actions/dataActions'; // Make sure to import your Redux actions

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.data.users);

  const [editingUser, setEditingUser] = useState(null);
  const [newName, setNewName] = useState('');

  const handleEditUser = (user) => {
    setEditingUser(user);
    setNewName(user.name);
  };

  const handleDeleteUser = (user) => {
    dispatch(deleteUser(user)); // Dispatch the deleteUser action to remove the user from the state
  };

  const handleSaveEdit = () => {
    dispatch(editUser(editingUser, { name: newName }));
    setEditingUser(null);
    setNewName('');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to the Home Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('AddUser')}>
        <Text>Add User</Text>
      </TouchableOpacity>
      <Text>List of Users:</Text>
      <FlatList
        data={users}
        keyExtractor={(user) => user.id.toString()}
        renderItem={({ item }) => (
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
            {editingUser === item ? (
              <TextInput
                style={{ flex: 1 }}
                value={newName}
                onChangeText={setNewName}
                autoFocus
              />
            ) : (
              <Text>{item.name}</Text>
            )}
            {editingUser === item ? (
              <Button title="Save" onPress={handleSaveEdit} />
            ) : (
              <TouchableOpacity onPress={() => handleEditUser(item)}>
                <Ionicons name="pencil" size={24} color="blue" />
              </TouchableOpacity>
            )}
            <TouchableOpacity onPress={() => handleDeleteUser(item)}>
              <Ionicons name="trash" size={24} color="red" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default HomeScreen;




