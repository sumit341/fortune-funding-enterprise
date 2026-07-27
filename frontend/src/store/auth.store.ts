import { create } from "zustand";


interface User {

  id:string;

  name:string;

  email:string;

  role:
    | "user"
    | "admin";

}



interface AuthState {


  user:
    | User
    | null;


  accessToken:
    | string
    | null;


  refreshToken:
    | string
    | null;


  isAuthenticated:boolean;



  login:

    (
      user:User,
      accessToken:string,
      refreshToken:string
    ) => void;



  logout:
    () => void;


}




export const useAuthStore =
create<AuthState>((set)=>({


  user:null,


  accessToken:
    localStorage.getItem(
      "accessToken"
    ),



  refreshToken:
    localStorage.getItem(
      "refreshToken"
    ),



  isAuthenticated:
    !!localStorage.getItem(
      "accessToken"
    ),




  login:

  (
    user,
    accessToken,
    refreshToken

  )=>{


    localStorage.setItem(
      "accessToken",
      accessToken
    );


    localStorage.setItem(
      "refreshToken",
      refreshToken
    );



    set({

      user,

      accessToken,

      refreshToken,

      isAuthenticated:true,

    });


  },





  logout:()=>{


    localStorage.removeItem(
      "accessToken"
    );


    localStorage.removeItem(
      "refreshToken"
    );



    set({

      user:null,

      accessToken:null,

      refreshToken:null,

      isAuthenticated:false,

    });


  }



}));