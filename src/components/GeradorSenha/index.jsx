import Button from "../Button";
import Senha from "../Senha";
import Title from "../Title";
import styles from "./styles.module.css"
import useGenerater from "../../hooks/useGenerater";
import { useState } from "react";

export default function GeradorSenha() {
    const { password, generatePassword } = useGenerater()
    const [copyText, setCopyText] = useState("Copiar")
    const [passwordSize, setPasswordSize] = useState(12)

    function copiarSenha() {
        if(password){
            navigator.clipboard.writeText(password)
            setCopyText("Copiado!")
        }
    }

    return (
        <div className={styles.container}>
            <Title text={"Gerador de senhas"}/>
            <div>
                <label htmlFor="passwordSize">Tamanho:</label>
                <input 
                    type="number" 
                    id="passwordSize" 
                    min={1} 
                    value={passwordSize}
                    onChange={(ev) => setPasswordSize(ev.target.value)}
                />
            </div>
            <div className={styles.buttons}>
                <Button
                    onClick={() => {
                        generatePassword(passwordSize); 
                        setCopyText("Copiar");
                    }}
                >
                    Gerar!
                </Button>
                <Button onClick={copiarSenha}>{copyText}</Button>
            </div>
            <Senha senha={password}/>
        </div>
    )
}