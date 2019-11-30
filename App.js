//import staff
import React from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';

//create staff
class App extends React.Component {
  state = {
    text: "",
    todo: []
  }
  addTodo = () => {
    var newTodo = this.state.text;
    var arr = this.state.todo;
    arr.push(newTodo);
    this.setState({ todo: arr, text: "" });
  }
  deleteTodo = (t) => {
    var arr = this.state.todo;
    var pos = arr.indexOf(t);
    arr.splice(arr, 1);
    this.setState({ todo: arr });
  }
  renderTodos = () => {
    return this.state.todo.map(t => {
      return (
        <TouchableOpacity key={t}>
          <Text
            style={styles.todo}
            onPress={() => { this.deleteTodo(t) }}
          >{t}</Text>
        </TouchableOpacity>
      )
    })
  }
  render() {
    return (
      <View style={styles.viewStyle}>
        <Text style={styles.header}>Add Your ToDo List Below</Text>
        <TextInput
          style={styles.inputStyle}
          onChangeText={(text) => this.setState({ text })}
          value={this.state.text}
        />
        <Button
          title="Add Todo"
          color="green"
          onPress={this.addTodo}
        />
        <View style={{ marginTop: 30 }} />
        {this.renderTodos()}
      </View>
    )
  }
}

const styles = {
  viewStyle: {
    marginTop: 200,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  },
  inputStyle: {
    height: 30,
    borderColor: 'green',
    borderWidth: 1,
  },
  header: {
    fontSize: 25,
    color: 'green',
    fontWeight: 'bold',
  },
  todo: {
    fontSize: 15,
    color: 'black',
  },
}

//export staff
export default App;