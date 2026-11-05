type PropsFormGroup = {
    label: string;
    inputVariant: "email" | "password" | "text";
    placeHolder?: string;
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
}

export function FormGroup({label, inputVariant, placeHolder, value, setValue}: PropsFormGroup){
    const propsInput = {
        email: {
            type: "email",
            placeHolder: "exemplo@email.com",
        },
        password: {
            type: "password",
            placeHolder: "Digite sua senha",
        },
        text: {
            type: "text",
            placeHolder: "Digite",
        }
    };
    
    return(
        <div className="form-group">
            <label className="form-label">{label}</label>
            <input 
                value={value}
                onChange={e => setValue(e.target.value)}
                type={propsInput[inputVariant].type}
                className="form-input"
                placeholder={placeHolder || propsInput[inputVariant].placeHolder}/>
        </div>
    )
}