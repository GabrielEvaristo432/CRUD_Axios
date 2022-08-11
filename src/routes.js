import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cadastro from './pages/Cadastro';
import Edicao from './pages/Edicao';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/edicao" element={<Edicao />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
