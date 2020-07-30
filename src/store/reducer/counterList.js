import actionTypes from "../actionTypes";


const initialState = {
    counterList:[]
}

const counterListReducer = (state = initialState, action) => {
  
    switch (action.type) {
        
        case actionTypes.RECORD_COUNTER:
            console.log(action.number)
            return {
             ...state,
           counterList : [...state.counterList, action.number]
                }
            
    }
   

    return state;
}


export default counterListReducer;