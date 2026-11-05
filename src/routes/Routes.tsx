import { LoginPage } from "../pages/auth/Login/Login";
import { SignUpPage } from "../pages/auth/SignUp/SignUp";
import { HomePage } from "../pages/app/Home/Home";
import { useAuth } from "../contexts/auth/useAuth";

export function Routes(){
    const { currentPage } = useAuth();

    return(
        <>
            {currentPage === "signUp" && <SignUpPage />}
            {currentPage === "login" && <LoginPage />}
            {currentPage === "home" && <HomePage />}
        </>
    )
}