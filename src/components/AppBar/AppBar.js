import { useAuth } from 'hooks';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Navigation } from 'components/Navigation/Navigation';
import { AuthNav } from 'components/AuthNav/AuthNav';

export const AppBar = () => {
const{isLoggedIn}= useAuth();
return(
  <header>
    <Navigation/>
    {isLoggedIn?<UserMenu/>:<AuthNav/>}
  </header>
)

};