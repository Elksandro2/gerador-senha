import Button from "../Button";
import Senha from "../Senha";
import Title from "../Title";
import styles from "./styles.module.css"
import useGenerater from "../../hooks/useGenerater";
import { useState } from "react";
import Input from "../Input";

export default function GeradorSenha() {
    const { password, generatePassword } = useGenerater()
    const [copyText, setCopyText] = useState("Copiar")
    const [customSize, setCustomSize] = useState(8)
    const [showInput, setShowInput] = useState(false)

    const passwordSize = showInput ? customSize : 8;

    function copyPassword() {
        if(password){
            navigator.clipboard.writeText(password)
            setCopyText("Copiado!")
        }
    }

    return (
        <div className={styles.container}>
            <Title text={"Gerador de senhas"}/>
            <div>
                <label htmlFor="showInput">Customizar o tamanho:</label>
                <input 
                    type="checkbox" 
                    id="showInput"
                    value={showInput}
                    onChange={() => setShowInput(currentState => !currentState)}
                />
            </div>
            {showInput ? (
                <div>
                <label htmlFor="passwordSize">Tamanho:</label>
                <Input 
                    passwordSize={customSize} 
                    setPasswordSize={setCustomSize}
                    typeInput={"number"}
                    idInput={"passwordSize"}
                />
            </div>
            ) : null}
            <div className={styles.buttons}>
                <Button
                    onClick={() => {
                        generatePassword(passwordSize); 
                        setCopyText("Copiar");
                    }}
                >
                    Gerar senha de {passwordSize} caracteres!
                </Button>
                <Button onClick={copyPassword}>{copyText}</Button>
            </div>
            <Senha senha={password}/>
        </div>
    )
}