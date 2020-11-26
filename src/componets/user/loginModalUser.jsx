import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Modal, Form} from 'react-bootstrap';

function ModalLoginUser() {
    

    function logar(){
      const usuario = document.getElementById('user').value
      const senha = document.getElementById('pass').value
     if( usuario === 'unc@unc.com.br' && senha === '1234'){
       localStorage.setItem('isLogado',true)
       alert('Administrador Logado com Sucesso!')
       window.location.href = "http://localhost:3000/admin";
     }else{
       alert('Login Incorreto')
    }
  }
   
    const [show,setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {
      
      if (localStorage.getItem('isLogado') === 'true') {
         window.location.href = "http://localhost:3000/admin";
      }else{
        setShow(true)        
      }
    }
    return (
      <div>
        <Button variant="btn btn-dark border border-white btn-lg p-3" onClick={handleShow}>
          Login de Administrador
        </Button>
  
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title><h1>Login</h1></Modal.Title>
          </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group >
                        <input id="user" className="form-control form-control-lg" type="text" placeholder="Usuario"></input>
                        <br></br>
                        <input id="pass" className="form-control form-control-lg" type="password" placeholder="Senha"></input>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                 <Button variant="btn btn-white border border-dark btn-lg p-3" onClick={handleClose}>Cancelar</Button>
                 <Button variant="btn btn-dark border border-dark btn-lg p-3" onClick={logar}>Entrar</Button>
            </Modal.Footer>
        </Modal>
      </div>
    );
  }
export default ModalLoginUser;