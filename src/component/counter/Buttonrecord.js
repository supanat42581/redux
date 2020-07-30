import React from 'react'
import { connect } from 'react-redux'
import actionTypes from '../../store/actionTypes'



 function ButtonRecord(props){
const onClickrRecord = ()=>{
    props.submit(props.ctr)
    props.resetCounter()
}

        return (
            <button onClick={onClickrRecord}>
                record
            </button>
        )
    }



const mapStateToProps = (state) => {
    return{
        ctr:state.ctr.counter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        submit:(value)=>{
            dispatch({type:actionTypes.RECORD_COUNTER,number:value})
        },
        resetCounter: ()=> {
            dispatch({type:actionTypes.RESET_COUNTER}) 
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ButtonRecord)