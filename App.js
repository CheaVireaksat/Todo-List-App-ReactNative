//import staff
import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

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
  renderTodos = () => {
    return this.state.todo.map(t => {
      return (
        <Text
          key={t}
          onPress={this.deleteTodo}
        >{t}</Text>
      )
    })
  }
  render() {
    return (
      <View style={styles.viewStyle}>
        <Text>Please Input Todo List Below</Text>
        <TextInput
          style={styles.inputStyle}
          onChangeText={(text) => this.setState({ text })}
          value={this.state.text}
        />
        <Button
          title="Add Todo"
          onPress={this.addTodo}
        />
        {this.renderTodos()}
      </View>
    )
  }
}

const styles = {
  viewStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputStyle: {
    height: 30,
    borderColor: 'black',
    borderWidth: 1,
  }
}

//export staff
export default App;