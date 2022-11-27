import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    // console.log(user)
    const handleSignOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error));
    }
    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <Link to='/' className="btn btn-ghost normal-case text-xl">Awsome Auth</Link>
                <Link className="btn btn-ghost normal-case" to='/'>Home</Link>
                <Link className="btn btn-ghost normal-case" to='/orders'>Orders</Link>
                <Link className="btn btn-ghost normal-case" to='/login'>Log In</Link>
                <Link className="btn btn-ghost normal-case" to='/register'>Register</Link>
                {user?.email && <span>Welcome,{user.email}</span>}
                {
                    user?.email ?
                        <button onClick={handleSignOut} className="btn btn-sm">sign Out</button>
                        :
                        <Link to='/login'><button className='btn btn-sm'>Sign In</button></Link>
                }
            </div>
        </div>
    );
};

export default Header;