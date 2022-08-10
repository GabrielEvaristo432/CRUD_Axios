import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom'
import carrosServices from "../services/carrosServices";

function Cadastro () {
  
  const { register, handleSubmit, formState: { errors } } = useForm();
  let navigateTo = useNavigate()

  function Adicionar (data) {
    carrosServices.adicionarCarro(data)
    .then(navigateTo("/"))
  }
  
  return(
    <>
      <text
        style={{ textAlign: "center" }}
      > 
        Insira as informações do veículo abaixo: 
      </text>

      <form 
        onSubmit={handleSubmit(data => Adicionar(data))}
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
          {...register("nome", {required: true})}
        />

        <label>
          Modelo
        </label>
        <input
          id="modelo"
          placeholder='Flex'
          {...register("modelo", { required: true })}
        />

        <label>
          Ano
        </label>
        <input
          id="ano"
          placeholder='2007'
          {...register("ano", { required: true })}
        />

        <label>
          Velocidade máxima
        </label>
        <input
          id="valocidade_maxima"
          placeholder='200 km/h'
          {...register("velocidade_maxima", { required: true })}
        />

        <label>
          Potência
        </label>
        <input
          id="potencia"
          placeholder='180cv'
          {...register("potencia", { required: true })}
        />

        <label>
          Aceleração
        </label>
        <input
          id="aceleracao"
          placeholder='5.0s'
          {...register("aceleracao", { required: true })}
        />

        <button type="submit">
          Cadastrar
        </button>
      </form>
    </>
  )
}

export default Cadastro