import { User } from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../../firebase";
import { ApiClient } from "../../api/client";
import { FirestoreApiClient } from "../../api/firestore";

type AuthContextData = {
  user: User;
  apiClient: ApiClient;
};

const AuthContext = createContext<AuthContextData | null>(null);

type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [data, setData] = useState<AuthContextData | null>(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      let data = null;

      if (user !== null) {
        data = {
          user,
          apiClient: new FirestoreApiClient(user),
        };
      }

      setData(data);
    });
  }, []);

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export const useAuthData = () => useContext(AuthContext);
