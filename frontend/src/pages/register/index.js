import React from 'react';
import './style.css';
import logo from '../../assets/logo.png';
import api from '../../services/api';
import { useHistory } from 'react-router-dom'

function Register() {
  const history = useHistory()

  async function handleRegister() {
    const inputs = document.querySelectorAll('input');

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].value === '') {
        alert(`Campo ${inputs[i].placeholder} está vazio`);
        return
      };
    };

    const data = { 
      name: inputs[0].value,
      price: Number(inputs[1].value),
      description: inputs[2].value,
      category: inputs[3].value,
      code: inputs[4].value
    };

    try {
      await api.post('/products', data);

      alert('Produto cadastrado com sucesso')
      
    } catch (error) {

      alert('Não foi possível efetuar o cadastro "nome ou código já existente"')
      
    }   
  };

  return (
    <div className="center">
      <img src={logo}/>
      <div className="headerRegister">
        <h1>Sistema para cadastro de produtos</h1>
      </div>
      <div className="content">

        <h2>Cadastre um produto</h2>
        <section className="input">
          <input type="text" className="name" placeholder="NOME"/>
          <input type="text" className="price" placeholder="VALOR"/>
          <input type="text" className="description" placeholder="DESCRIÇÃO"/>
          <input type="text" className="category" placeholder="CATEGORIA"/>
          <input type="text" className="code" placeholder="CÓDIGO"/>
        </section>

        <section className="buttons">
          <button onClick={() => {history.push('/catalog')}}  >Catalogo</button>
          <button onClick={handleRegister} >Registrar</button>
        </section>

      </div>

    </div>
  )
}

export default Register;
