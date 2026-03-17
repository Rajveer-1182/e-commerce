import { createContext } from "react";

export const AuthDataContext = createContext();

let serverUrl = "https://e-commerce-ipc4.onrender.com";

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
