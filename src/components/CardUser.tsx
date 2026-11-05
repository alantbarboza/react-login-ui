import { User } from "../types/User";

export type PropsCardUser = {
    user: Pick<User, "name" | "email">;
};

export function CardUser(data: PropsCardUser){
    return (
        <div 
            style={{
                width: 500, 
                height: 500, 
                background: "green", 
                justifyContent: "center", 
                alignItems: "center", 
                display: "flex",
                flexDirection: "column",
                gap: 10
            }}>

            <h2 style={{color: "white"}}>Nome: {data.user.name}</h2>
            <h2 style={{color: "white"}}>Email: {data.user.email}</h2>
        </div>
    )
}