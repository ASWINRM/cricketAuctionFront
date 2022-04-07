
export const buyerloginreducer = (state = {}, action) => {
    switch (action.type) {
       
        case "BUYER_LOGIN_SUCCESS":
            console.log("dei")
            return ({userinfo: action.payload })
        case "BUYER_LOGOUT":
            return {}
        default:
            return state

    }
}

export const allplayerreducer = (state = {}, action) => {
    switch (action.type) {
        case "ALL_PLAYER_REQUEST":
            return ({ loading: true })
        case "ALL_PLAYER_SUCCESS":
            console.log(action.payload)
            return ({playerslist:action.payload })
        default:
            return state

    }
}