import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from 'react-router-dom'


import React from 'react'

// const Header = (props) => { ---Using Props
    const Header = ({title, onAdd, showAdd}) => {
    const location = useLocation()

    return (
        <header className='header'>
            {/* <h1 style = {{color: 'red', backgroundColor: 'black'}}>{title}</h1> */}
            {/* <h1 style = {headingStyle}>{title}</h1>  */}
            <h1>{title}</h1>
            {location.pathname === '/' && <Button color= {showAdd ? 'red' : 'green'} text = {showAdd ? 'Close' : 'Add'} onClick ={onAdd}/>}
            {/* <Button color='red' text = "Hoopah!" />
            <Button color='orange' text = "Yep." /> */}
        
        </header>
    )
}

export default Header

Header.defaultProps ={
    title: 'Task Tracker',
}

Header.propTypes = { // how to add types and requirements to make your program more robust and add validation
    title: PropTypes.string.isRequired,
}

//CSS in JS
// const headingStyle = {
//     color: 'red', backgroundColor: 'black'
// }