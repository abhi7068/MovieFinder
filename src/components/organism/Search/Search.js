import React, { Component } from 'react'
import Searchbar from '../../molecules/Searchbar/Searchbar'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import {searchMovie} from '../../../store/actions/action'
 class Search extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             movie:''
        }
    }
    movie=(e)=>{
   this.setState({
       movie:e.target.value
   })
   console.log("is it coming",this.state.movie)
    }
    search=()=>{
this.props.dispatch(searchMovie(this.state.movie));
this.props.history.push('/randommovie')
    }
    render() {
        return (
            <div>
                <Searchbar onChange={this.movie} onClick={this.search}/>
            </div>
        )
    }
}
export default withRouter(connect()(Search))