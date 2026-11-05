import { ErrorMessageCard } from "../../../components/ErrorMessageCard";
import { HeaderAuth } from "../../../components/Header";
import "../../../styles/SignUp.css";
import { SignUpIcon } from "./components/SignUpIcon";
import { AuthFooter } from "../../../components/AuthFooter";
import { FormGroup } from "../../../components/FormGroup";
import { useState } from "react";
import { User } from "../../../types/User";
import { useAuth } from "../../../contexts/auth/useAuth";

export function SignUpPage() {
    const [error, setError] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const { handleSignUp, setCurrentPage } = useAuth();

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setError("");

        if (!name || !email || !password || !confirmPassword) {
            return setError("Todos os campos são obrigatórios");
        }

        if (password !== confirmPassword) {
            return setError("As senhas não coincidem");
        }

        if (password.length < 6) {
            return setError("A senha deve ter pelo menos 6 caracteres");
        }

        const newUser: User = {
            name,
            email,
            password,
        };
        handleSignUp(newUser);
    }

    return (
        <div className="container">
            <form className="card" onSubmit={handleSubmit}>
                <HeaderAuth
                    title="Criar Conta"
                    subtitle="Preencha os dados para se cadastrar"
                    Icon={<SignUpIcon />}
                />
                {error && <ErrorMessageCard title={error} />}

                <FormGroup
                    inputVariant="text"
                    label="Nome"
                    placeHolder="Nome completo"
                    value={name}
                    setValue={setName}
                />

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

                <FormGroup
                    label="Confirmar Senha"
                    inputVariant="password"
                    value={confirmPassword}
                    setValue={setConfirmPassword}
                />

                <button type="submit" className="btn btn-signup">
                    Criar conta
                </button>

                <AuthFooter
                    title="Já tem conta?"
                    labelLink="Entrar"
                    onRedirect={() => setCurrentPage("login")}
                />
            </form>
        </div>
    );
}