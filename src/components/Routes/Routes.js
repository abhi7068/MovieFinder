import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'
import Movie from '../pages/Movies/Movie'
import Search from '../pages/SearchPage/Search'
export default class Routes extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/randommovie" component={Movie}></Route>
                    <Route exact path='/' component={Search}></Route>
                </Switch>
            </div>
        )
    }
}
