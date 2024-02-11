import { useState,useContext } from "react";
// import { useMemo } from "react";
// import { TodoContext } from "../App";
import TodoItem from "./TodoItem";
import "./TodoList.css";
import { TodoStateContext } from "../App";

//1.react라이브러리에서 useState 리액트 훅을 불러옵니다.
//2.search라는 이름으로 State를 하나 생성합니다.
//3.검책 폼의 onChangeSearch를 만듭니다.
//4.검색 폼의 value로 State 변수 search를 설정합니다.
//5.검색 폼의 onChange이벤트 핸들러로 onChangeSearch로 설정합니다. 
 const TodoList = () => {
    // const {todo}=useContext(TodoContext);
    const {todo} = useContext(TodoStateContext);
    console.log(todo);
    // const storeData = useContext(TodoContext);
    // console.log(storeData);
    const [search,setSearch]=useState("");
    const onChangeSearch=(e)=>{ 
        setSearch(e.target.value);
    };
    const getSearchResult = ()=>{
        return search ===""
        ? todo
        : todo.filter((it)=>
        it.content.toLowerCase().includes(search.toLowerCase())
        );
    };
    // const analyzeTodo = useMemo(() => {
    //     console.log("analyzeTodo 함수 호출");
    //     const totalCount = todo.length;
    //     const doneCount = todo.filter((it)=>it.isDone).length;
    //     const notDoneCount = totalCount-doneCount;
    //     return{
    //         totalCount,
    //         doneCount,
    //         notDoneCount
    //     };
    //   },[todo]);

    // const { totalCount, doneCount, notDoneCount } = analyzeTodo;

  return (
    <div className="TodoList">
        <h4>Todo List</h4>
        {/* <div>
            <div>총개수:{totalCount}</div>
            <div>완료된 할 일:{doneCount}</div>
            <div>아직 완료하지 못한 할 일:{notDoneCount}</div>
        </div> */}
        <input 
        value={search}
        onChange={onChangeSearch} 
        className="searchbar" 
        placeholder="검색어를 입력하세요" 
        />
        <div className="list_wrapper">
            {/* {todo.map((it)=>(
                // <div>{it.content}</div>
                <TodoItem key={it.id}{...it} />
            ))} */}
            {/* {getSearchResult().map((it)=>(
                <TodoItem key={it.id}{...it} />
            ))} */}
            {/* {getSearchResult().map((it)=>(
                <TodoItem key={it.id}{...it} onUpdate={onUpdate}/>
            ))} */}
            {getSearchResult().map((it)=>(
                <TodoItem 
                key={it.id}
                {...it} 
                />
            ))}
        </div>
    </div>
  );
};
TodoList.defaultProps = {
    todo:[],
};

export default TodoList;