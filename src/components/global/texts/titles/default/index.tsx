import styles from "./styles.module.css"

interface IProps {
    text: string;
    className?: string;
}

export default function Title({ className, text }: IProps) {
    return (
        <h1 className={[className, styles.text].join(" ")}>
            {text}
        </h1>
    )
}