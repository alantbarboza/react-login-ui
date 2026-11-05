type PropsErrorMessageCard = {
    title: string;

}

export function ErrorMessageCard({title}: PropsErrorMessageCard){
    return <div className="error-message">{title}</div>;
}