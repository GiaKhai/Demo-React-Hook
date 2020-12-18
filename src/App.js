import { useState, useEffect } from "react";
import './App.css';
import ColorBox from "./components/colorBox";
import TodoList from "./components/todolist";
import PostList from "./components/postList";
import Clock from "./components/clock";


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

  const [postList, setPostList] = useState();

  useEffect(() => {
    async function fetchPostList() {
      try {
        const requestUrl =
          "https://js-post-api.herokuapp.com/api/post?_limit=10&_page=1";
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        console.log({ responseJSON });
        const { data } = responseJSON;
        setPostList(data);
        
      } catch (error) {
        console.log('Failed',error.message);
      }
    }
    fetchPostList();
  },[]);

  function handleTodoClick(todo) {
    console.log(todo);
    const index = todoList.findIndex(x => x.id = todo.id);
    if (index < 0) return;

    const newTodolist = [...todoList];
    newTodolist.splice(index, 1);
    setTodoList(newTodolist);
  }
  return (
    <div className="App">
      <TodoList todo= {todoList} onTodoClick={handleTodoClick} />
      <ColorBox />

      <PostList posts={postList} />
      <Clock />
    </div>
  );
}

export default App;
