import { useState ,useRef } from 'react';
import './App.css';
import Header from './component/Header';
import TodoEditor from './component/TodoEditor';
import TodoList from './component/TodoList';
import TestComp from './component/TestComp';

const mockTodo = [//3개의 객체를 저장하는 배열 목 데이터를 만듭니다. 이 배열에 저장된 객체는 각각 다른 할 일 아이템
{
  id: 0,
  isDone:false,
  content:"React 공부하기",
  createdDate:new Date().getTime(),
},
{
  id: 1,
  isDone:false,
  content:"빨래 널기",
  createdDate:new Date().getTime(),
},
{
  id: 2,
  isDone:false,
  content:"노래 연습하기",
  createdDate:new Date().getTime(),
},
];

function App() {
  const [todo,setTodo] = useState(mockTodo);
  const idRef = useRef(3);
  const onCreate = (content)=>{
    const newItem = {
      id: idRef.current ,
      content,
      isDone:false,
      createdDate: new Date().getTime(),
    };
    setTodo([newItem,...todo]);
    idRef.current += 1;
  }
  const onUpdate = (targetId)=>{
    setTodo(
      todo.map(
        (it)=>{
          if(it.id===targetId){
            return{
              ...it,
              isDone: !it.isDone,
            };
          }else{
            return it;
          }
        }
      )
    );
  };
  
  const onDelete = (targetId)=>{
    setTodo(todo.filter((it)=>it.id!==targetId));
  };

  return (
    <div className="App">
      <TestComp />
      <Header />
      <TodoEditor onCreate={onCreate} />
      <TodoList todo = {todo} onUpdate={onUpdate} onDelete={onDelete}/>
    </div>
  );
}
export default App;
