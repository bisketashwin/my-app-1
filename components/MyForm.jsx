import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TextInput, Button, Alert, TouchableHighlight } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ScrollView } from 'react-native-gesture-handler';
import Modal from 'react-native-modal';
import {modalStyle, buttons,textInputStyle } from './Styles';
import { colors } from "./Constants"

const STORAGE_KEY = 'myFormData';

const MyForm = () => {
  const initialData = [
    {
      id: 1,
      label: 'Name',
      value: '',
      defaultValue: 'John Doe',
      keyboardType: 'default',
    },
    {
      id: 2,
      label: 'Age',
      value: '',
      defaultValue: '30',
      keyboardType: 'number-pad',
    },
    {
      id: 3,
      label: 'Email',
      value: '',
      defaultValue: 'example@email.com',
      keyboardType: 'email-address',
    },
    {
      id: 4,
      label: 'Phone',
      value: '',
      defaultValue: '123-456-7890',
      keyboardType: 'phone-pad',
    },
    {
      id: 5,
      label: 'Farm Name',
      value: '',
      defaultValue: 'Shaji Baruch farm',
      keyboardType: 'default',
    },
    {
      id: 6,
      label: 'Farm Address',
      value: '',
      defaultValue: 'Complete address so that we can create a pin on google map',
      keyboardType: 'default',
    },
  ];

  const [data, setData] = useState(initialData);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [deleteConfirmationVisible, setDeleteConfirmationVisible] = useState(false);
  const [deleteGroupIndex, setDeleteGroupIndex] = useState(null);

  const addFarmPair = () => {
    const newFarmPair = [
      {
        id: data.length + 1,
        label: 'Farm Name',
        value: '',
        defaultValue: 'Farm Name',
        keyboardType: 'default',
      },
      {
        id: data.length + 2,
        label: 'Farm Address',
        value: '',
        defaultValue: 'Farm Address',
        keyboardType: 'default',
      },
    ];

    setData((prevData) => [...prevData, ...newFarmPair]);
  };

  const confirmDeleteGroup = (index) => {
    setDeleteGroupIndex(index);
    setDeleteConfirmationVisible(true);
  };

  const deleteFarmGroup = () => {
    if (deleteGroupIndex !== null) {
      const newData = [...data];
      newData.splice(deleteGroupIndex, 2); // Remove the Farm Name and Farm Address pair
      setData(newData);
      setSaving(true);
      setSaved(false);
      setDeleteGroupIndex(null);
      setDeleteConfirmationVisible(false);
    }
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        const storedData = await AsyncStorage.getItem(STORAGE_KEY);
        if (storedData !== null) {
          setData(JSON.parse(storedData));
        }
      } catch (error) {
        console.error('Error loading data:', error);
      }
    };

    loadData();
  }, []);

  useEffect(() => {
    const saveTimeout = setTimeout(() => {
      if (saving) {
        console.log('Saving data:', data);
        setSaved(true);
        setSaving(false);

        const saveData = async () => {
          try {
            await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
          } catch (error) {
            console.error('Error saving data:', error);
          }
        };

        saveData();
      }
    }, 2000);

    return () => clearTimeout(saveTimeout);
  }, [data, saving]);

  const handleItemChange = (text, index) => {
    const newData = [...data];
    newData[index].value = text;
    setData(newData);
    setSaving(true);
    setSaved(false);
  };

  const onFocus = (index) => {
    const newData = [...data];
    newData[index].focused = true;
    setData(newData);
  };

  const onBlur = (index) => {
    const newData = [...data];
    newData[index].focused = false;
    setData(newData);
  };

  const renderItem = ({ item, index }) => {
    const sendVale=item
    return (
      <View>
        {index % 2 === 0 && index > 0 && <View style={{ borderBottomWidth: 1, borderColor: 'gray', marginBottom: 10 }} />}
        <Text style={{ fontSize: 18, color: '#838383' }}>{item.label}:</Text>
        <TextInput
          // style={(item)=>textInputStyle(item).style1} // TODO: check why it did not work
          style={{
              borderWidth: 0,
              paddingVertical: 5,
              paddingLeft: item.focused ? 5 : 0,
              marginBottom: 10,
              backgroundColor: item.focused ? 'yellow' : 'transparent',
              fontSize: 22,
              borderCurve: 'circular',
              borderRadius: 5,
              borderColor: '#b7b7b7',
            }}
          value={item.value}
          placeholder={item.defaultValue}
          keyboardType={item.keyboardType}
          onChangeText={(text) => handleItemChange(text, index)}
          onFocus={() => onFocus(index)}
          onBlur={() => onBlur(index)}
        />
        {item.label === 'Farm Name' && (
          <Button title="Delete" onPress={() => confirmDeleteGroup(index)} />
        )}
      </View>
    );
  };

  return (
    <View style={{ flex: 1, margin: 20 }}>
      <View style={{ height: 25, justifyContent: 'space-around', marginBottom: 5 }}>
        {saving ? (
          <Text style={{ paddingLeft: 10, color: '#838383', backgroundColor: 'yellow' }}>Saving changes...</Text>
        ) : saved ? (
          <Text style={{ color: '#838383' }}>Saved changes!</Text>
        ) : (
          <Text style={{ height: 20 }}>No changes</Text>
        )}
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={{ justifyContent: 'flex-start', alignContent: 'flex-start' }}
      />
      <Button title="Add Farm Name & Address" onPress={addFarmPair} />
      {/* popUp reafactored extract to inner function as arrow function */}
      {popUp()} 
    </View>
  );

  function popUp() {
    return <Modal isVisible={deleteConfirmationVisible}>
      <View style={modalStyle.popUpBase}>
        <View style={modalStyle.popUpHeader}>
          <Text style={modalStyle.popUpHeaderText}>Delete this Farm info?</Text>
        </View>
        <View style={modalStyle.popUpContentBase}>
          <Text>Farm Name: {data[deleteGroupIndex]?.value || 'No Information'}</Text>
          <Text>Farm Address: {data[deleteGroupIndex + 1]?.value || 'No Information'}</Text>
          <View style={modalStyle.popUpButtonsBase}>
            <TouchableHighlight
              underlayColor={colors.touchable.underlayColor}
              style={buttons.primary}
              onPress={() => setDeleteConfirmationVisible(false)}>
              <Text style={buttons.primaryText}>Cancel</Text>
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor={colors.touchable.underlayColor}
              style={buttons.secondery}
              onPress={deleteFarmGroup}>
              <Text style={buttons.seconderyText}>Delete</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    </Modal>;
  }
};

export default MyForm;
