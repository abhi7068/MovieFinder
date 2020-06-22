import React from 'react'
import Button from '@material-ui/core/Button';
export default function SearchButton(props) {
    return (
        <div>
            <Button color="primary" onClick={props.onClick}>Search</Button>
        </div>
    )
}
