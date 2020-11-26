import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';


function SearchUser(props) {

    function pesquisaCat(){
      const cat = document.getElementById('categoria').value
      props.categoria(cat)
    }

    function pesquisaNome(){
      const nome = document.getElementById('nome').value
      props.nome(nome)
    }

    function resetar(){
      document.getElementById('categoria').value = 'Outra Categoria'
      document.getElementById('nome').value = ''
      props.refresh()
    }

    return (
        <div className="w-100 p-5">
           <div className="input-group justify-content-center">
           <select onChange={pesquisaCat} id="categoria" placeholder="Categoria" className="shadow border border-dark mr-2 input-lg">
                 <option value="Outra Categoria">Outra Categoria</option>
                 <option value="Arqueozoica">Arqueozoica</option>
                 <option value="Proterozoica">Proterozoica</option>
                 <option value="Paleozoica">Paleozoica</option>
                 <option value="Mesozoica">Mesozoica</option>
                 <option value="Cenozoica">Cenozoica</option>
            </select>
            <div>
            <input id="nome" type="text" placeholder="Nome" className="shadow border border-dark input-lg"></input>
            <button onClick={pesquisaNome} type="button" className="btn btn-dark border border-dark btn-block mt-2" >Buscar Nome</button>
            </div>
            <button onClick={resetar} type="button" className="ml-2 btn btn-dark">Limpar</button>
            </div>
        </div>

    );
  }
  
  export default SearchUser;