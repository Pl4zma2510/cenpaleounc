import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import AdicionarAdmin from './adicionarAdmin';


function SearchAdmin(props) {

    function pesquisaColecao(){
        const col = document.getElementById('colecao').value
        props.colecao(col)
      }
  
      function pesquisaNumero(){
        const num = document.getElementById('numero').value
        props.numero(num)
      }
  
      function resetar(){
        document.getElementById('colecao').value = 'CP.'
        document.getElementById('numero').value = ''
        props.refresh()
      }

    return (
        <div className="w-100 p-5">
           <div className="input-group justify-content-center">
           <AdicionarAdmin adicionar={props.adicionar} onClick={props.handleAdd}></AdicionarAdmin>
           <select onChange={pesquisaColecao} id="colecao" className="shadow border border-dark mr-2 input-lg">
           <option className="bg-warning" value="CP.">CP.</option>
                 <option className="bg-warning" value="CP.M">CP.M</option>
                 <option className="bg-warning" value="CP.I">CP.I</option>
                 <option className="bg-warning" value="CP.V">CP.V</option>
                 <option className="bg-warning" value="CP.B">CP.B</option>
                 <option className="bg-warning" value="CP.P">CP.P</option>
                 <option className="bg-secondary" value="CG.U">CG.U</option>
                 <option className="bg-secondary" value="CG.I">CG.I</option>
                 <option className="bg-secondary" value="CG.S">CG.S</option>
                 <option className="bg-secondary" value="CG.M">CG.M</option>
                 <option className="bg-secondary" value="CG.C">CG.C</option>
                 <option className="bg-secondary" value="CG.E">CG.E</option>
                 <option className="bg-success" value="CB.">CB.</option>
                 <option className="bg-success" value="CB.M">CB.M</option>
                 <option className="bg-success" value="CB.I">CB.I</option>
                 <option className="bg-success" value="CB.I.C">CB.I.C</option>
                 <option className="bg-success" value="CB.I.E">CB.I.E</option>
                 <option className="bg-success" value="CB.V">CB.V</option>
                 <option className="bg-success" value="CB.B">CB.B</option>
                 <option className="bg-info" value="CA.">CA.</option>
                 <option className="bg-danger" value="CD.D">CD.</option>
                 <option className="bg-danger" value="CD.P">CD.P</option>
                 <option className="bg-danger" value="CD.G">CD.G</option>
                 <option className="bg-danger" value="CD.B">CD.B</option>    
            </select>
            <div>
            <input id="numero" type="text" maxLength="4" placeholder="Número da Coleção" className="shadow border border-dark input-lg"></input>
            <button onClick={pesquisaNumero} type="button" className="btn btn-dark border border-dark btn-block mt-2" >Buscar Número</button>
            </div>
            <button onClick={resetar} type="button" className="ml-2 btn btn-dark">Limpar</button>
            </div>
        </div>

    );
  }
  
  export default SearchAdmin;