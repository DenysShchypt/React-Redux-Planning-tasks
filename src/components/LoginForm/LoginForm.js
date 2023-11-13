import React from 'react'
import { useDispatch } from 'react-redux'
import { LogIn } from 'redux/auth/operations';

export const LoginForm = () => {
    const dispatch = useDispatch();
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(LogIn({
            email: form.elements.email.value,
            password: form.elements.password.value,
        }))
        form.reset();
    }
    return (
        <form onSubmit={handleSubmit} autoComplete='off'>
            LoginForm
            <label>
                <input type='email' name='email' />
            </label>
            <label>
                <input type='password' name='password' />
            </label>
            <button type='submit'>Log In</button>
        </form>
    )
}
