import React, {Component, component} from 'react'

// this is the Nav component 
export default class Nav extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Contact</a></li>
                </ul>
            </nav>
        )
    }
}