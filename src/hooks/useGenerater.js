import { useState } from "react";

export default function useGenerater() {
    const [password, setPassword] = useState("");

    function generatePassword(passwordSize) {
        const characteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:',.<>?/`~";
        let senha = "";
    
        for (let i = 0; i < passwordSize; i++) {
            const randomIndex = Math.floor(Math.random() * characteres.length);
            senha += characteres[randomIndex];
        }
    
        setPassword(senha);
    }

    return { password, generatePassword };
}