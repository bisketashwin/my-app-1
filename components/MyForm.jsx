import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ScrollView } from 'react-native-gesture-handler';

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
    return (
      <View >
        <Text style={{ fontSize: 18,color:'#838383' }}>{item.label}:</Text>
        <TextInput
          style={{
            borderWidth: 0,
            paddingVertical:5,
            paddingLeft:  item.focused ? 5:0,
            marginBottom: 10,
            backgroundColor: item.focused ? 'yellow' : 'transparent',
            fontSize: 22,
            borderCurve: 'circular',
            borderRadius: 5,
            borderColor:'#b7b7b7',
          }}
          value={item.value}
          placeholder={item.defaultValue}
          keyboardType={item.keyboardType}
          onChangeText={(text) => handleItemChange(text, index)}
          onFocus={() => onFocus(index)}
          onBlur={() => onBlur(index)}
        />
      </View>
    );
  };

  const onSaveChanges = () => {
    console.log('Saved changes:', data);
    setSaved(false);
  };

  return (
    <View style={{ flex: 1, margin: 20 }}>
      <View style={{ height: 25, justifyContent: 'space-around', marginBottom: 5 }}>
        {saving ? (
          <Text style={{ paddingLeft: 10, color:'#838383', backgroundColor: 'yellow' }}>Saving changes...</Text>
        ) : saved ? (<Text style={{color:'#838383',}}>Saved changes!</Text>
        ) : <Text style={{height:20}}>No changes</Text>}
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={{ justifyContent: 'flex-start', alignContent: 'flex-start' }}
      />


    </View>
  );
};

export default MyForm;
