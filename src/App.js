import { useState } from 'react';
import './App.css';
import ColorBox from "./components/colorBox";
import TodoList from "./components/todolist";


function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, content: "Hello Tai9" },
    { id: 2, content: "Hello Tai8" },
    { id: 3, content: "Hello Tai7" },
    { id: 4, content: "Hello Tai6" },
    { id: 5, content: "Hello Tai5" },
    { id: 6, content: "Hello Tai4" },
    { id: 7, content: "Hello Tai3" },
  ]);
  return (
    <div className="App">
      <TodoList todo= {todoList} />
      <ColorBox />
    </div>
  );
}

export default App;
