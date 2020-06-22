import React, { useState, useEffect } from 'react';
import './style.css';
import logo from '../../assets/logo.png';
import { FcSearch } from 'react-icons/fc';
import { MdDelete } from 'react-icons/md';
import api from '../../services/api';
import { useHistory } from 'react-router-dom'

  function Catalog() {
    const history = useHistory()

    const [products, setProduct] = useState([]);
    const [categorias, setCategorias] = useState([]);
    const [filter, setFilter] = useState('');
    const [inputSearch, setInputSearch] = useState('');

    useEffect(() => {
      api.get('/products').then(res => {
        setProduct(res.data);
      })
    },[]);

    useEffect(() => {  
      let cat = {};
      const array = [];

      for (let i = 0; i < products.length; i++){
        cat[products[i].category] = products[i].category;
      }

      for (let i in cat){
        array.push(i);
      }

      setCategorias(array);
    },[products]);

    function handleFilter(filter_category) {
      setFilter(filter_category)
     
    }

    function searchProduct() {
      const input_value = document.querySelector('.searchProduct');
      console.log(input_value.value)
      setInputSearch(input_value.value);
    }

    async function deleteProduct(id){
      await api.delete(`/products/${id}`);

      api.get('/products').then(res => {
        setProduct(res.data);
      })
    }

    function Card(product){
      return(
        <section key={product.id} className="products">
        <section className="trash">
          <h2>{product.name}</h2>
          <a onClick={()=> deleteProduct(product.id, product.name)}>
            <MdDelete style={{width:'40px', height:'40px'}} />
          </a>
          
        </section>
        
        <h3>{product.category}</h3>
        <h4>R$ {product.price}</h4>
        <h4>Código: {product.code}</h4>
        <h4>Descrção: {product.description}</h4>          
        
      </section>
      )
    }

    return (
      <div className="center">

        <section className="upHeader">
          <a href=""></a>
          <img src={logo}/>
          <button className="back" onClick={() => {history.push('/')}}>Voltar</button>
        </section>

        <div className="header">
          <section className="searchName">
            <h3>Buscar produto pelo nome</h3>
            <input type="text" className="searchProduct" placeholder="NOME"/>
              <a onClick={searchProduct}>
                <FcSearch className="icon"/>
              </a>
          </section>

          <section className="searchCategory">
            <h2>Categorias cadastradas</h2>
            <section className="choice">
              {categorias.map(product => (
                <button onClick={() => { handleFilter(product) }}>{product}</button>
              ))}
            </section>
          </section>

        </div>

        <div className="catalog">
          {
          filter === '' && inputSearch === '' ? products.map(product => (
            Card(product)
          )): filter !== '' && inputSearch === '' ? products.filter(product => product.category === filter).map(product => (
            Card(product)
          )): products.filter(prod => prod.name === inputSearch).map(prod => Card(prod))}
        
        </div>
        
      </div>
    )
  }

  export default Catalog;