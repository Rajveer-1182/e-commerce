import { createContext } from "react";

export const AuthDataContext = createContext();

let serverUrl = "http://localhost:4000";

let value = {
  serverUrl,
};

function AuthContext({ children }) {
  return (
    <AuthDataContext.Provider value={value}>
      {children}
    </AuthDataContext.Provider>
  );
}

export default AuthContext;
