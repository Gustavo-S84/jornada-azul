import Description_texts from "../../components/global/texts/description/defualt";
import Title from "../../components/global/texts/titles/default";
import Container_Layouts from "../../layouts/container";
import styles from "./styles.module.css";

import { data } from "./data";
import { useState } from "react";

function Questions_pages() {

    const [select, setSelect] = useState<number>(0);

    return (
        <Container_Layouts className={styles.questions}> 

            <Title text="Pergunta 1"/>
            <Description_texts className={styles.description} text="Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a? "/>
            
            <div className={styles.cards}>
                
                {data[select].responses.map(({ id, text, title, img }, key: number) => {
                    return (
                        <div 
                            key={key} 
                            className={[styles.card, "bg-1"].join(" ")}
                            // onClick={() => }
                        >   
                            <img src={img} alt="title" />

                            <div className={styles.infos}>
                                <h2 className="color-1"> {title} </h2>
                                <p className="color-1"> {text} </p>
                            </div>
                        </div>
                    )
                })}

            </div>  

            <div className={styles.progress}>
                {Array.from(Array(data.length).keys()).map((key: number) => {
                    return (
                        <div 
                            className={[styles.item, key == select && styles.select].join(" ")} 
                            key={key}
                            onClick={() => setSelect(key)}
                        >
                            {key}
                        </div>
                    )
                })
                }
            </div>
        </Container_Layouts>
    )
}

export default Questions_pages;
