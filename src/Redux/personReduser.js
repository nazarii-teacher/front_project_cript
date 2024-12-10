const USER_DATA = 'USER_DATA'


const initialState = {

}



const personReduser = (state = initialState, action) => {
    switch (action.type) {
        case USER_DATA:
            return {
                ...state,
                ...action.data,
                auth: true,
            }
        default:
            return state
    }
}
const userDataAC = (data) => ({
    type: USER_DATA,
    data:data
})

export { personReduser, userDataAC }