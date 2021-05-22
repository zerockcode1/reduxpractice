

export const countReducer = (state ={count:0} , action) => {

    console.log("countReducer-------------------")

    console.log(action)

    console.log("===============================")

    if(action.type === 'INC'){
        return {count: state.count +1}
    }else if(action.type === 'DEC'){
        return {count: state.count -1}
    }

    return state
}

