import { ReactNode } from "react";
import styles from "./styles.module.css"



function Menu_Aboutus() {
    return (
        <section className={styles.container}>
            <div className={styles.row}>
                <div className={styles.column}>
                    <h2 className={styles.title}>Sobre</h2>
                    
                    <p className={styles.description}>Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a?</p>
                    <p className={styles.description}>Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a?</p>
                </div>

                <div className={styles.column}>
                    <img className={styles.image} src="home/15.png" alt="" />
                </div>
            </div>
        </section>
    )
}

export default Menu_Aboutus;
