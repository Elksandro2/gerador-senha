import { useState } from "react";

export default function useGenerater() {
    const [password, setPassword] = useState("");

    function generatePassword() {
        const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:',.<>?/`~";
        let senha = "";
    
        for (let i = 0; i < 12; i++) {
            const randomIndex = Math.floor(Math.random() * caracteres.length);
            senha += caracteres[randomIndex];
        }
    
        setPassword(senha);
    }

    return { password, generatePassword };
}