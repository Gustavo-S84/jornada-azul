



import { ReactNode } from "react";
import styles from "./styles.module.css"

interface IProps {
    children?: ReactNode | ReactNode[];
    className?: string;
}

function Menu_Layouts({ children, className }: IProps) {
    return (
        <div className={[styles.container, className].join(" ")}>
            {children}
        </div>
    )
}

export default Menu_Layouts;
