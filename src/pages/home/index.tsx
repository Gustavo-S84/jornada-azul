import { useNavigate } from "react-router";
import Default_button_global from "../../components/global/button /default";
import Description_texts from "../../components/global/texts/description/defualt";
import Title from "../../components/global/texts/titles/default";
import Container_Layouts from "../../layouts/global/container";
import Menu_Layouts from "../../layouts/home/header";
import styles from "./styles.module.css"
import Card_Home from "../../components/home/card";
import Menu_Aboutus from "../../layouts/home/aboutus";
import Start_Aboutus from "../../layouts/home/start";

function Home_pages() {
    const navigate = useNavigate();

    return (
        <Container_Layouts className={styles.container}>
            <Menu_Layouts/>
            <Start_Aboutus/>
            <Menu_Aboutus/>       
        </Container_Layouts>
    )
}

export default Home_pages;
