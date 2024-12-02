import s from './inicio.module.scss'
import imagem1 from '../../assets/imagem1.png'
import imagem2 from '../../assets/imagem2.png'
import imagem3 from '../../assets/imagem3.png'
import imagem4 from '../../assets/imagem4.png'

export default function Inicio() {
  return (
    <main>
       <section className={s.primeiraSessaoInicio}>
      <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
    </section>
    <section className={s.porqueDoarSection}>
      <h2>Por que devo doar?</h2>
    <section className={s.cardsMotivos}>
       <section>
          <img src={imagem1} alt="Gravura indicando a importância da união."/>
          <p>Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
       </section>
       <section>
          <img src={imagem2} alt="Gravura indicando a importância da leitura."/>
          <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
       </section>
       <section>
          <img src={imagem3} alt="Gravura indicando a importância da participação."/>
          <p>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
       </section>
       <section>
          <img src={imagem4} alt="Gravura indicando a importância do aprendizado."/>
          <p>Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>
       </section>
      </section>
</section>
    </main>
  );
}