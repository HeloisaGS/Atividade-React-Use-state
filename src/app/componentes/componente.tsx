"use client"
import Image from 'next/image.js';
import { useState } from 'react';
//Criando uma lista
const obraArte =[
    {
        nome:"A persistência da memória" ,
        artista:"Salvador Dalí",
        obra:"/imagens/a-persistencia-da-memoria.jpg",
    },
    {
        nome:"Moça com brinco de pérola" ,
        artista:"Johannes Vermeer",
        obra:"/imagens/moca-com-brinco-perola.jpg",
    },
    {
        nome:"Mona Lisa" ,
        artista:"Leonardo da Vinci",
        obra:"/imagens/monalisa.jpg",
    },
    {
        nome:"A noite estrelada" ,
        artista:"Vincent an Gogh",
        obra:"/imagens/noite-estrelada.jpg",
    },
    {
        nome:"O grito" ,
        artista:"Edvard Munch",
        obra:"/imagens/o-grito.jpg",
    },
]

//implementando o Hook use State
export default function ObrasDeArte() {
    const [index, setIndex] = useState(0);

  function handleNextClick() {
    setIndex(index + 1);
  }
  function handlePrevClick() {
    setIndex(index - 1);
  }

  let arte = obraArte[index];
  return (
    <>
      <button onClick={handlePrevClick}>
        &lsaquo;	
      </button>
      <div className='obra-de-arte'>
        <h2>
            Obra de arte: {arte.nome} 
        </h2>
        <h3>  
            Artista: {arte.artista}
        </h3>
        <img 
            src={arte.obra} 
            alt={arte.nome}
        />
        <p>(Obra de número {index + 1} de {obraArte.length})</p>
      </div>
      <button onClick={handleNextClick}>
        &rsaquo;
      </button>
      
      
      
    </>
  );
}

  