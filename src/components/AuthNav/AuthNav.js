import { NavLink } from "react-router-dom"

export const AuthNav = () => {
  return (
    <div>
        <NavLink to='/register'>
        Register
        </NavLink>
        <NavLink to='/Login'>
        Log In
        </NavLink>
    </div>
  )
}
