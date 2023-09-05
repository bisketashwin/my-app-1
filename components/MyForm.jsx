import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TextInput, Button } from 'react-native';

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
  ];

  const [data, setData] = useState(initialData);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const saveTimeout = setTimeout(() => {
      if (saving) {
        console.log('Saving data:', data);
        setSaved(true);
        setSaving(false);
        // Implement your save logic here (e.g., send data to the server).
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
      <View>
        <Text>{item.label}:</Text>
        <TextInput
          style={{
            borderWidth: 1,
            padding: 5,
            marginBottom: 10,
            backgroundColor: item.focused ? 'yellow' : 'white',
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
    // Handle saving changes to the server or any other action
    console.log('Saved changes:', data);
    setSaved(false); // Reset saved status
  };

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
      <Button title="Save Changes" onPress={onSaveChanges} />
      {saving && <Text>Saving data...</Text>}
      {saved && <Text>Data saved!</Text>}
    </View>
  );
};

export default MyForm;
