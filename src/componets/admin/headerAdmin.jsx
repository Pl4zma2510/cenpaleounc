import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function user(){
    window.location.href = "http://localhost:3000/";
    localStorage.removeItem('isLogado')
    
}

function records(){
    window.location.href = "http://localhost:3000/records";

}

function HeaderAdmin() {
    return (
      <header className="shadow-lg p-2 bg-dark d-flex align-items-center justify-content-between">
          <h1 className="pl-2 text-white"><strong>Cenpaleo</strong> - Gerenciamento</h1>
          <div>
             <button onClick={records} className="btn btn-light border border-dark btn-lg p-3 mr-3">Registros</button>
             <button onClick={user} className="btn btn-dark border border-white btn-lg p-3">Sair</button>
          </div>
      </header>
       

    );
  }
  
  export default HeaderAdmin;