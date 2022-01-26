import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'
import * as AuthSession from 'expo-auth-session'
import * as WebBrowser from 'expo-web-browser'
import AsyncStorage from '@react-native-async-storage/async-storage'
/* import { AsyncStorage } from 'react-native'; */

const { CLIENT_ID } = process.env
const { REDIRECT_URI } = process.env

WebBrowser.maybeCompleteAuthSession();

interface AuthProviderProps {
  children: ReactNode;
}

interface User {
  id: string,
  given_name: string,
  family_name: string,
  email: string,
  picture: string
}

interface IAuthContextData {
  user: User
  signInWithGoogle(): Promise<void>
  Logout(): Promise<void>
}

interface AuthorizationResponse {
  params: {
    access_token: string;
  };
  type: string;
}

const AuthContext = createContext({} as IAuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>({} as User);

  async function signInWithGoogle() {
    try {
      const RESPONSE_TYPE = 'token';
      const SCOPE = encodeURI('profile email');

      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

      const { type, params } = await AuthSession
        .startAsync({ authUrl }) as AuthorizationResponse;

      if (type === 'success') {
        const response = await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${params.access_token}`);
        const userLogged = await response.json();
        setUser(userLogged)
        await AsyncStorage.setItem('@bomtempo:user', JSON.stringify(userLogged))
      }
    } catch (error) {
      throw new Error(error)
    }
  }

  async function Logout() {
    await AsyncStorage.removeItem('@bomtempo:user');
    setUser({} as User)
  }

  useEffect(() => {
    async function loadUserStorageDate() {
      const userStoraged = await AsyncStorage.getItem('@bomtempo:user');
      if (userStoraged) {
        const userLogged = JSON.parse(userStoraged) as User;
        setUser(userLogged)
      }
    }
    loadUserStorageDate()
  }, [])

  return (
    <AuthContext.Provider value={{
      user,
      signInWithGoogle,
      Logout
    }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth }
