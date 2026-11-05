import "../../../../styles/Home.css"
import { JSX } from "react"

type PropsCardHome = {
    title: string;
    subtitle: string;
    icon: JSX.Element;
};

export function CardHome({title, subtitle, icon}: PropsCardHome) {
    return (
        <div className="home-card">
            <div className="home-card-icon">{icon}</div>
            <h3>{title}</h3>
            <p>{subtitle}</p>
        </div>
    )
}