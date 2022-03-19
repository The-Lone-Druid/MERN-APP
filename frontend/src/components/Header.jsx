import React from 'react'
import { Link } from 'react-router-dom'
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user } = useSelector(state => state.auth)

    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }

    return (
        <div className="header">
            <div className="logo">
                <Link to={'/'}>GoalSetter</Link>
            </div>
            <ul>
                {user ? (
                    <>
                        <li>
                            <button className="btn" onClick={onLogout}>
                                <FaSignOutAlt /> Logout
                            </button>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <Link to={'/login'}>
                                <FaSignInAlt /> Login
                            </Link>
                        </li>
                        <li>
                            <Link to={'/register'}>
                                <FaSignOutAlt /> Register
                            </Link>
                        </li>
                    </>
                )}
            </ul>
        </div>
    )
}

export default Header