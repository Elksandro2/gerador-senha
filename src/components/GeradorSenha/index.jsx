import Button from "../Button";
import Senha from "../Senha";
import Title from "../Title";
import styles from "./styles.module.css"
import useGenerater from "../../hooks/useGenerater";
import { useState } from "react";

export default function GeradorSenha() {
    const { password, generatePassword } = useGenerater()
    const [copyText, setCopyText] = useState("Copiar")

    function copiarSenha() {
        if(password){
            navigator.clipboard.writeText(password)
            setCopyText("Copiado!")
        }
    }

    return (
        <div className={styles.container}>
            <Title text={"Gerador de senhas"}/>
            <div className={styles.buttons}>
                <Button
                    onClick={() => {
                        generatePassword(); 
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