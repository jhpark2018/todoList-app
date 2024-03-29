import React, { useMemo } from 'react';
import { useRef, useReducer, useCallback } from 'react';
import './App.css';
import Header from './component/Header';
import TodoEditor from './component/TodoEditor';
import TodoList from './component/TodoList';
// import TestComp from './component/TestComp';

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

function reducer(state,action){
  //상태변화코드
  switch(action.type){
    case "CREATE": {
      return [action.newItem,...state];
    }
    case "UPDATE":{
      return state.map((it)=>
        it.id===action.targetId
        ? {
          ...it,
          isDone:!it.isDone,
          }
          : it
      );
    }
    case "DELETE":{
      return state.filter((it)=>it.id!==action.targetId);
    }
    default:
    return state;
  }
}
export const TodoContext = React.createContext();
//createContext를 호출해 TodoContext를 만듭니다. 
//아직 이 Context의 기본값으로 설정한 값이 없으므로 인수는 생략합니다.
//Context는 반드시 컴포넌트 밖에서 생성해야 한다는 점에 유의
export const TodoStateContext = React.createContext();
export const TodoDispatchContext = React.createContext();
function App() {
  const [todo,dispatch]=useReducer(reducer,mockTodo);
  // const [todo,setTodo] = useState(mockTodo);
  const idRef = useRef(3);
  const onCreate = (content)=>{
    dispatch({
      type:"CREATE",
      newItem : {
        id: idRef.current ,
        content,
        isDone:false,
        createdDate: new Date().getTime(),
      },
    });
    idRef.current += 1;
  };
  // const onUpdate = (targetId)=>{
  //   dispatch({
  //     type:"UPDATE",
  //     targetId,
  //   });
  // };
  const onUpdate =useCallback((targetId)=>{
    dispatch({
      type:"UPDATE",
      targetId,
    });
  },[]);
  
  // const onDelete = (targetId)=>{
  //   dispatch({
  //     type:"DELETE",
  //     targetId,
  //   });
  // };
  const onDelete = useCallback ((targetId)=>{
    dispatch({
      type:"DELETE",
      targetId,
    });
  },[]);

  const memoizedDispatches = useMemo(()=>{
    return { onCreate, onUpdate, onDelete };
  },[]);

  return (
    <div className="App">
      {/* <TestComp /> */}
      <Header />
      {/* <TodoContext.Provider value={{todo}}> */}
      <TodoStateContext.Provider value={{todo}}>
        {/* 값을 전달하기 위해 Props(value)를 객체로 설정 
        이 객체에는 Context에 소속된 컴포넌트에 공급할 모든 값을 담습니다. */}
        {/* <TodoDispatchContext.Provider value={{onCreate,onUpdate,onDelete}}> */}
        <TodoDispatchContext.Provider value={memoizedDispatches}>
          <TodoEditor />
          <TodoList />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
}
export default App;
