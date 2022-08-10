import carrosServices from "../services/carrosServices"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

function Home() {

  const[carros, setCarros] = useState([])

  async function Listar () {
      await carrosServices.listarCarros()
      .then(res => setCarros(res.data))
  }

  async function Excluir (id) {
    await carrosServices.excluircarro(id)
    .then(() => Listar())
  }

  useEffect(() => {
    Listar()
  }, [])

  return (
    <>
      
      <div
        style={{
          display: "flex",
          flexDirection: "column"
        }}
      >
        <text
          style={{ textAlign: "center" }}
        >
          Bem vindo à TechRoad
        </text>

        <text
          style={{ textAlign: "center" }}
        >
          Confira a lista dos nossos carros, dos mais recentes aos mais clássicos
        </text>
      </div>
      
      

      <table
        style={{
          layout: "fixed",
          width: "100%",
          borderCollapse: "collapse",
          border: "3px",
          borderColor: "black",
          textAlign: "center",
          margin: 10
        }}
      >
        <thead>
          <th>Nome</th>
          <th>Modelo</th>
          <th>Ano</th>
          <th>Velocidade máxima</th>
          <th>Potência</th>
          <th>Aceleração</th>
          <th>Ações</th>
        </thead>

        <tbody>
            {carros.map(c => (
                <tr
                  style={{
                    textAlign: "center"
                  }}
                >
                    <td>{c.nome}</td>
                    <td>{c.modelo}</td>
                    <td>{c.ano}</td>
                    <td>{c.velocidade_maxima}</td>
                    <td>{c.potencia}</td>
                    <td>{c.aceleracao}</td>
                    <td>
                      <Link to="/editar">
                        <button>
                          Editar
                        </button>
                      </Link>

                      
                        <button onClick={() => Excluir(c.id)}>
                          Excluir
                        </button>
                      
                    </td>
                </tr>
            ))}
        </tbody>
      </table>

      <Link 
        to="/cadastro"
        style={{
          display: "flex",
          justifyContent: "center"
        }}
      >
        <button>
          Adicionar um carro
        </button>
      </Link>
    </>
  )
}

export default Home