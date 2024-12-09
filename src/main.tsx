import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import CadastroLivro from './componentes/cadastrolivro/cadastroLivro.tsx';
import ListaLivro from './componentes/listalivro/listaLivro.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/cadastro-livro",
    element: <CadastroLivro />, // Corrigido para o nome correto
  },
  {
    path: "/lista-livro",
    element: <ListaLivro />,
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
