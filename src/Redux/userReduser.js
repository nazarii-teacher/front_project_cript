const AUTO = 'AUTO';
const UPPDATE = 'UPPDATE'
const initialState = {

}

const userReduser = (state = initialState, action) => {
    switch (action.type) {
        case AUTO:
            return state
        case UPPDATE:
            return state
        default:
            return state
    }
}


export { userReduser}