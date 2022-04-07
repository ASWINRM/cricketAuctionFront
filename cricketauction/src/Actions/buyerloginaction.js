import axios from 'axios'

export const buyerlogin = (email, firstname, history) => async (dispatch) => {
    
  
        let res=await axios.post("http://localhost:5000/buyers/login",{email:email,firstname:firstname})
      if (res) {
          console.log(res);
          dispatch({ type: "BUYER_LOGIN_SUCCESS", payload: res.data })
          history.push("/allplayers");
       }
   
      
}
    
export const allplayersaction = () => async (dispatch) => {
    
    dispatch({ type: "ALL_PLAYER_REQUEST" })
    
    let res = await axios.get("http://localhost:5000/players/playerdetails")
      
    if (res) {
        console.log(res);
        dispatch({type:"ALL_PLAYER_SUCCESS",payload: res.data})
    }
}