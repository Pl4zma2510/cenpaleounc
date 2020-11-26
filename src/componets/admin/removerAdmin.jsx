import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Modal} from 'react-bootstrap';


function RemoverAdmin(props) {
    
   function remover(){
      props.remover(props.id)
      handleClose()
    }

    const [show,setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => (setShow(true));

    return (
      <div>
       <button className="btn-lg btn btn-danger border m-1 p-3 border-dark" onClick={handleShow}>
            <span>
                <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-trash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/>
                </svg>
            </span>
        </button>
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title><h1>Remover</h1></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h3>Tem certeza que gostaria de executar essa ação?</h3>
          </Modal.Body>
            <Modal.Footer>
                 <Button variant="btn btn-white border border-dark btn-lg p-3" onClick={handleClose}>Cancelar</Button>
                 <Button variant="btn btn-dark border border-dark btn-lg p-3" onClick={remover}>Excluir</Button>
            </Modal.Footer>
        </Modal>
      </div>
    );
  }
  
export default RemoverAdmin;