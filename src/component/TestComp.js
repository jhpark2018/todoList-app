import React, { useReducer } from 'react'

function reducer(state,action){//새로운 함수 reducer를 컴포넌트 밖에 만듭니다.
    switch(action.type){
        case "INCREASE":
            return state+action.data;
        case "DECREASE":
            return state-action.data;
        case "INIT":
            return 0;
        default:
            return state;
    }



}
export default function TestComp() {
  const [count,dispatch]=useReducer(reducer,0); 
  //state변수,상태변화 촉발함수,생성자(상태변화함수,초기값)  배열로 반환
  // useReducer를 호출해 useState처럼 State를 만들 수 있습니다.
  // 다음으로 현재의 State값을 담은 count를 페이지에 렌더링합니다.

  return (
    <div>
        <h4>테스트 컴포넌트</h4>
        <div>{count}
            {/* <bold>{count}</bold> */}
        </div>
        <div>
            <button onClick={()=>dispatch({type:"INCREASE",data:1})}>+</button>
            <button onClick={()=>dispatch({type:"DECREASE",data:1})}>-</button>
            <button onClick={()=>dispatch({type:"INIT"})}>0으로 초기화</button>
        </div>
    </div>
  )
}
