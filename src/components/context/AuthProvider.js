import { createContext, useContext } from "react";

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

function AuthProvider({ children, authService }) {
  const signin = () => authService.signin.bind(authService);
  const signup = () => authService.signup.bind(authService);
  const logout = () => authService.signin.bind(authService);

  return (
    <>
      <AuthContext.Provider value={{ signin, signup, logout }}>
        {children}
      </AuthContext.Provider>
    </>
  );
}

export default AuthProvider;
