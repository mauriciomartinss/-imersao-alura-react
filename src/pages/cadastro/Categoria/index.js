import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PageDefault from '../../../components/PageDefault'
import FormField from '../../../components/FormField'

function CadastroCategoria() {
  
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
    
  }
  
  const [categorias, setCategorias] = useState([])
  const [values, setValues] = useState(valoresIniciais)
  
  
  // sem a desestruturação seria:
  // const values = useState(valoresIniciais)
  // const setValues = useState(valoresIniciais)
  

  function setValue(chave, valor) {
    // chave: nome, descricao, qualquer coisa.

    setValues({
      ...values,
      [chave]: valor,

    })

  }

  function handleChange(infosDoEvento){
    const { getAttribute, value } = infosDoEvento.target

    setValue(
      getAttribute('name'), 
      value
    )
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

    <form onSubmit={function handleSubmit(infosDoEvento) {
      infosDoEvento.preventDefault()
      setCategorias([
        ...categorias,
        values
      ])

      setValues(valoresIniciais)
    }}>

      <FormField 
        label="Nome"
        type="text"
        name="nome"
        value={values.nome}
        onChange={handleChange}
      />


      <FormField 
        label="Descrição"
        type="textarea"
        name="descricao"
        value={values.descricao}
        onChange={handleChange}
      />


      <FormField 
        label="Cor"
        type="color"
        name="cor"
        value={values.cor}
        onChange={handleChange}
      />
      

      <button>
        Cadastrar
      </button>
    </form>
      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={`${categoria}${indice}`}>
              {categoria.nome}
            </li>
          )
        })}
      </ul>


      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
  }

export default CadastroCategoria