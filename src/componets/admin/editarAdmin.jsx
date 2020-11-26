import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Modal} from 'react-bootstrap';


function EditarAdmin(props) {

  function entrou () {
    props.vizualizar(props.id)
   }


   function trazer(){
     document.getElementById('num_ed').value = props.view.numCollection
     document.getElementById('nome_ed').value = props.view.name
     document.getElementById('imagem_ed').value = props.view.image
     document.getElementById('colecao_ed').value = props.view.collec
     document.getElementById('categoria_ed').value = props.view.category
     document.getElementById('descricao_ed').value = props.view.description
     document.getElementById('origem_ed').value = props.view.origin
     document.getElementById('cenpaleo_ed').value = props.view.cenpaleo
     document.getElementById('localizacao_ed').value = props.view.location_in_cenpaleo
     document.getElementById('coletor_ed').value = props.view.collector
   }

   function editar(){
     const numCollection = document.getElementById('num_ed').value
     const name = document.getElementById('nome_ed').value
     const image = document.getElementById('imagem_ed').value
     const collec = document.getElementById('colecao_ed').value
     const category = document.getElementById('categoria_ed').value
     const description = document.getElementById('descricao_ed').value
     const origin = document.getElementById('origem_ed').value
     const cenpaleo = document.getElementById('cenpaleo_ed').value
     const location_in_cenpaleo = document.getElementById('localizacao_ed').value
     const collector = document.getElementById('coletor_ed').value
     const description_r = document.getElementById('motivo_ed').value
     
     if( cenpaleo === '' || numCollection === '' || name === '' ||
     image === '' || collec === '' || category === '' ||
     description === '' || origin === '' || collector === '' || collector === ''
     || description_r === ''){
       alert('Para registrar preenchar todos os campos!')
     }else{
       props.editar(props.id,numCollection,name,image,collec,category,description,origin,cenpaleo,location_in_cenpaleo,collector,description_r)
       alert('Item cadastrado com sucesso!')
       handleClose()
     }
     
   }

    const [show,setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => {
      entrou()
      setShow(true)
    };

    return (
      <div>
        <button className="btn-lg btn btn-warning border m-1 p-3 border-dark" onClick={handleShow}>
            <span>
                <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-file-earmark-text" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 1h5v1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6h1v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2z"/>
                    <path d="M9 4.5V1l5 5h-3.5A1.5 1.5 0 0 1 9 4.5z"/>
                    <path fillRule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
                </svg>
            </span>
        </button>
       
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
               <Modal.Title><h1 className="mt-2 mr-2">Editar</h1></Modal.Title>
               <Button variant="btn btn-dark border border-dark btn-lg p-3" onClick={trazer}>Trazer Dados</Button>
          </Modal.Header>
          <Modal.Body>
            <h3>Número da Coleção</h3>
            <input id="num_ed" type="number" className="shadow w-25 border border-dark input-sm mb-2"></input>
            <h3>Nome</h3>
            <input id="nome_ed" type="text" className="shadow w-75 border border-dark input-sm mb-2"></input>
            <h3>Imagem</h3>
            <input id="imagem_ed" type="text" className="shadow w-50 border border-dark input-sm mb-2"></input>
            <h3>Coleção</h3>
            <select id="colecao_ed" className="shadow border border-dark mr-2 input-sm mb-2">
                 <option className="bg-warning" value="CP.">CP.</option>
                 <option className="bg-warning" value="CP.M">CP.M</option>
                 <option className="bg-warning" value="CP.I">CP.I</option>
                 <option className="bg-warning" value="CP.V">CP.V</option>
                 <option className="bg-warning" value="CP.B">CP.B</option>
                 <option className="bg-warning" value="CP.P">CP.P</option>
                 <option className="bg-secondary" value="CG.">CG.U</option>
                 <option className="bg-secondary" value="CG.">CG.I</option>
                 <option className="bg-secondary" value="CG.">CG.S</option>
                 <option className="bg-secondary" value="CG.">CG.M</option>
                 <option className="bg-secondary" value="CG.">CG.C</option>
                 <option className="bg-secondary" value="CG.">CG.E</option>
                 <option className="bg-success" value="CB.">CB.</option>
                 <option className="bg-success" value="CB.">CB.M</option>
                 <option className="bg-success" value="CB.">CB.I</option>
                 <option className="bg-success" value="CB.">CB.I.C</option>
                 <option className="bg-success" value="CB.">CB.I.E</option>
                 <option className="bg-success" value="CB.">CB.V</option>
                 <option className="bg-success" value="CB.">CB.B</option>
                 <option className="bg-info" value="CA.">CA.</option>
                 <option className="bg-danger" value="CD.">CD.</option>
                 <option className="bg-danger" value="CD.">CD.P</option>
                 <option className="bg-danger" value="CD.">CD.G</option>
                 <option className="bg-danger" value="CD.">CD.B</option>    
            </select>
            <h3>Categoria</h3>
            <select id="categoria_ed" className="shadow border border-dark mr-2 input-sm mb-2">
                 <option value="Outra Categoria">Outra Categoria</option>
                 <option value="Arqueozoica">Arqueozoica</option>
                 <option value="Proterozoica">Proterozoica</option>
                 <option value="Paleozoica">Paleozoica</option>
                 <option value="Mesozoica">Mesozoica</option>
                 <option value="Cenozoica">Cenozoica</option>
            </select>
            <h3>Descrição</h3>
            <input id="descricao_ed" type="text" className="shadow w-100 border border-dark input-sm mb-2"></input>
            <h3>Origem</h3>
            <input id="origem_ed" type="text" className="shadow w-100 border border-dark input-sm mb-2"></input>
            <h3>Cenpaleo</h3>
            <input id="cenpaleo_ed" type="text" className="shadow w-50 border border-dark input-sm mb-2"></input>
            <h3>Localização no Cenpaleo</h3>
            <input id="localizacao_ed" type="text" className="shadow w-100 border border-dark input-sm mb-2"></input>
            <h3>Coletor</h3>
            <input id="coletor_ed" type="text" className="shadow w-50 border border-dark input-sm mb-2"></input>
            <h3>Motivo da Alteração</h3>
            <input id="motivo_ed" type="text" className="shadow w-100 border border-dark input-sm mb-2"></input>
           </Modal.Body>
            <Modal.Footer>
                 <Button variant="btn btn-white border border-dark btn-lg p-3" onClick={handleClose}>Cancelar</Button>
                 <Button variant="btn btn-dark border border-dark btn-lg p-3" onClick={editar}>Concluir</Button>
            </Modal.Footer>
        </Modal>
      </div>
    );
  }
  
export default EditarAdmin;