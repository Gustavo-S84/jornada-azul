import styles from "./styles.module.css";

interface IProps {
    className?: string;
    text: string;
}

function Description_texts({ text, className }: IProps) {
    return (
        <p className={[styles.description, className].join(" ")}> 
            {text}
        </p>
    )
}

export default Description_texts;