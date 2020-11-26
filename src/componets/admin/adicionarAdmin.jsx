import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Modal} from 'react-bootstrap';


function AdicionarAdmin(props) {

   function Registrar(){
     const cenpaleo = 'Univercidade do Contestado - Mafra/SC'
     const numCollection = document.getElementById('num_ad').value
     const name = document.getElementById('nome_ad').value
     const image = document.getElementById('imagem_ad').value
     const collec = document.getElementById('colecao_ad').value
     const category = document.getElementById('categoria_ad').value
     const description = document.getElementById('descricao_ad').value
     const origin = document.getElementById('origem_ad').value
     const location_in_cenpaleo = document.getElementById('localizacao_ad').value
     const collector = document.getElementById('coletor_ad').value
     
     if( cenpaleo === '' || numCollection === '' || name === '' ||
     image === '' || collec === '' || category === '' ||
     description === '' || origin === '' || location_in_cenpaleo === '' || collector === ''){
       alert('Para registrar preenchar todos os campos!')
     }else{
       props.adicionar(numCollection,name,image,collec,category,description,origin,cenpaleo,location_in_cenpaleo,collector)
       alert('Item cadastrado com sucesso!')
       handleClose()
     }
     
   }
   

    const [show,setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => (setShow(true));

    return (
      <div>
        <button type="button" className="mr-2 mt-1 btn btn-primary p-2 btn-lg border border-dark" onClick={handleShow}>
            <span>
                <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-plus-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4a.5.5 0 0 0-1 0v3.5H4a.5.5 0 0 0 0 1h3.5V12a.5.5 0 0 0 1 0V8.5H12a.5.5 0 0 0 0-1H8.5V4z"/>
                </svg>
            </span>
        </button>
       
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title><h1>Adicionar</h1></Modal.Title>
          </Modal.Header>
           <Modal.Body>
            <h3>Número da Coleção</h3>
            <input id="num_ad" type="number" className="shadow w-25 border border-dark input-sm mb-2"></input>
            <h3>Nome</h3>
            <input id="nome_ad" type="text" className="shadow w-75 border border-dark input-sm mb-2"></input>
            <h3>Imagem</h3>
            <input id="imagem_ad" type="text" className="shadow w-50 border border-dark input-sm mb-2"></input>
            <h3>Coleção</h3>
            <select id="colecao_ad" className="shadow border border-dark mr-2 input-sm mb-2">
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
            <h3>Categoria</h3>
            <select id="categoria_ad" className="shadow border border-dark mr-2 input-sm mb-2">
                 <option value="Arqueozoica">Arqueozoica</option>
                 <option value="Proterozoica">Proterozoica</option>
                 <option value="Paleozoica">Paleozoica</option>
                 <option value="Mesozoica">Mesozoica</option>
                 <option value="Cenozoica">Cenozoica</option>
                 <option value="Outra Categoria">Outra Categoria</option>
            </select>
            <h3>Descrição</h3>
            <input id="descricao_ad" type="text" className="shadow w-100 border border-dark input-sm mb-2"></input>
            <h3>Origem</h3>
            <input id="origem_ad" type="text" className="shadow w-100 border border-dark input-sm mb-2"></input>
            <h3>Localização no Cenpaleo</h3>
            <input id="localizacao_ad" type="text" className="shadow w-100 border border-dark input-sm mb-2"></input>
            <h3>Coletor</h3>
            <input id="coletor_ad" type="text" className="shadow w-75 border border-dark input-sm mb-2"></input>
           </Modal.Body>
            <Modal.Footer>
                 <Button variant="btn btn-white border border-dark btn-lg p-3" onClick={handleClose}>Sair</Button>
                 <Button variant="btn btn-dark border border-dark btn-lg p-3" onClick={Registrar}>Registrar</Button>
            </Modal.Footer>
        </Modal>
      </div>
    );
  }
  
export default AdicionarAdmin;