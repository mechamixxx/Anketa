import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet } from 'react-native';

type IVisit = {
  departureDate?: string;
  arrivalDate?: string;
  country?: string;
  purpose?: string;
};

type IVisits = IVisit[];

type Answers = {
  first?: string;
  second?: string;
  third?: string;
  fourth?: IVisits;
  fifth?: string;
  sixth?: string;
  seventh?: string;
};

type VisitProps = {
  visit: IVisit;
  onChange: (field: keyof IVisit, value: string) => void;
  onRemove: () => void;
};

const VisitItem: React.FC<VisitProps> = ({ visit, onChange, onRemove }) => {
  return (
    <View style={styles.visitContainer}>
      <TextInput
        style={styles.input}
        placeholder="Дата отправления"
        value={visit.departureDate}
        onChangeText={(text) => onChange('departureDate', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Дата прибытия"
        value={visit.arrivalDate}
        onChangeText={(text) => onChange('arrivalDate', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Страна"
        value={visit.country}
        onChangeText={(text) => onChange('country', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Цель поездки"
        value={visit.purpose}
        onChangeText={(text) => onChange('purpose', text)}
      />
      <Button title="Удалить" onPress={onRemove} />
    </View>
  );
};

const About = () => {
  const [answers, setAnswers] = useState<Answers>({});
  const [visits, setVisits] = useState<IVisits>([]);

  const handleInputChange = (question: string, value: string) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [question]: value,
    }));
  };

  const handleAbroadStayChange = (index: number, field: keyof IVisit, value: string) => {
    const newListAnsw = answers.fourth ? [...answers.fourth] : [];
    newListAnsw[index] = { ...newListAnsw[index], [field]: value };
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      fourth: newListAnsw,
    }));
  };

  const addAbroadStay = () => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      fourth: [...(prevAnswers.fourth || []), { departureDate: '', arrivalDate: '', country: '', purpose: '' }],
    }));
  };

  const removeAbroadStay = (index: number) => {
    const newListAnsw = answers.fourth ? [...answers.fourth] : [];
    newListAnsw.splice(index, 1);
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      fourth: newListAnsw,
    }));
  };

  const handleSubmit = () => {
    console.log(answers);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>О себе</Text>

      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>Укажите свои достоинства и недостатки:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => handleInputChange('first', text)}
        />
      </View>

      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>Ваши увлечения:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => handleInputChange('second', text)}
        />
      </View>

      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>Имеете ли Вы государственные награды, почетные звания:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => handleInputChange('third', text)}
        />
      </View>

      <View style={styles.questionContainer}>
        <Text style={styles.title}>Пребывание за границей</Text>
        {(answers.fourth || []).map((visit, index) => (
          <VisitItem
            key={index}
            visit={visit}
            onChange={(field, value) => handleAbroadStayChange(index, field, value)}
            onRemove={() => removeAbroadStay(index)}
          />
        ))}
        <Button title="Добавить поездку" onPress={addAbroadStay} />
      </View>

      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>Привлекались ли Вы к уголовной ответственности и административной ответственности:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => handleInputChange('fifth', text)}
        />
      </View>

      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>Опыт работы на персональном компьютере:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => handleInputChange('sixth', text)}
        />
      </View>

      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>Дополнительные сведения о себе, которые Вы хотели бы указать:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => handleInputChange('seventh', text)}
        />
      </View>

      <Button title="Отправить" onPress={handleSubmit} />
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
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 4,
    marginVertical: 4,
  },
  visitContainer: {
    flexDirection: 'column',
    marginBottom: 10,
  },
});

export default About;