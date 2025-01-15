import styles from "./styles.module.css"

export default function Title({ text }) {
    return <h1 className={styles.title}>{text}</h1>
}