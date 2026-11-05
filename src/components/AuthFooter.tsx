type PropsAuthFooter = {
    title: string;
    labelLink: string;
    onRedirect: () => void;
}

export function AuthFooter({title, labelLink, onRedirect}: PropsAuthFooter){
    return (
        <div className="auth-footer text-center">
            <p onClick={onRedirect}>
                {title + ' '}<span className="link">{labelLink}</span>
            </p>
        </div>
    )
}