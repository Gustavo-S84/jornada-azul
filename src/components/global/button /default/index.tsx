import styles from "./styles.module.css"

export interface IProps_default_button_global {
    className?: string;
    text: string;
    onClick?: () => void;
}

function Default_button_global({ text, className, onClick }: IProps_default_button_global) {
    return (
        <button onClick={onClick} className={["bg-1", "color-button", className, styles.button].join(" ")}>
            {text}
        </button>
    )
}

export default Default_button_global;
