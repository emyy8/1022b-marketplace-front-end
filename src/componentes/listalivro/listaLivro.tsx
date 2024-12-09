import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './listaLivro.css';

export default function ListaLivro() {
    const [livrosDisponiveis, setLivrosDisponiveis] = useState<any[]>([]);

    useEffect(() => {
        const obterLivros = async () => {
            try {
                const resposta = await fetch("https://one022b-marketplace-d6hb.onrender.com/livros");
                const livros = await resposta.json();
                setLivrosDisponiveis(livros);
            } catch (erro) {
                console.error("Erro ao carregar os livros:", erro);
            }
        };

        obterLivros();
    }, []);

    return (
        <div className="lista-livro-wrapper">
            <h1>Catálogo de Livros</h1>
            <div className="lista-livros">
                {livrosDisponiveis.length > 0 ? (
                    <ul>
                        {livrosDisponiveis.map((livro) => (
                            <li key={livro.id} className="livro-item">
                                <h2>{livro.titulo}</h2>
                                <img
                                    src={livro.imagem}
                                    alt={`Capa do livro ${livro.titulo}`}
                                    className="livro-imagem"
                                />
                                <p><strong>Autor:</strong> {livro.autor}</p>
                                <p><strong>Editora:</strong> {livro.editora}</p>
                                <p><strong>Preço:</strong> R$ {livro.preco}</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>Não há livros cadastrados no momento.</p>
                )}
            </div>
            <Link to="/" className="voltar-home">Voltar para a página inicial</Link>
        </div>
    );
}
