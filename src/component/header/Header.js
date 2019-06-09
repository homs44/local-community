import React, { Component } from 'react'
import { Link } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <div>
                <Link to="/">home</Link>
                <Link to="/signin">signin</Link>
                <Link to="/signup">signup</Link>
            </div>
        )
    }
}

export default Header;