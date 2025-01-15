import  "./styles.module.css"

import PropTypes from "prop-types"

Input.propTypes = {
    passwordSize: PropTypes.number.isRequired,
    setPasswordSize: PropTypes.func,
    typeInput: PropTypes.string.isRequired,
    idInput: PropTypes.string
}

export default function Input({ passwordSize, setPasswordSize, typeInput, idInput }) {
    return (
        <input 
            type={typeInput}
            id={idInput}
            min={1} 
            value={passwordSize}
            onChange={(ev) => setPasswordSize(+ev.target.value)}
        />
    )
}