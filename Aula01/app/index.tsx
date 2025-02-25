import { Text, View, TextInput, Button, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Adilson </Text>
      <Text style={styles.text}> Possato </Text>
      <TextInput style={styles.input} id="input"></TextInput>
      <Button 
        title="Click me!"
        color="#f0c6c6"
        onPress={() => window.alert(getText())}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#181926',
  },

  text:{
    color: '#cad3f5',
  },

  input:{
    marginTop: '6px',
    backgroundColor: '#24273a',
    color: '#cad3f5',
    borderRadius: '10px',
    padding: '4px',
    border: '2px solid #f5bde6',
  },
});

function getText(){
  let value = document.GetElementById("input").innerHTML;
  return value;
}
