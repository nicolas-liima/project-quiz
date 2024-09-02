import { Perguntas } from "@/data/Perguntas";
import { Type } from "@/types/Type";
import { useState } from "react";

type Props = {
    p: Type;
    contador:number;
    Click: (resposta: number) => void;
}

export const Pergunta = ({p,contador, Click}: Props) => {

    const [selecionada, setSelecionada] = useState<number | null>(null)

    const verifiqueQuestao = (key: number) => {
        if(selecionada === null){
            setSelecionada(key);
            setTimeout(() => {
                Click(key); 
                setSelecionada(null);
            }, 1300)
        }
    }

    return(
            <div>
                <div className="text-3xl font-bold mb-5">{contador}. {p.questao}</div>
                <div>
                    {p.opcoes.map((item, key) => (


                        <div className={`border border-blue-300 px-3 py-2 rounded-md text-lg mb-4 bg-blue-200
                            
                            ${selecionada !== null ? "cursor-auto hover:opacity-100" : "hover:opacity-60 cursor-pointer"}

                            ${selecionada !== null && selecionada === p.resposta && selecionada === key && "bg-green-600 border-green-800"} 
                            ${selecionada !== null && selecionada !== p.resposta && selecionada === key && "bg-red-600 border-red-800"} 
                            
                           
                            `}
                         key={key}
                         onClick={() => verifiqueQuestao(key)}
                        >{item}
                        </div>
                    ))}
                </div>
            </div>
    )
}