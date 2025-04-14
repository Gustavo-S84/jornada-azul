import { ReactNode } from "react";
import styles from "./styles.module.css"
import Title from "../../../components/global/texts/titles/default";
import Description_texts from "../../../components/global/texts/description/defualt";
import Default_button_global from "../../../components/global/button /default";
import { useNavigate } from "react-router";
import Card_Home from "../../../components/home/card";



function Start_Aboutus() {
    const navigate = useNavigate();


    return (
        <section className={styles.main}>
            <img className={styles.grid} src="home/14.png" alt="" />
            <img className={styles.blur} src="home/12.png" alt="" />
            

            <div className={styles.start}>
                <Title className={styles.title} text="Svelte Quiz’"/>
                <Description_texts className={styles.description} text="Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a? "/>
                
                <Default_button_global 
                    text="iniciar"
                    onClick={() => navigate("questions")}
                />
            </div>

            <div className={styles.cardList}>
                <Card_Home/>
                <Card_Home/>
                <Card_Home/>
            </div>

        </section>
    )
}

export default Start_Aboutus;
