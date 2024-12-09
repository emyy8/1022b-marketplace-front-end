import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

type LivroType = {
    id: number;
    titulo: string;
    autor: string;
    editora: string;
    sinopse: string;
    preco: string;
    imagem: string;
};

function App() {
    const [livros, setLivros] = useState<LivroType[]>([]);

    useEffect(() => {
        // Ajuste para buscar os livros
        fetch("https://one022b-marketplace-d6hb.onrender.com/livros")
            .then(res => res.json())
            .then(setLivros)
            .catch((error) => console.error('Erro ao carregar os livros:', error));
    }, []);

    return (
        <>
            <header className="site-header">
                <nav className="navigation">
                    <ul>
                        <li><Link to="/">Ínicio</Link></li>
                        <li><Link to="/lista-livros">Lista de Livros</Link></li>
                        <li><Link to="/cadastro-livro">Cadastrar Livros</Link></li>
                    </ul>
                </nav>
            </header>

            <h1 className="titulo-lista">Lista de Livros</h1>

            <div className="container-livros">
                {livros.length > 0 ? (
                    livros.map((livro) => (
                        <div key={livro.id} className="livro-item">
                            <h2>{livro.titulo}</h2>
                            <img src={livro.imagem} alt={livro.titulo} className="livro-imagem" />
                            <div className="livro-info">
                                <p><b>Autor:</b> {livro.autor}</p>
                                <p><b>Editora:</b> {livro.editora}</p>
                                <p><b>Preço:</b> R$ {livro.preco}</p>
                                <p><b>Sinopse:</b> {livro.sinopse}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Carregando livros...</p>
                )}
            </div>
        </>
    );
}

export default App;
