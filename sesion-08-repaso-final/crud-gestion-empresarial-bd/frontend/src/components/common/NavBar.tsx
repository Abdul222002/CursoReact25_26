import React from 'react'
import { useAuth } from '../../hooks/useAuth';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const { isAuthenticated ,user, logout } = useAuth();
    return (
        <nav className='bg-indigo-600 p-4 text-white flex justify-between items-center'>
            <div>
                <div>
                    <Link to='/'>Home</Link>
                    
                </div>
            </div>
        </nav>
    )

}

export default NavBar