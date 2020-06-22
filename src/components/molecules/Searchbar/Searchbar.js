import React from 'react'
import Button from '../../atoms/Button/Button'
import Searchbar from '../../atoms/Searchbar/Searchbar'
export default function Searching(props) {
    return (
        <div>
            <Searchbar onChange={props.onChange}/>
            <Button onClick={props.onClick}/>
        </div>
    )
}
