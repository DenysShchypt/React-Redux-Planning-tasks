import { useAuth } from 'hooks/useAuth';
import React from 'react'
import { useDispatch } from 'react-redux'
import { LogOut } from 'redux/auth/operations';

export const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();
    return (
        <div>UserMenu
            <p>Welcome, {user.name}</p>
            <button type='button' onClick={() => dispatch(LogOut())}>Logout</button>
        </div>
    );
};
