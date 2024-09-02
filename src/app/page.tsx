"use client";
import { Perguntas } from "@/data/Perguntas";
import { Pergunta } from "@/components/Pergunta";
import { useState } from "react";
import { Resultados } from "@/components/Resultados";

const Page = () => {
  const [questaoAtual, setQuestaoAtual] = useState(0);
  const [respostas, setRespostas] = useState<number[]>([])
  const [resultado, setResultado] = useState(false);
  const title = "Quiz de Culinaria"
  const carregarProximaPergunta = () =>{
    if(Perguntas[questaoAtual + 1]){
      setQuestaoAtual(questaoAtual + 1);
    } else {
      setResultado(true)
    }
  }
  const handleClick = (resposta: number) => {
    setRespostas([...respostas, resposta])
    carregarProximaPergunta();
  }
  
  const Reiniciar = () => {
    setQuestaoAtual(0);
    setRespostas([]);
    setResultado(false);
  }

  return (
    <div className="bg-blue-600 w-screen h-screen flex justify-center items-center">
      <div className="w-full max-w-xl rounded-md bg-white text-black shadow shadow-black">
        <div className="p-5 font-bold text-2xl border-b border-gray-300">{title}</div>
        <div className="p-5">
          {!resultado &&
          <Pergunta 
            p={Perguntas[questaoAtual]}
            contador={questaoAtual + 1}
            Click={handleClick}
          />}
          {resultado &&
            <Resultados questoes={Perguntas} resposta={respostas} />
          }
        </div>
      
        <div className="p-5 text-center border-t border-gray-300"> 
          {!resultado && `${questaoAtual + 1} de ${Perguntas.length} Pergunta${Perguntas.length === 1 ? "" : "s"}` }
          {resultado && 
            <button onClick={Reiniciar} className="px-3 py-2 rounded-md bg-blue-800 text-white">Reiniciar Quiz</button>
          }
        </div>
      </div>
    </div>
  )
}

export default Page;
