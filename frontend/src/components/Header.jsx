import React from 'react'
import { Link } from 'react-router-dom'
import {FaSignInAlt, FaSignOutAlt} from 'react-icons/fa'


const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <Link to={'/'}>GoalSetter</Link>
            </div>
            <ul>
                <li>
                    <Link to={'/login'}>
                        <FaSignInAlt /> Login
                    </Link></li>
                <li>
                    <Link to={'/register'}>
                        <FaSignOutAlt /> Register
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Header