import React from "react";
import {connect} from "react-redux";

function CounterList(props){
    
return(
    <div>
        {props.ctrList.map((ctr)=>(
            <div key={Math.random()}>{ctr}</div>
        ))}
        </div>
)
}

const mapStateToProps = (state) =>{
    return{
        ctrList: state.ctrList.counterList,
    }
}
export default connect(mapStateToProps,null)(CounterList)