import Default_button_global from "../../components/global/button /default";
import Description_texts from "../../components/global/texts/description/defualt";
import Title from "../../components/global/texts/titles/default";
import Container_Layouts from "../../layouts/container";
import styles from "./styles.module.css"

function Home_pages() {
    return (
        <Container_Layouts className={styles.container}>
            <div className={styles.column}>
                <Title text="Svelte Quiz’"/>
                <Description_texts text="Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a? "/>
                <Default_button_global text="iniciar"/>
            </div>

        </Container_Layouts>
    )
}

export default Home_pages;
