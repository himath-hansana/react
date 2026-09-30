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


  const student = {
    name: "Himath",
    course: "Computer Science"
  };


  const subjects = ["Programming", "Database", "Networking"];


  const initialStudents = [
    { id: 1, name: "Kamal", age: 21 },
    { id: 2, name: "Nimal", age: 22 }
  ];


  const [students, setStudents] = useState(initialStudents);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");


  const addStudent = () => {

    if (name !== "" && age !== "") {
      const newStudent = {
        id: Date.now(),
        name: name,
        age: parseInt(age)
      };

    
      setStudents([...students, newStudent]);

      setName("");
      setAge("");
    }
  };

  const deleteStudent = (idToDelete) => {
    setStudents(students.filter((item) => item.id !== idToDelete));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>


      <Text style={styles.title}>Student Profile</Text>
      <Text>{student.name} - {student.course}</Text>


      <Text style={styles.title}>Subjects</Text>
      {subjects.map((sub, index) => (
        <Text key={index}>• {sub}</Text>
      ))}

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

  
      <Text style={styles.title}>Student List</Text>
      {students.map((item) => (
        <View key={item.id} style={styles.card}>
          <Text>{item.name} (Age: {item.age})</Text>
        </View>
        <TouchableOpacity onPress={() => deleteStudent(item.id)}>
            <Text style={styles.deleteBtn}>✕</Text>
          </TouchableOpacity>
      ))}

    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flexGrow: 1,                  
    justifyContent: 'center',     
    alignItems: 'center',        
    padding: 20,                  
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,                
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    width: 220,
    padding: 8,                   
    marginVertical: 5,           
  },
  card: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: 220,
    padding: 10,                  
    marginVertical: 4,            
    alignItems: 'center',         
  }
});
