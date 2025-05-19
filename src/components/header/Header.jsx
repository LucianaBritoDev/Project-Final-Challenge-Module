import logoLivro from '../../assets/logoLivro.png';
import search from '../../assets/search.png';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Inicio from '../../pages/inicio/Inicio.jsx';
import QueroDoar from '../../pages/queroDoar/QueroDoar.jsx';
import LivrosDoados from '../../pages/livrosDoados/LivrosDoados.jsx';
import s from './header.module.scss'

export default function Header() {
  return (
    <BrowserRouter>
      <header className={s.header}>
        <section className={s.logoHeader}>
          <img
            src={logoLivro}
            alt="Imagem com uma ilustração de um livro aberto com capa azul"
          />
          <h1>Livros Vai na Web</h1>
        </section>
        <nav className={s.navHeader}>
          <ul>
            <li>
              <Link className={s.link} to="/">Início</Link>
            </li>
            <li>
              <Link className={s.link} to="/LivrosDoados">Livros Doados</Link>
            </li>
            <li>
              <Link className={s.link} to="/QueroDoar">Quero Doar</Link>
            </li>
          </ul>
        </nav>
        <section className={s.barraDeBusca}>
          <input
            type="search"
            nome=""
            id=""
            placeholder="O que você procura?"
          />
          <button>
            <img src={search} alt="Imagem com uma ilustração de uma lupa branca" />
          </button>
        </section>
      </header>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/LivrosDoados" element={<LivrosDoados />} />
        <Route path="/QueroDoar" element={<QueroDoar />} />
      </Routes>
    </BrowserRouter>
  );
}
