import { useState } from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";
//1.react라이브러리에서 useState 리액트 훅을 불러옵니다.
//2.search라는 이름으로 State를 하나 생성합니다.
//3.검책 폼의 onChangeSearch를 만듭니다.
//4.검색 폼의 value로 State 변수 search를 설정합니다.
//5.검색 폼의 onChange이벤트 핸들러로 onChangeSearch로 설정합니다. 
 const TodoList = ({todo,onUpdate,onDelete})=> {
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
  return (
    <div className="TodoList">
        <h4>Todo List</h4>
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
                onUpdate={onUpdate} 
                onDelete={onDelete}
                />
            ))}
        </div>
    </div>
  );
};
export default TodoList;