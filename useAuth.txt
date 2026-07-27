import { useAuthStore } from "../store/auth.store";


export default function useAuth() {

  const user =
    useAuthStore(
      (state) => state.user
    );


  const accessToken =
    useAuthStore(
      (state) => state.accessToken
    );


  const isAuthenticated =
    useAuthStore(
      (state) => state.isAuthenticated
    );


  const logout =
    useAuthStore(
      (state) => state.logout
    );



  return {

    user,

    accessToken,

    isAuthenticated,

    logout,

  };

}