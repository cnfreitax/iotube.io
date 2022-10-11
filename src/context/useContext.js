import React from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

const UserContext = React.createContext();

export const UserProvider = (props) => {
  const router = useRouter()
  const DEFAULT_LOGIN_USER_COOKIE = 'io_login'

  const [loggedUser, setLoggedUser] = React.useState(null)

  const loginUser = ({ email, password }) => {
    Cookies.set(DEFAULT_LOGIN_USER_COOKIE, JSON.stringify({ email, password }))
    setLoggedUser({ email, password })
    router.push('/home')
  }

  const logoutUser = () => {
    Cookies.remove(DEFAULT_LOGIN_USER_COOKIE)
    setLoggedUser()
  }

  return (
    <UserContext.Provider
      value={{ loggedUser, loginUser, logoutUser }}
    >
      {props.children}
    </UserContext.Provider>
  )
}


export const useUser = (partial) => {
  const context = React.useContext(UserContext);

  if (!context) {
    throw new Error('must be with customer provider');
  }

  return partial ? context[partial] : context;
};

export default UserContext;
