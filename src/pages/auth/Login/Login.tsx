import "../../../styles/Login.css";
import { HeaderAuth } from "../../../components/Header";
import { LoginIcon } from "./components/LoginIcon";
import { ErrorMessageCard } from "../../../components/ErrorMessageCard";
import { AuthFooter } from "../../../components/AuthFooter";
import { FormGroup } from "../../../components/FormGroup";
import { useState } from "react";
import { useAuth } from "../../../contexts/auth/useAuth"

export function LoginPage() {
    const [error, setError] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { handleLogin, setCurrentPage } = useAuth();

    function handleSubmit() {
        setError("");
        if (!email || !password) {
            return setError("Preencha todos os dados!");
        }

        const user = {
            email,
            password,
        }

        const { ok } = handleLogin(user);
        if (!ok) {
            setError("Email ou senha incorretas");
        }
    }

    return (
        <div className="container">
            <div className="card">
                <HeaderAuth
                    title="Bem vindo!"
                    subtitle="Informe suas credenciais."
                    Icon={<LoginIcon />}
                />

                {error && <ErrorMessageCard title={error} />}

                <FormGroup
                    label="Email"
                    inputVariant="email"
                    value={email}
                    setValue={setEmail}
                />

                <FormGroup
                    label="Senha"
                    inputVariant="password"
                    value={password}
                    setValue={setPassword}
                />

                <button
                    onClick={handleSubmit}
                    className="btn btn-primary"
                    style={{ marginTop: 20 }}
                >
                    Entrar
                </button>

                <AuthFooter
                    title="Não tem conta?"
                    labelLink="Cadastre-se"
                    onRedirect={() => setCurrentPage("signUp")}
                />
            </div>
        </div>
    );
}