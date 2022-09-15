import streams from "../apis/streams";
import history from "../history";



export const SignIn = (userId) => {
    return {
        type: 'SIGN_IN',
        payload: userId
    };
}

export const SignOut = () => {
    return {
        type: 'SIGN_OUT'
    };
}

//CREATE
export const createStream = (formValues) => async (dispatch, getState) => {
    const {userId} = getState().auth; //GETTING THE USERID FROM getSTATE auth
    const response = await streams.post('/streams', {...formValues, userId});
    dispatch({type: 'CREATE_STREAM', payload : response.data});

    //PERFORM PROGRAMMATIC NAVIGATION TO GET USER BACK TO ROOT ROUTE
    history.push('/streams/show');
    

}

//FETCH LIST OF STREAM
export const fetchStreams = () => async (dispatch) =>{
    const response = await streams.get('/streams');
    dispatch({type : 'FETCH_STREAMS', payload : response.data});
}

//SINGLE STREAM
export const fetchStream = (id) => async (dispatch) => {
    const response = await streams.get('/streams/' + id);
    dispatch({ type: 'FETCH_STREAM', payload : response.data});
    
    
} 

//UPDATE
export const updateStream = (id , formValues) => async (dispatch ) => {
    const response = await streams.patch('/streams/' + id, formValues);
    dispatch({type: 'UPDATE_STREAM', payload : response.data});
    history.push('/streams/show');

}

//DELETE
export const deleteStream = (id) => async(dispatch) => {
    await streams.delete('/streams/'+ id);
    dispatch({type: 'DELETE_STREAM', payload : id});
    history.push('/streams/show');
}