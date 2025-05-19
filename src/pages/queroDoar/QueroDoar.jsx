import iconeLivroForm from "../../assets/iconeLivroForm.png";
import s from "./queroDoar.module.scss";
import { useState } from "react";
import axios from "axios";

export default function QueroDoar() {
  const [formData, setFormData] = useState({
    titulo: "",
    categoria: "",
    autor: "",
    image_url: ""
  });
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState("");

  const categorias = [
    "Literatura Brasileira",
    "Literatura Estrangeira",
    "Romance",
    "Ficção Científica",
    "Fantasia",
    "Biografia",
    "História",
    "Filosofia",
    "Autoajuda",
    "Infantil",
    "Juvenil",
    "Didático",
    "Outros"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      // Validar campos
      if (!formData.titulo || !formData.categoria || !formData.autor || !formData.image_url) {
        setError("Por favor, preencha todos os campos");
        return;
      }

      console.log("Enviando dados:", formData);
      
      const response = await axios({
        method: 'post',
        url: 'https://api-y9i9.onrender.com/livros',
        data: formData,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });

      console.log("Resposta da API:", response.data);
      
      if (response.status === 201 || response.status === 200) {
        setShowModal(true);
        // Limpar o formulário
        setFormData({
          titulo: "",
          categoria: "",
          autor: "",
          image_url: ""
        });
      }
    } catch (error) {
      console.error("Erro detalhado:", error);
      if (error.response) {
        setError(
          `Erro ao enviar os dados: ` +
          (typeof error.response.data === 'object'
            ? JSON.stringify(error.response.data)
            : error.response.data || 'Erro no servidor')
        );
      } else if (error.request) {
        setError("Não foi possível conectar ao servidor. Verifique sua conexão.");
      } else {
        setError("Erro ao processar a requisição. Tente novamente.");
      }
    }
  };

  return (
    <section className={s.queroDoarSection}>
      <p>
        Por favor, preencha o formulário com as informações do livro que deseja doar.
      </p>
      <form onSubmit={handleSubmit}>
        <div>
          <img src={iconeLivroForm} alt="Ícone de livro" />
          <h2>Informações do Livro</h2>
        </div>
        
        {error && <p className={s.errorMessage}>{error}</p>}
        
        <div className={s.inputGroup}>
          <label htmlFor="titulo">Título do Livro</label>
          <input
            type="text"
            id="titulo"
            name="titulo"
            value={formData.titulo}
            onChange={handleChange}
            placeholder="Digite o título do livro"
            required
          />
        </div>

        <div className={s.inputGroup}>
          <label htmlFor="categoria">Categoria</label>
          <select
            id="categoria"
            name="categoria"
            value={formData.categoria}
            onChange={handleChange}
            required
          >
            <option value="">Selecione a categoria</option>
            {categorias.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div className={s.inputGroup}>
          <label htmlFor="autor">Autor</label>
          <input
            type="text"
            id="autor"
            name="autor"
            value={formData.autor}
            onChange={handleChange}
            placeholder="Digite o nome do autor"
            required
          />
        </div>

        <div className={s.inputGroup}>
          <label htmlFor="image_url">Link da Imagem</label>
          <input
            type="text"
            id="image_url"
            name="image_url"
            value={formData.image_url}
            onChange={handleChange}
            placeholder="Cole o link da imagem do livro"
            required
          />
        </div>

        <button type="submit" className={s.buttonDoar}>
          Doar
        </button>
      </form>

      {showModal && (
        <div className={s.modal}>
          <div className={s.modalContent}>
            <h3>Doação Realizada com Sucesso!</h3>
            <p>Obrigado por contribuir com nossa biblioteca.</p>
            <p>Seu livro foi cadastrado e estará disponível em breve.</p>
            <button onClick={() => setShowModal(false)}>Fechar</button>
          </div>
        </div>
      )}
    </section>
  );
}
