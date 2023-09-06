// screens/AddUserScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { addUser } from '../actions/dataActions';
import { useNavigation } from '@react-navigation/native';

const AddUserScreen = ({ addUser }) => {
  const [userName, setUserName] = useState('');
  const navigation = useNavigation();

  const handleAddUser = () => {
    // Dispatch the addUser action to add a user to the state
    addUser({ name: userName });
    navigation.goBack();
  };

  return (
    <View>
      <Text>Add User</Text>
      <TextInput
        placeholder="Enter user name"
        value={userName}
        onChangeText={setUserName}
      />
      <Button title="Add User" onPress={handleAddUser} />
    </View>
  );
};

const mapDispatchToProps = {
  addUser,
};

export default connect(null, mapDispatchToProps)(AddUserScreen);


// import React, { useState } from 'react';
// import { View, Text, TextInput, Button } from 'react-native';
// import { connect } from 'react-redux';
// import { addUser } from '../actions/dataActions';
// import { useNavigation } from '@react-navigation/native';

// const AddUserScreen = ({ addUser }) => {
//   const [userName, setUserName] = useState('');
//   const navigation = useNavigation();

//   const handleAddUser = () => {
//     // Dispatch the addUser action to add a user to the state
//     addUser({ name: userName });
//    // navigation.goBack();
//   };

//   return (
//     <View>
//       <Text>Add User</Text>
//       <TextInput
//         placeholder="Enter user name"
//         value={userName}
//         onChangeText={setUserName}
//       />
//       <Button title="Add User" onPress={handleAddUser} />
//     </View>
//   );
// };

// const mapDispatchToProps = {
//   addUser,
// };

// export default connect(null, mapDispatchToProps)(AddUserScreen);
