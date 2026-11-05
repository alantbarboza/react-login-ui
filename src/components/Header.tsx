type Props = {
    title: string;
    subtitle: string;
    Icon: React.ReactNode;
};

export function HeaderAuth({title, subtitle, Icon}: Props){
    return (
        <>
            {Icon}
            <h1 className="card-title">{title}</h1>
            <h1 className="card-subtitle">{subtitle}</h1>
        </>
    )
}