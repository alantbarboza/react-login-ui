import { createContext } from "react";
import { User } from "../../types/User";
import { RequestLogin } from "../../types/RequestLogin";
import { Page } from "../../types/Page";

interface IAuthContext {
    user: User | null;
    setUser: (currentUser: User) => void;
    handleLogin: (user: RequestLogin) => {ok: boolean};
    handleSignUp: (newUser: User) => void;
    currentPage: Page;
    setCurrentPage: (page: Page) => void;
    handleSignOut: () => void;
}

export const AuthContext = createContext<IAuthContext>({
    user: { 
        name: "", 
        email: "", 
        password: "",
    },
    setUser: () => {},
    handleLogin: () => ({ok: false}),
    handleSignUp: () => ({ok: false}),
    currentPage: "login",
    setCurrentPage: () => ({}),
    handleSignOut: () => ({}),
});