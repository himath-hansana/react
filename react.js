import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  StyleSheet
} from 'react-native';

export default function App() {

  // 1. JAVASCRIPT OBJECT
  const student = {
    name: "Himath",
    course: "Computer Science"
  };

  // 2. JAVASCRIPT ARRAY
  const subjects = ["Programming", "Database", "Networking"];

  // 3. JAVASCRIPT ARRAY OF OBJECTS (Initial Data)
  const initialStudents = [
    { id: 1, name: "Kamal", age: 21 },
    { id: 2, name: "Nimal", age: 22 }
  ];

  // 4. USESTATE (For list and form inputs)
  const [students, setStudents] = useState(initialStudents);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  // 5. IF CONDITION + ADDING OBJECT TO ARRAY
  const addStudent = () => {
    // Check if both fields are not empty
    if (name !== "" && age !== "") {
      const newStudent = {
        id: Date.now(),
        name: name,
        age: parseInt(age)
      };

      // Spread operator to update state array
      setStudents([...students, newStudent]);

      // Reset inputs
      setName("");
      setAge("");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>

      {/* RENDER OBJECT */}
      <Text style={styles.title}>Student Profile</Text>
      <Text>{student.name} - {student.course}</Text>

      {/* RENDER ARRAY WITH MAP */}
      <Text style={styles.title}>Subjects</Text>
      {subjects.map((sub, index) => (
        <Text key={index}>• {sub}</Text>
      ))}

      {/* TEXT INPUTS */}
      <TextInput
        style={styles.input}
        placeholder="Enter Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Age"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />

      <Button title="Add Student" onPress={addStudent} />

      {/* RENDER ARRAY OF OBJECTS WITH MAP */}
      <Text style={styles.title}>Student List</Text>
      {students.map((item) => (
        <View key={item.id} style={styles.card}>
          <Text>{item.name} (Age: {item.age})</Text>
        </View>
      ))}

    </ScrollView>
  );
}

// ==========================================
// MINIMAL STYLES (EASY TO MEMORIZE)
// ==========================================
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,                  // Flex
    justifyContent: 'center',     // Centering vertically
    alignItems: 'center',         // Centering horizontally
    padding: 20,                  // Padding
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,                // Margin
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    width: 220,
    padding: 8,                   // Padding
    marginVertical: 5,            // Margin top & bottom together
  },
  card: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: 220,
    padding: 10,                  // Padding
    marginVertical: 4,            // Margin
    alignItems: 'center',         // Centering inside card
  }
});