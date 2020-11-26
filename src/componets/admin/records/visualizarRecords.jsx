import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Modal} from 'react-bootstrap';


function VisualizarRecords(props) {
    
    const [show,setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () =>{setShow(true)};

    return (
      <div>
       <button className="btn-lg btn btn-success border m-1 p-3 border-dark" onClick={handleShow}>
            <span>
                <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-eye-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                    <path fillRule="evenodd" d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                </svg>
            </span>
        </button>
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title><h1>Visualização</h1></Modal.Title>
          </Modal.Header>
            <Modal.Body>
              <div className="p-2 mb-2 rounded text-white bg-dark d-flex justify-content-between">
                <h3>Número da Coleção:</h3>
              </div> 
              <div className="p-2 mb-2 rounded text-white bg-dark d-flex justify-content-between">
                <h3>Nome:</h3>
              </div> 
              <div className="p-2 mb-2 rounded text-white bg-dark d-flex justify-content-between">
                <h3>Imagem:</h3>
              </div> 
              <div className="p-2 mb-2 rounded text-white bg-dark d-flex justify-content-between">
                <h3>Coleção:</h3>
              </div> 
              <div className="p-2 mb-2 rounded text-white bg-dark d-flex justify-content-between">
                <h3>Categoria:</h3>
              </div> 
              <div className="p-2 mb-2 rounded text-white bg-dark d-flex justify-content-between">
                <h3>Descrição:</h3>
              </div> 
              <div className="p-2 mb-2 rounded text-white bg-dark d-flex justify-content-between">
                <h3>Origem:</h3>
              </div> 
              <div className="p-2 mb-2 rounded text-white bg-dark d-flex justify-content-between">
                <h3>Cenpaleo:</h3>
              </div> 
              <div className="p-2 mb-2 rounded text-white bg-dark d-flex justify-content-between">
                <h3>Localização no Cenpaleo:</h3>
              </div> 
              <div className="p-2 mb-2 rounded text-white bg-dark d-flex justify-content-between">
                <h3>Coletor:</h3>
              </div> 
              <div className="p-2 mb-2 rounded text-white bg-dark d-flex justify-content-between">
                <h3>Data da Coleta:</h3>
              </div> 
            </Modal.Body>
            <Modal.Footer>
                 <Button variant="btn btn-white border border-dark btn-lg p-3" onClick={handleClose}>Sair</Button>
            </Modal.Footer>
        </Modal>
      </div>
    );
  }
  
export default VisualizarRecords;