import { useState, FormEvent, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import './cadastroLivro.css';

export default function CadastroLivro() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        id: "",
        titulo: "",
        autor: "",
        editora: "",
        sinopse: "",
        preco: "",
        imagem: ""
    });

    // Função para atualizar os campos do formulário
    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    // Função para enviar o formulário
    async function handleSubmit(event: FormEvent) {
        event.preventDefault();
        
        try {
            const response = await fetch("https://one022b-marketplace-d6hb.onrender.com/livros", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                alert("Livro cadastrado com sucesso!");
                navigate("/");  // Redirecionando para a página inicial
            } else {
                alert("Falha ao cadastrar livro.");
            }
        } catch (error) {
            console.error("Erro ao cadastrar livro:", error);
            alert("Erro de servidor.");
        }
    }

    return (
        <div className="cadastro-livro-container">
            <h1>Cadastro de Livro</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="id">ID do Livro:</label>
                    <input
                        type="text"
                        name="id"
                        value={formData.id}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="titulo">Título:</label>
                    <input
                        type="text"
                        name="titulo"
                        value={formData.titulo}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="autor">Autor:</label>
                    <input
                        type="text"
                        name="autor"
                        value={formData.autor}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="editora">Editora:</label>
                    <input
                        type="text"
                        name="editora"
                        value={formData.editora}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="sinopse">Sinopse:</label>
                    <input
                        type="text"
                        name="sinopse"
                        value={formData.sinopse}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="preco">Preço:</label>
                    <input
                        type="text"
                        name="preco"
                        value={formData.preco}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="imagem">URL da Imagem:</label>
                    <input
                        type="text"
                        name="imagem"
                        value={formData.imagem}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <input type="submit" value="Cadastrar Livro" />
                </div>
            </form>
        </div>
    );
}
