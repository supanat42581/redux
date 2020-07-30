import React,{useState} from "react";
import CounterDisplay from "../component/counter/CounterDisplay";
import CounterControlPanel from "../component/counter/CounterControlPanel";
import {connect} from 'react-redux'

import CounterList from "../component/counter/CounterList";
import actionTypes from "../store/actionTypes";
import Buttonrecord from "../component/counter/Buttonrecord";


function Counter(props) {
  const [text,setText] =useState('')
 



  return (
    <div>
      <CounterDisplay counter={props.ctr} />
      <CounterControlPanel
        text="Increase"
        change={props.increase}
      />
      <CounterControlPanel
        text="Decrease"
        change={props.decrease}
      />
      <CounterControlPanel
        text="Plus"
        change={props.plus}
      />
      <CounterControlPanel
        text="Minus"
        change={props.minus}
      />
      <CounterControlPanel
        text="Clear"
        change={props.clear}
      />
      <br/>
      <Buttonrecord/>
      <br/>
      <input onChange={(e)=>{setText(Number(e.target.value))}} value={text}></input>
      <button onClick={()=>{props.submit(text)}}>submit</button>
      <CounterList />
    </div>
  );
}


const mapStateToProps = (state)=>{
  return{
    ctr: state.ctr.counter
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    increase : ()=> dispatch({type: actionTypes.INCREASE}),
    decrease : ()=> dispatch({type: actionTypes.DECREASE}),
    plus : ()=> dispatch({type: actionTypes.PLUS, value: 5}),
    minus : ()=> dispatch({type: actionTypes.MINUS, value: 5}),
    clear : ()=> dispatch({type: actionTypes.CLEAR}),
    submit : (text)=> dispatch({type: actionTypes.SUBMIT, value:text})
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Counter);
