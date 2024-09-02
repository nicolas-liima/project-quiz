import { Type } from "@/types/Type"

type Props ={
    questoes: Type[];
    resposta: number[];
}

export const Resultados = ({questoes, resposta}: Props) =>{
    return(
        <div>
            {questoes.map((item, key) => (
                <div key={key} className="mb-3">
                    <div className="font-bold">{key + 1}. {item.questao}</div>
                    <span>({item.resposta === resposta[key] ? "Acertouuu" : "Errrooou"}) - </span>
                    {item.opcoes[resposta[key]]}
                </div>
            ))}
        </div>
    )
}