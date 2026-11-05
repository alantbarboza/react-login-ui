import { useAuth } from "../../../contexts/auth/useAuth";
import "../../../styles/global.css";
import "../../../styles/Home.css";
import { CardHome } from "./components/CardHome";
import { IconConfig } from "./components/IconConfig";
import { IconDocument } from "./components/IconDocument";
import { IconTask } from "./components/IconTask";

export function HomePage() {
    const { user, handleSignOut } = useAuth();

    const iniciais = user?.name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2);

    const optionsCard = [
        {
            id: 1,
            title: "Documentos",
            subtitle: "Gerencia seus documentos e arquivos de forma organizada.",
            icon: <IconDocument />,
        },
        {
            id: 2,
            title: "Tarefas",
            subtitle: "Acompanhe suas tarefas e matenha-se produtivo",
            icon: <IconTask />,
        },
        {
            id: 3,
            title: "Configurações",
            subtitle: "Personalize a sua experiência no sistema",
            icon: <IconConfig />,
        },
    ];

    return (
        <div className="home-container">
            <header className="home-header">
                <div className="home-logo">LOGO</div>
                <div className="home-user">
                    <div className="home-user-info">
                        <div className="home-user-name">{user?.name}</div>
                        <div className="home-user-email">{user?.email}</div>
                    </div>
                    <div className="home-avatar">{iniciais}</div>
                    <button className="btn-logout" onClick={handleSignOut}>
                        Sair
                    </button>
                </div>
            </header>

            <main className="home-content">
                <div className="home-welcome">
                    <h1>Olá, {user?.name.split(" ")[0]}!</h1>
                    <p>Seja bem-vindo ao sistema</p>
                </div>

                <div className="home-cards">
                    {optionsCard.map((option) => (
                        <CardHome
                            key={option.id}
                            icon={option.icon}
                            title={option?.title}
                            subtitle={option?.subtitle}
                        />
                    ))}
                </div>
            </main>
        </div>
    );
}