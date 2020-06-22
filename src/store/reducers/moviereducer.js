const initialState={
    movieData:[],
    error:false,
    isLoading:true,
}
const movieReducer=(state=initialState, action)=>{
    switch(action.type){
        case "GET_MOVIES":
            return{
                ...state,
                movieData:[...state.movieData,action.movies],
                isLoading:false
            }
            case "ERROR":{
                return{
                    ...state,
                    error:action.set
                }
            }
            default: return state;
    }
}
export default movieReducer;