import { useState,useRef } from "react";
import "./TodoEditor.css";
const TodoEditor = ({onCreate})=> {
  const [content,setContent]=useState("");
  const inputRef = useRef(); //할 일 입력 폼을 제어할 객체 inputRef를 생성합니다.
  
  const onChangeContent = (e)=>{
    setContent(e.target.value);
  };
  
  const onSubmit = () => {
    if(!content){//현재 content값이 빈 문자열이면 inputRef가 현재값(current)으로 저장한 요소에 포커스하고 종료
      inputRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  }
  
  const onKeyDown = (e)=>{
    if(e.keyCode===13){
      onSubmit();
    }
  };

  return (
    <div className='TodoEditor'>
      <h4>새로운 Todo 작성하기</h4>
      <div className="editor_wrapper">
        <input
        ref={inputRef} 
        value={content}
        onChange={onChangeContent}
        onKeyDown={onKeyDown}
        placeholder="새로운 Todo..." 
        />
        <button onClick={onSubmit}>
          추가
        </button>
      </div>
    </div>
  )
}
export default TodoEditor;
