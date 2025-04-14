import styles from "./styles.module.css";

interface IProps {
    className?: string;
    title?: string;
    text?: string;
}

function Card_Home({ title, text, className }: IProps) {
    return (
        <div className={[styles.container, className].join(" ")}> 
            <h4> {title ? title : "Titulo"} </h4>
            <p> {text ? text : "Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text eve"} </p>
        </div>
    )
}

export default Card_Home;