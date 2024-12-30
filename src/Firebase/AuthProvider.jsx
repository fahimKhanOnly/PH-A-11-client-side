import { createContext } from "react";

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {

  let authInfo = {

  };
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;