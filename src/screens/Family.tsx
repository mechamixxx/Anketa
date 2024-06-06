import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

type Member = {
  col1?: string;
  col2?: string;
  col3?: string;
  col4?: string;
  col5?: string;
};

type Answers = {
  first?: IMember[];
  second?: string;
};

type IMember = {
  step: string;
  name: string;
  dateOfBirth: string;
  placeWork: string;
  address: string;
};

type IMembers = IMember[];

const Family = () => {
  const [newRow, setNewRow] = useState<IMember>({ step: '', name: '', dateOfBirth: '', placeWork: '', address: '' });
  const [familyStatus, setFamilyStatus] = useState('');
  const [members, setMembers] = useState<IMembers>([]);

  const handleInputChange = (key: string, value: string) => {
    setNewRow(prevRow => ({
      ...prevRow,
      [key]: value,
    }));
  };

  const convertToIMembers = (data: Member[]): IMembers => {
    return data.map(item => ({
      step: item.col1 || '',
      name: item.col2 || '',
      dateOfBirth: item.col3 || '',
      placeWork: item.col4 || '',
      address: item.col5 || '',
    }));
  };

  const addRow = () => {
    setMembers(prevMembers => [...prevMembers, newRow]);
    setNewRow({ step: '', name: '', dateOfBirth: '', placeWork: '', address: '' });
  };

  const removeRow = () => {
    setMembers(prevMembers => prevMembers.slice(0, -1));
  };

  const showData = () => {
    console.log(familyStatus);
    console.log(members);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Семья</Text>
      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>Ваши близкие родственники (дети, жена, муж, отец, мать, взрослые братья, сестры).</Text>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={styles.tableHeader}>Степень родства</Text>
            <Text style={styles.tableHeader}>ФИО</Text>
            <Text style={styles.tableHeader}>Дата рождения</Text>
            <Text style={styles.tableHeader}>Место работы, должность</Text>
            <Text style={styles.tableHeader}>Адрес, телефон</Text>
          </View>
          {members.map((row, index) => (
            <View key={index} style={styles.tableRow}>
              <Text style={styles.tableCell}>{row.step}</Text>
              <Text style={styles.tableCell}>{row.name}</Text>
              <Text style={styles.tableCell}>{row.dateOfBirth}</Text>
              <Text style={styles.tableCell}>{row.placeWork}</Text>
              <Text style={styles.tableCell}>{row.address}</Text>
            </View>
          ))}
        </View>
        <View style={styles.inputRow}>
          <TextInput
            style={styles.input}
            placeholder="Степень родства"
            value={newRow.step}
            onChangeText={text => handleInputChange('step', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="ФИО"
            value={newRow.name}
            onChangeText={text => handleInputChange('name', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Дата рождения"
            value={newRow.dateOfBirth}
            onChangeText={text => handleInputChange('dateOfBirth', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Место работы, должность"
            value={newRow.placeWork}
            onChangeText={text => handleInputChange('placeWork', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Адрес, телефон"
            value={newRow.address}
            onChangeText={text => handleInputChange('address', text)}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Добавить строку" onPress={addRow} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Удалить последнюю строку" onPress={removeRow} />
        </View>
      </View>
      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>Семейное положение на момент заполнения личного листка:</Text>
        <TextInput
          style={styles.input}
          value={familyStatus}
          onChangeText={setFamilyStatus}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Показать данные" onPress={showData} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  questionContainer: {
    marginBottom: 35,
  },
  questionText: {
    fontSize: 18,
    marginBottom: 8,
  },
  table: {
    marginBottom: 20,
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableHeader: {
    flex: 1,
    fontWeight: 'bold',
    padding: 8,
    borderWidth: 1,
    borderColor: '#000',
    textAlign: 'center',
  },
  tableCell: {
    flex: 1,
    padding: 8,
    borderWidth: 1,
    borderColor: '#000',
    textAlign: 'center',
  },
  inputRow: {
    flexDirection: 'column',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 4,
    marginVertical: 4,
  },
  buttonContainer: {
    marginVertical: 10,
    borderRadius: 5,
    overflow: 'hidden',
  },
});

export default Family;