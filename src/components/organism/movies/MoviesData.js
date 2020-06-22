import React, { Component } from 'react'
import Movie from '../../molecules/Movie/index'
import {connect} from 'react-redux'
import {getMovie} from '../../../store/actions/action'

 class MoviesData extends Component {
    /*  componentDidMount(){
    this.props.dispatch(getMovie());
     } */

    render() {
        if(this.props.error){
            return(
                <p>Error</p>
            )

        }
        if(this.props.loading){
            return(
                <p>Loading...</p>
            )

        }
        const data=this.props.showMovies;
        console.log('gdgd',data)
        return (
            <>
            {
                  data.map((element,i)=>{
                    return(
                        <Movie details={element} key={i}/>
                    )
                })
            }
            </>
        )
    }
}
const mapStateToProps=(state)=>{
    console.log("see data",state.movieData[0])
    return{
        showMovies:state.movieData[0],
        error:state.error,
        loading:state.isLoading,
    }
    
}
export default connect(mapStateToProps)(MoviesData)