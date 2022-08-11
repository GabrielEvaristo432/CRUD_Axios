import carrosServices from "../services/carrosServices"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { useEffect } from "react";

function Edicao () {
  
  const { register, handleSubmit, formState: { errors } } = useForm();
  let navigateTo = useNavigate()
  const id = sessionStorage.getItem("id")

  async function Atualizar (id, data) {
    
    if(data.nome === null){
      data.nome = sessionStorage.getItem("nome")
    }

    if(data.modelo === null){
      data.modelo = sessionStorage.getItem("modelo")
    }
    
    if(data.ano === null){
      data.ano = sessionStorage.getItem("ano")
    }

    if(data.velocidade_maxima === null){
      data.velocidade_maxima = sessionStorage.getItem("velocidade_maxima")
    }

    if(data.potencia === null){
      data.potencia = sessionStorage.getItem("potencia")
    }

    if(data.aceleracao === null){
      data.aceleracao = sessionStorage.getItem("aceleracao")
    }

    await carrosServices.editarCarro(id, data)
    .then(navigateTo("/"))
  }

  useEffect(() => {
    document.getElementById("nome").value = sessionStorage.getItem("nome")
    document.getElementById("modelo").value = sessionStorage.getItem("modelo")
    document.getElementById("ano").value = sessionStorage.getItem("ano")
    document.getElementById("velocidade_maxima").value = sessionStorage.getItem("velocidade_maxima")
    document.getElementById("potencia").value = sessionStorage.getItem("potencia")
    document.getElementById("aceleracao").value = sessionStorage.getItem("aceleracao")
  }, "")
  
  return(
    <>
      <text
        style={{ textAlign: "center" }}
      > 
        Altere as informações do veículo abaixo: 
      </text>

      <form 
        onSubmit={handleSubmit(data => Atualizar(id, data))}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <label>
          Nome
        </label>
        <input
          id="nome"
          placeholder='Fiat Uno'
          {...register("nome")}
        />

        <label>
          Modelo
        </label>
        <input
          id="modelo"
          placeholder='Flex'
          {...register("modelo")}
        />

        <label>
          Ano
        </label>
        <input
          id="ano"
          placeholder='2007'
          {...register("ano")}
        />

        <label>
          Velocidade máxima
        </label>
        <input
          id="velocidade_maxima"
          placeholder='200 km/h'
          {...register("velocidade_maxima")}
        />

        <label>
          Potência
        </label>
        <input
          id="potencia"
          placeholder='180cv'
          {...register("potencia")}
        />

        <label>
          Aceleração
        </label>
        <input
          id="aceleracao"
          placeholder='5.0s'
          {...register("aceleracao")}
        />

        <button type="submit">
          Atualizar
        </button>
      </form>
    </>
  )
}

export default Edicao