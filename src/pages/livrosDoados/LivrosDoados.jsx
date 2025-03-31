import livroProtagonista from '../../assets/livroProtagonista.png'
import s from './livrosDoados.module.scss'
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function LivrosDoados() {

  const [livros,setLivros] = useState([])

  const getLivros = async()=>{
    const resposta = await axios.get("https://api-y9i9.onrender.com/livros")
    setLivros(resposta.data.livros)
  }
  console.log(livros)

  useEffect(()=>{
    getLivros()
  },[])

  return (                                                                                                             
    <section className={s.livrosDoadosSection}>
      <h2>Livros Doados</h2>
      <section className={s.containerCards}>
        <section>
          <img src={livroProtagonista} alt="Imagem do livro O Protagonista"/>
          <div>
          <h3>O Protagonista</h3>
            <p>Susane Andrade</p>
            <p>Ficção</p>
          </div>
        </section>
      </section>
    </section>
  );
}
