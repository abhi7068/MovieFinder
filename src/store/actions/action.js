
import axios from 'axios'
export const getMovie=()=>{
    return(dispatch)=>{
        return axios.get("https://api.themoviedb.org/3/movie/550?api_key=faa9a363bbee5ad703264d327b01e794")
        .then(res=>{
            dispatch(getMovieDetails(res.data))
        })
        .catch(err=>{
            dispatch(getError())
        })
    }

}
export const getMovieDetails=(details)=>{
    return{
        type:"GET_MOVIES",
        movies:details
    }
}
export const getError=()=>{
    return{
        type:"ERROR",
        set:true
    }
}

export const searchMovie=(moviename)=>{
    return(dispatch)=>{
        return axios.get("https://api.themoviedb.org/3/search/movie?api_key=faa9a363bbee5ad703264d327b01e794&page&query="+moviename)
        .then(res=>{
            dispatch(getMovieDetails(res.data.results))
        })
        .catch(err=>{
            dispatch(getError())
        })
    }

}