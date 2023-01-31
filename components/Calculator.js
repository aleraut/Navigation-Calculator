import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function Calculator({ navigation }) {

  const [input1, setInput1] = React.useState(0);
  const [input2, setInput2] = React.useState(0);
  let [result, setResult] = React.useState(0);
  const [data, setData] = React.useState([]);

  const minusButton = () => {
    let minus = (parseFloat(input1) - parseFloat(input2));
    setResult(minus);
    setData([{key: `${input1} - ${input2} = ${minus}`}, ...data]);
  };

  const plusButton = () => {
    let plus = (parseFloat(input1) + parseFloat(input2));
    setResult(plus);
    setData([{key: `${input1} + ${input2} = ${plus}`}, ...data]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.container}>
      <Text>Result: {result}</Text>
      <TextInput
        style={{width: 200, borderColor: 'gray', borderWidth: 1}}
        onChangeText={text => setInput1(text)}
        value={input1}
        keyboardType="numeric"
      />
      <TextInput
        style={{width: 200, borderColor: 'gray', borderWidth: 1}}
        onChangeText={text => setInput2(text)}
        value={input2}
        keyboardType="numeric"
      />
      </View>
      <View style={styles.buttonContainer}>
          <Button color="blue" onPress={plusButton} title="+" />
          <Button color="blue" onPress={minusButton} title="-" />
          <Button color="blue" onPress={() => navigation.navigate('History', {data})} title="History" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 160,
  },
  buttonContainer: {
    flex: 2,
    width: 150,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    padding: 20,
    margin: 20,
    flexDirection: "row",
  },
});