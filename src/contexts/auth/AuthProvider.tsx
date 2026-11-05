import { ReactNode, useState } from "react";
import { AuthContext } from "./AuthContext";
import { User } from "../../types/User";
import { RequestLogin } from "../../types/RequestLogin";
import { Page } from "../../types/Page";

const STORAGE_KEY = "projetoDataBase";
const CURRENT_USER_KEY = "projetoCurrentUser"

function getStoredUsers(): User[] {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
}

function getStoredCurrentUser(): User | null{
    const stored = localStorage.getItem(CURRENT_USER_KEY);
    return stored ? JSON.parse(stored) : null;
}

function saveUsers(users: User[]) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
}

function saveCurrentUser(user: User | null) {
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
}

//provider: componente que fornece os dados para todos os filhos.
export function AuthProvider({ children }: { children: ReactNode }) {
    const [currentUser, setCurrentUser] = useState<User | null>(getStoredCurrentUser());
    const [usersDataBase, setUsersDataBase] = useState<User[]>(getStoredUsers());
    const [currentPage, setCurrentPage] = useState<Page>(() => {
        const stored = getStoredCurrentUser();
        return stored ? "home" : "login";
    });

    function handleLogin(user: RequestLogin) {
        const userVerify = usersDataBase.find(
            (u) => u.email === user.email && u.password === user.password,
        );

        if (userVerify) {
            setCurrentUser(userVerify);
            alert("Usuário autenticado!");
            setCurrentPage("home");
            saveCurrentUser(userVerify);
            return {
                ok: true,
            };
        }
        return {
            ok: false,
        };
    }

    function handleSignUp(newUser: User) {
        const findIfEmailExists = usersDataBase.find(user => user.email === newUser.email);
        if(findIfEmailExists){
            alert("E-mail existente!");
            return;
        }

        const updatedUsers = [...usersDataBase, newUser];
        setUsersDataBase(updatedUsers);
        saveUsers(updatedUsers);
        alert("Usuário criado com sucesso!");
        setCurrentPage("login");
    }

    function handleSignOut(){
        setCurrentUser(null);
        saveCurrentUser(null);
        setCurrentPage("login");
    }

    return(
        <AuthContext.Provider 
            value={{ user: currentUser, 
                     setUser: setCurrentUser,  
                     handleLogin, 
                     handleSignUp, 
                     currentPage,
                     setCurrentPage,
                     handleSignOut,
            }}>
            {children}
        </AuthContext.Provider>
    )
}