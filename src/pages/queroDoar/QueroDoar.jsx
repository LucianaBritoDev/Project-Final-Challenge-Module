import iconeLivroForm from "../../assets/iconeLivroForm.png";
import s from "./queroDoar.module.scss";
import { useState } from "react";
import axios from "axios";

export default function QueroDoar() {
  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [autor, setAutor] = useState("");
  const [image_url, setImage_url] = useState("");

  const capturaTitulo = (e) => {
    setTitulo(e.target.value);
  };

  const capturaCategoria = (e) => {
    setCategoria(e.target.value);
  };

  const capturaAutor = (e) => {
    setAutor(e.target.value);
  };

  const capturaImg = (e) => {
    setImage_url(e.target.value);
  };

  const envioDados = async () => {
    const dadosParaEnviar = {
      titulo,
      categoria,
      autor,
      image_url,
    };
    await axios.post("https://api-1-snqf.onrender.com/livros", dadosParaEnviar);
  alert("Seu livro foi cadastrado com sucesso!")
  };

  return (
    <section className={s.queroDoarSection}>
      <p>
        Por favor, preencha o formulário com as suas informações e as
        informações do livro.
      </p>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <img src={iconeLivroForm} alt="Imagem com icone de um livro aberto" />
          <h2>Informações do Livro</h2>
        </div>
        <input
          type="text"
          name=""
          id=""
          placeholder="Título"
          onChange={capturaTitulo}
        required/>
        <input
          type="text"
          name=""
          id=""
          placeholder="Categoria"
          onChange={capturaCategoria}
        required/>
        <input
          type="text"
          name=""
          id=""
          placeholder="Autor"
          onChange={capturaAutor}
        required/>
        <input
          type="text"
          name=""
          id=""
          placeholder="Link da Imagem"
          onChange={capturaImg}
        required/>
        <input
          type="submit"
          value="Doar"
          className={s.buttonDoar}
          onClick={envioDados}
        />
      </form>
    </section>
  );
}
